import GoogleStrategy from 'passport-google-oauth20';
import Doctor from '../models/DoctorModel.js';
import { generateAccessToken } from '../lib/generateToken.js';


// Doctor Google Strategy
const googleStrategy = new GoogleStrategy(
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

export default googleStrategy;
