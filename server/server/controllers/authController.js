import createHttpError from "http-errors";
import GoogleStrategy from 'passport-google-oauth20';
import Doctor from '../models/DoctorModel.js';
import { generateAccessToken } from '../lib/generateToken.js';
import { doctorRegisterValidator, loginValidator } from "../validators/authValidator.js";

// Doctor Google Strategy
export const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/auth/google/callback',
        passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
        try {
            const doctor = {
                googleId: profile.id,
                name: profile.displayName,
                surname: profile.name.familyName,
                email: profile.emails[0].value,
                password: profile.id,
                role: 'doctor',
                image: profile.photos[0].value,
                country: profile._json.locale,
            };
         
    
            const existingDoctor = await Doctor.findOne({ email: doctor.email });
            if (!existingDoctor) {
                const newDoctor = new Doctor(user);
                await newDoctor.save();
                const accessToken = await generateAccessToken({ _id: newDoctor._id });
                done(null, { newDoctor, accessToken });
            } else { 
                const accessToken = await generateAccessToken({ _id: existingDoctor._id });
                done(null, { existingDoctor, accessToken });
            }

        } catch (error) {
            console.log(error)
        } 
    }
);

export const registerDoctor = async (req, res, next) => {
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



export const registerPatient = async (req, res, next) => {
    const { error } = patientRegisterValidator(req.body);
    if (error) return next(createHttpError(400, error.details[0].message));

    const { name, surname, email, password } = req.body;
    const patient = new Patient({
        name,
        surname,
        email, 
        password
    });
    
    try {
        const savedPatient = await patient.save();
        res.status(201).json({
            message: "Patient is created",
            id: savedPatient._id
        });
    } catch (err) {
        next(err);
    }
}




export const login = async (req, res, next) => {
    try {
        let user;

        // check password
        const isMatch = await bcrypt.compare(req.body.password, doctor.password);


    } catch (error) {
        console.log(error)
    }
}
        





