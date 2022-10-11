import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { Schema, model } = mongoose;

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      default: "",
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
    bio: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "doctor",
    },

    specialization: {
      type: String,
      default: null,
    },

    experience: {
      type: Number,
      default: null,
    },

    availability: {
      type: [Array],
      default: [],
    },

    appointmentRequests: {
      type: [Schema.Types.ObjectId],
      ref: "AppointmentRequest",
      default: [],
    },
    
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        default: null,
      },
    ],

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        default: null,
      },
    ],

    image: {
      type: String,
      default: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
      
    },
    country: {
      type: String,
      default: "",
    },

    googleId: {
      type: String,
      default: null,
    },        

  },
  {
    timestamps: true,
  }
);

DoctorSchema.statics.generateToken = function (user) {
  const payload = {
    _id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}



DoctorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

DoctorSchema.methods.generateToken = function () {
  const payload = {
    _id: this._id,
    role: this.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

DoctorSchema.methods.toJson = function () {
  const doctorObject = this.toObject();
  delete doctorObject.password;
  return doctorObject;
};

export default model("Doctor", DoctorSchema);
