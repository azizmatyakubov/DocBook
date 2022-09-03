import express from "express";
import { slotValidator } from "../validators/slotValidator.js";

import Slot from "../models/SlotsModel.js";
import Doctor from "../models/DoctorModel.js";
import SlotsModel from "../models/SlotsModel.js";

export const createSlots = async (req, res) => {

  const { startTime, endTime, duration } = req.body;

  let conflictingBookings = await Slot.find()
    .where('startTime').lt(endTime)
    .where('endTime').gt(startTime)
    .exec();


  try {
    slot = new SlotsModel({
      Monday: req.body.Monday,
      Tuesday: req.body.Tuesday,
      Wednesday: req.body.Wednesday,
      Thursday: req.body.Thursday,
      Friday: req.body.Friday,
    });

    const savedSlot = await slot.save();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }

  const doctor = await Doctor.findById(req.user._id).populate("slots");

  console.log(doctor);

  const updatedUser = await Doctor.findByIdAndUpdate(
    req.user._id,
    {
      $push: {
        slots: slot._id,
      },
    },
    { new: true }
  );

  res.status(201).json({
    status: "Success",
    message: "Slots created",
    data: {
      updatedUser,
    },
  });
};

export const getAllSlots = async (req, res) => {
  try {
    const slots = await Slot.find().populate("doctor");
    if (!slots) {
      return res.status(404).json({
        message: "No slots found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "All slots",
      data: {
        slots,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

export const getSlotById = async (req, res) => {
  try {
    const slot = await Slot.findById(req.params.id).populate("doctor");
    if (!slot) {
      return res.status(404).json({
        message: "Slot not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Slot found",
      data: {
        slot,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

export const getAllSlotsByDoctor = async (req, res) => {
  try {
    const slots = await Slot.find({ doctor: req.params.id }).populate("doctor");
    if (!slots) {
      return res.status(404).json({
        message: "No slots found",
      });
    }
    console.log(slots);
    res.status(200).json({
      status: "Success",
      message: "All slots",
      data: {
        slots,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

export const updateSlot = async (req, res) => {
  try {
    const slot = await Slot.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!slot) {
      return res.status(404).json({
        message: "Slot not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Slot updated",
      data: {
        slot,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

export const deleteSlot = async (req, res) => {
  try {
    const slot = await Slot.findByIdAndDelete(req.params.id);
    if (!slot) {
      return res.status(404).json({
        message: "Slot not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Slot deleted",
      data: {
        slot,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};
