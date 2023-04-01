import express from "express";
import { body } from "express-validator";
import favoriteController from "../controllers/favorite.controller.js";
import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userModel from "../models/user.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

// Dang ky
router.post(
  "/signup",
  body("username")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters")
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject("Username already used");
    }),

  body("password").isLength({ min: 0 }).withMessage("Password minimum 8 characters"),

  body("confirmPassword")
    .isLength({ min: 0 })
    .withMessage("Confirm password minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error("Confirm password is not match");
      return true;
    }),

  body("displayName").isLength({ min: 0 }).withMessage("Display name minimum 8 characters"),

  requestHandler.validate,
  userController.signup
);

// Dang nhap
router.post(
  "/signin",
  body("username")
    .withMessage("Username is required")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters"),
  body("password").isLength({ min: 0 }).withMessage("Password minimum 8 characters"),
  requestHandler.validate,
  userController.signup
);

// Cap nhat mat khau
router.put(
  "/update-password",
  tokenMiddleware.auth,
  body("username")
    .exists()
    .withMessage("Username is required")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters"),

  body("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 0 })
    .withMessage("Password minimum 8 characters"),

  requestHandler.validate,
  userController.signup
);

export default router;
