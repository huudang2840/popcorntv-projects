import mongoose from "mongoose";
import modelOptions from "./model.options";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  displayName: {
    type: String,
    require: true,
  },
  displayName: {
    type: String,
    require: true,
  },
  displayName: {
    type: String,
    require: true,
  },
});
