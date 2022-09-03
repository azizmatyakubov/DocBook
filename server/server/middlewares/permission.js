import Patient from "../models/PatientModel.js";
import Doctor from '../models/DoctorModel.js'

// permission
export const permission = (roles) => {

    return async (req, res, next) => {

        let user = await Patient.findById(req.user._id);

        if(!user) {
            user = await Doctor.findById(req.user._id);
        }
        
    
        if (!roles.includes(user.role)) {
            console.log(user.role);
            return res.status(403).json({
                status: "Fail",
                message: "You are not authorized to perform this action",
            });
        }
        next();
    }
}