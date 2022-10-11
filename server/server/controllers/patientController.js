import Patient from "../models/PatientModel.js";
import createHttpError from "http-errors";
import { loginValidator, patientRegisterValidator } from "../validators/authValidator.js";



export const loginPatient = async (req, res, next) => {
    const { error } = loginValidator(req.body);
    if (error) return next(createHttpError(400, error.details[0].message));
    
    const { email, password } = req.body;

    try {
        let patient = await Patient.findOne({ email });
        if (!patient) return next(createHttpError(401, "Invalid email or password"));
        
        const isMatch = await patient.comparePassword(password);
        if(!isMatch)  return next(createHttpError(401, "Invalid email or password"));
             
        const token = patient.generateToken();

        res.status(200).json({
            message: "Patient logged in",
            token
        });
    } catch (err) {
        next(err);
    }
     
}

export const getAllPatients = async (req, res, next) => {
        try {
            const patients = await Patient.find();
            if(!patients) return next(createHttpError(404, "No patients found"));
          
            res.status(200).json({
                message: "All patients",
                patients
            });

        } catch (error) {
            next(error);
        }
    
}

export const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if(!patient) return next(createHttpError(404, "No patient found"));
        res.status(200).send({patient});
    } catch (error) {
        next(error);
    }
  
}


export const updatePatient = async (req, res) => {
    
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!patient) return next(createHttpError(404, "No patient found"));
        
        res.status(200).json({patient})
    }
    catch (error) {
        next(error);
    }
}


export const deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) return next(createHttpError(404, "No patient found"));

        res.status(204).json()

    } catch (error) {
        next(error);
    }
}


