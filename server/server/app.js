import express from "express";
import { badRequestHandler, unauthorizedHandler, notFoundHandler, internalServerErrorHandler } from "./errorHandlers.js";
import cors from 'cors'
import passport from "passport";

// Import Routers
import authRouter from "./routes/authRoute.js";
import patientRouter from "./routes/patientRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";
import slotsRouter from "./routes/slotsRoute.js";




// MongoDB connection
import connect from './config/database.js';
connect();

import googleStrategy from "./controllers/authController.js";


// Declare app
const app = express()

passport.use('google', googleStrategy)

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());


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