import mongoose from "mongoose";
import modelOptions from "./model.options";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  displayName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  salt: {
    type: String,
    require: true,
  },
});
