import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

// Dang ky
const signup = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;
    const checkUser = await userModel.findOne({ username });

    if (checkUser) return responseHandler.badRequest(res, "username already used");

    const user = new userModel();
    user.displayName = displayName;
    user.username = username;
    user.setPassword(password);

    await user.save();

    const token = jsonwebtoken.sign({ data: user.id }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });

    responseHandler.created(res, { token, ...user._doc, id: user.id });
  } catch {
    responseHandler.error(res);
  }
};

// Dang nhap
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel
      .findOne({ username })
      .select("username password salt id displayName");

    if (!user) return responseHandler.badRequest(res, "User not exist");

    if (!user.validPassword) return responseHandler.badRequest(res, "Wrong password");
  } catch {
    responseHandler.error(res);
  }
};
