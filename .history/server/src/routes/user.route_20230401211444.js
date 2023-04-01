import express from "express";
import { body } from "express-validator";
import favoriteController from "../controllers/favorite.controller.js";
import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userModel from "../models/user.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post(
  "/signup",
  body("username")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters")
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject("Username already used");
    }),

  body("password").isLength({ min: 0 }).withMessage("Username minimum 8 characters"),

  body("confirmPassword")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters")
    .custom( (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject("Username already used");
    })
);
