import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options";

export default mongoose.model("Review", mongoose.Schema({ user: { type: C } }));
