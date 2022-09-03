import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import Appointment from '../models/AppointmentModel.js';
import DoctorModel from '../models/DoctorModel.js';

import { sendEmail } from '../lib/email-tools.js';

export const createAppointment = async (req, res, next) => {
    try {
        const { patient, doctor, start, end } = req.body;
     
        if(!patient || !doctor || !start || !end) return next(createHttpError(400, "Missing required fields"));

        
        let conflictingAppointments = await Appointment.find()
            .where('doctor').equals(doctor)
            .where('start').lt(end)
            .where('end').gt(start)
            .exec();

        if(conflictingAppointments.length > 0) return next(createHttpError(400, "There is a already an appointment at this time"));
        

        const appointment = new Appointment({
            doctor,
            patient,
            start,
            end
        });

        const savedAppointment = await appointment.save();

        // add appointment id to doctor appointments
        const selectedDoctor = await DoctorModel.findById(doctor);
        if(selectedDoctor) {
            selectedDoctor.appointments.push(savedAppointment._id);
            await selectedDoctor.save();
            //await sendEmail(patient, 'New appointment created' , 'Click here to see the appointment' )
        }
        res.status(201).json({
            message: "Appointment created",
            appointment: savedAppointment
        });
    
    } catch (error) {
        next(error);
    }
} 

export const getAllAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find();
        if (!appointments)  return next(createHttpError(404, "No appointments found"));

        res.status(200).json({
            message: "All appointments",
            appointments
        });
    } catch (error) {
        next(error);
    }
}

export const getAppointmentById = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) return next(createHttpError(404, "Appointment not found"));

        res.status(200).json({appointment});
    } catch (error) {
        next(error);
    }
}

export const getAppointmentByDoctorId = async (req, res, next) => {

    try {
        const appointments = await Appointment.find({ doctor: req.params.id }).populate('patient').populate('doctor');
        if (!appointments) return next(createHttpError(404, "No appointments found"));

        res.status(200).json({appointments});

    } catch (error) {
        next(error);
    }

}

export const updateAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!appointment) return next(createHttpError(404, "Appointment not found"));

        res.status(200).json({appointment});
    } catch (error) {   
        next(error);
    }

} 
 
export const deleteAppointment = async (req, res, next) => {
        try {
            const appointment = await Appointment.findByIdAndDelete(req.params.id);

            if (!appointment) return next(createHttpError(404, "Appointment not found"));

            res.status(204).json()
        }
        catch (error) {
            next(error);
        }
}
