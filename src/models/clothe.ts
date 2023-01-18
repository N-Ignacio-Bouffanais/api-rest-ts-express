import mongoose, { model, Schema, Types, Model } from "mongoose";
import { Clothe } from "../interfaces/clothe.interface";

mongoose.set("strictQuery", true);

const ClotheSchema = new Schema<Clothe>(
  {
    name: {
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
    size: {
      type: String || Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      enum: ["camisas", "poleras", "polerones", "pantalones", "chalecos"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClotheModel = model("clothes", ClotheSchema);

export default ClotheModel;
