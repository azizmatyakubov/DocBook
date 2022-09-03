import express from 'express'
import { getAllPatients, getPatientById, updatePatient, deletePatient } from '../controllers/patientController.js'
import { permission } from '../middlewares/permission.js'
import { tokenVerification } from '../middlewares/tokenVerification.js'

const patientRouter = express.Router()


patientRouter.get('/', tokenVerification,  getAllPatients)

patientRouter.get('/:id', tokenVerification, permission(['doctor', 'patient']), getPatientById)

patientRouter.put('/:id', tokenVerification, updatePatient)

patientRouter.delete('/:id', tokenVerification, deletePatient)



export default patientRouter