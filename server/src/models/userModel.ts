import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { UserModel } from "../types/modelTypes";

const userSchema = new mongoose.Schema<UserModel>({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide a confirm password"],
    validate: {
      validator: function (this: UserModel, passwordConfirm: string) {
        return this.password === passwordConfirm;
      },
      message: "Passwords are not same",
    },
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
});

userSchema.methods.checkPassword = async function (
  inputPassword: string,
  encrytedPassword: string
) {
  return await bcrypt.compare(inputPassword, encrytedPassword);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password!, 12);
  this.passwordConfirm = undefined;
});

const User = mongoose.model<UserModel>("User", userSchema);

export default User;
