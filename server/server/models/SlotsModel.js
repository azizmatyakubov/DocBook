import mongoose from "mongoose";
const { Schema, model } = mongoose;

const SlotsModel = new Schema(
    {
  
        Monday: {
            type: [String],
            required: true,
        },
        Tuesday: {
            type: [String],
            required: true,
        },
        Wednesday: {
            type: [String],
            required: true,
        },
        Thursday: {
            type: [String],
            required: true,
        },
        Friday: {
            type: [String],
            required: true,
        },
    }, 
    
    { timestamps: true }
);

SlotsModel.methods.toJson = function () {
    const slotsObject = this.toObject();
    delete slotsObject._id;
    delete slotsObject._createdAt;
    delete slotsObject._updatedAt;
    delete slotsObject.__v;

    return slotsObject;
};
  


export default model("Slots", SlotsModel);