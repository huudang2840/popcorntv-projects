import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;
    const checkUser = await userModel.findOne({ username });

    if (checkUser) return responseHandler.badRequest(res, "username already used");

    const user = new userModel();
    user.displayName = displayName;
    user.username = username;
    user.setPassword(password);
  } catch {
    responseHandler.error(res);
  }
};
