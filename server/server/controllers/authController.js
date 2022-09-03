import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  loginValidator,
} from "../validators/authValidator.js";
import User from "../models/PatientModel.js";
import Doctor from '../models/DoctorModel.js'



export const createUser = async (req, res) => {
  // const { error } = registerValidator(req.body);

  // if (error) {
  //   return res.status(400).json({
  //     status: "Fail",
  //     message: error.details[0].message,
  //   });
  // }

  let model = req.body.role === "doctor" ? Doctor : User;

  try {
    const existingUser = await model.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        status: "Fail",
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      role: req.body.role,
    });

    const doctor = new Doctor({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      role: req.body.role,
      availability: req.body.availability,
      experience: req.body.experience,
      specialization: req.body.specialization,
      country: req.body.country,
    });

    let savedUser = null;
    if(req.body.role === "doctor") {
      savedUser = await doctor.save();
    } else {
      savedUser = await user.save();
    }

  

    res.status(201).json({
      status: "Success",
      message: "User created",
      data: {
        user: savedUser,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { error } = loginValidator(req.body);


  if (error) {
    return res.status(400).json({
      status: "Fail",
      message: error.details[0].message,
    });
  }

  try {

    let user;

    user = await User.findOne({ email: req.body.email });
    if(!user) {
      user = await Doctor.findOne({ email: req.body.email }).populate('appointments');
    }  
      
  
    if (!user) {
      return res.status(400).json({
        status: "Fail",
        message: "Email or password is incorrect",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "Fail",
        message: "Email or password is incorrect",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.status(200).json({
      id: user._id,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
