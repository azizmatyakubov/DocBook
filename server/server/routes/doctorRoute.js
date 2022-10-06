import express from 'express'
import {createDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor, updateDoctorAvatar, loginDoctor } from '../controllers/doctorController.js';
import cloudinaryAvatarUpload from '../middlewares/cloudinary.js';
import { tokenVerification } from '../middlewares/tokenVerification.js';

const doctorRouter = express.Router()

doctorRouter.post('/register', createDoctor)

doctorRouter.post('/login', loginDoctor)

doctorRouter.get('/', getAllDoctors)

doctorRouter.get('/:id', tokenVerification, getDoctorById)

doctorRouter.put('/:id', tokenVerification, updateDoctor)

doctorRouter.put('/:id/avatar', tokenVerification, cloudinaryAvatarUpload, updateDoctorAvatar)

doctorRouter.delete('/:id', tokenVerification, deleteDoctor)

export default doctorRouter