import express from 'express';
import { createPatient } from '../controllers/PatientController.js';
import { loginPatient } from '../controllers/PatientController.js';

import { createDoctor } from '../controllers/doctorController.js';
import { loginDoctor } from '../controllers/doctorController.js';


const authRouter = express.Router()


authRouter.post('/doctor/register', createDoctor);
authRouter.post('/doctor/login', loginDoctor)


authRouter.post('/patient/register', createPatient)
authRouter.post('/patient/login', loginPatient)

export default authRouter;
