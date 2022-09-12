import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import Doctor from "../models/DoctorModel.js";
import { doctorRegisterValidator, loginValidator } from "../validators/authValidator.js";

export const createDoctor = async (req, res, next) => {
    const { error } = doctorRegisterValidator(req.body);
    if (error) return next(createHttpError(400, error.details[0].message));

    let doctor = await Doctor.findOne({ email: req.body.email });
    if (doctor) return next(createHttpError(400, "Email already exists"));

  
    try {
        const doctor = new Doctor({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                role: req.body.role,
                availability: req.body.availability,
                experience: req.body.experience,
                specialization: req.body.specialization,
                country: req.body.country,
        });

        const savedDoctor = await doctor.save();

        res.status(201).json({
            message: "Doctor created",
            id: savedDoctor._id,
        });
    } catch (error) {
        console.log(error)
        next(error);
    }
}

export const loginDoctor = async (req, res, next) => {
    const { error } = loginValidator(req.body);
    if (error) return next(createHttpError(400, error.details[0].message));

    try {
        const doctor = await Doctor.findOne({email: req.body.email});
        if (!doctor) return next(createHttpError(401, "Email or password is incorrect"));


        // const isMatch = await doctor.comparePassword(req.body.password);
        // if (!isMatch) return next(createHttpError(401, "Email or password is incorrect"))

        console.log(doctor.password)
        // check password
        const isMatch = await bcrypt.compare(req.body.password, doctor.password);
        if (!isMatch) return next(createHttpError(401, "Email or password is incorrect"));


        const token = doctor.generateToken();
        
        res.status(200).json({
            id: doctor._id,
            token,
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}

export const getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find().populate("appointments");
        if (!doctors) return next(createHttpError(404, "Doctors not found"));

        res.status(200).json({
            doctors
        });
    } catch (error) {
        next(error);
    }
}

export const getDoctorById = async (req, res, next) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate("appointments");
        if (!doctor) return next(createHttpError(404, "Doctor not found"));
        res.status(200).json({doctor})
    } catch (error) {
        next(error);
    }
}

export const updateDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!doctor) return next(createHttpError(404, "Doctor not found"));

        res.status(200).json({
            message: "Doctor updated",
            doctor
        })
    } catch (error) {
        next(error);
    }
}

export const updateDoctorAvatar = async (req, res, next) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, { image: req.file.path }, { new: true });
        if (!doctor) return next(createHttpError(404, "Doctor not found"));

        res.status(200).json({
            message: "Doctor avatar updated",
            doctor
        })

    } catch (error) {
        console.log(error)
        next(error);
    }
}

export const deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) return next(createHttpError(404, "Doctor not found"));
        res.status(204).json()
    } catch (error) {
        console.log(error)
        next(error);
    }
}