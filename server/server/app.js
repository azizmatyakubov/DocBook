import express from "express";
import { badRequestHandler, unauthorizedHandler, notFoundHandler, internalServerErrorHandler } from "./errorHandlers.js";
import cors from 'cors'

// Import Routers
import authRouter from "./routes/authRoute.js";
import patientRouter from "./routes/patientRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";
import slotsRouter from "./routes/slotsRoute.js";


// MongoDB connection
import connect from './config/database.js';
connect();


// Declare app
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Routes
app.use('/patients', patientRouter)
app.use('/auth', authRouter)
app.use('/doctors', doctorRouter)
app.use('/appointments', appointmentRouter)
app.use('/slots', slotsRouter)



// Error handlers
app.use(badRequestHandler)
app.use(unauthorizedHandler)
app.use(notFoundHandler)
app.use(internalServerErrorHandler)


export default app