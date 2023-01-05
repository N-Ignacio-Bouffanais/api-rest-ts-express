import mongoose, { model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

mongoose.set("strictQuery", true);

const UserSchema = new Schema<User>(
  {
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: "descripcion del usuario..."
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);

export default UserModel;
