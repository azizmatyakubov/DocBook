import express from 'express';
import { createPatient } from '../controllers/PatientController.js';
import { loginPatient } from '../controllers/PatientController.js';

import { createDoctor } from '../controllers/doctorController.js';
import { loginDoctor } from '../controllers/doctorController.js';
import passport from 'passport';


const authRouter = express.Router()


authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
authRouter.get('/google/callback', passport.authenticate('google', {session: false}), (req, res) => {
    const accessToken = req.user.accessToken;
    try {
        res.redirect(`http://localhost:3000/dashboard?accessToken=${accessToken}`)
    } catch (error) {
        console.log(error);
    }
})




authRouter.post('/login', login)
authRouter.post('/doctor/login', loginDoctor)


authRouter.post('/patient/register', createPatient)
authRouter.post('/patient/login', loginPatient)

export default authRouter
