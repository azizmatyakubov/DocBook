import express from 'express';
import { registerDoctor, registerPatient, login } from '../controllers/authController.js';

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
authRouter.post('/patient/register', registerPatient)
authRouter.post('/doctor/register', registerDoctor)


export default authRouter
