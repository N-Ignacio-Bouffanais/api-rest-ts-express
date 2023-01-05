import mongoose, { model, Schema  } from "mongoose";
import { Electronic } from "../interfaces/electronic.interface";

//This line is for suppress a Mongoose warm.
mongoose.set("strictQuery", true);

const ElectronicSchema = new Schema<Electronic>(
  {
    model: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      enum: ["celular", "tablet", "laptop", "mouse", "monitor", "teclado"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    so:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ElectronicModel = model("electronis", ElectronicSchema);

export default ElectronicModel;
