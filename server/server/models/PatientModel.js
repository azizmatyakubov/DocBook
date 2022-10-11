import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { Schema, model } = mongoose;

const PatientSchema = new Schema(
    {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "patient",
    },
    appointments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        default: null,
    },
    image: {
        type: String,
        default: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
    }
    },
    {
        timestamps: true
    }
)


// check if password is correct
PatientSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}



PatientSchema.methods.generateToken = function () {
    const token = jwt.sign({
        _id: this._id,
        role: this.role,
    }, process.env.JWT_SECRET);
    return token;
}



PatientSchema.methods.toJson = function () {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}


const Patient = model("Patient", PatientSchema);
export default Patient;
