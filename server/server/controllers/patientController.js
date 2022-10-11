import Patient from "../models/PatientModel.js";
import createHttpError from "http-errors";
import { loginValidator} from "../validators/authValidator.js";


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


