import mongoose from "mongoose";
import modelOptions from "./model.options";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
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
  },
  modelOptions
);

userSchema.method.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512");
};
