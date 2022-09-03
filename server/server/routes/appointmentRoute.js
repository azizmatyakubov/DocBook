import express from 'express'

import { createAppointment, getAllAppointments, getAppointmentById, getAppointmentByDoctorId, updateAppointment, deleteAppointment } from '../controllers/appointmentController.js'
import { permission } from '../middlewares/permission.js'
import { tokenVerification } from '../middlewares/tokenVerification.js'

const appointmentRouter = express.Router()


appointmentRouter.post('/', tokenVerification, createAppointment)

appointmentRouter.get('/', tokenVerification, getAllAppointments)

appointmentRouter.get('/doctor/:id', tokenVerification, getAppointmentByDoctorId)

appointmentRouter.get('/:id', tokenVerification, getAppointmentById)

appointmentRouter.put('/:id', tokenVerification, updateAppointment)

appointmentRouter.delete('/:id', tokenVerification, deleteAppointment)


export default appointmentRouter;
