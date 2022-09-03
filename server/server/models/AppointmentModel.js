import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AppointmentSchema = new Schema ({
    title: {
        type: String,
        default: "Meeting",
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },  
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    }
},

    {
        timestamps: true
    }
)

export default model("Appointment", AppointmentSchema);