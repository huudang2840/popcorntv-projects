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
    .exists()
    .withMessage("Username is required")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters")
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject("Username already used");
    }),

  body("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 0 })
    .withMessage("Password minimum 8 characters"),

  body("confirmPassword")
    .exists()
    .withMessage("Confirm password is required")
    .isLength({ min: 0 })
    .withMessage("Confirm password minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error("Confirm password is not match");
      return true;
    }),

  body("displayName")
    .exists()
    .withMessage("Display name is required")
    .isLength({ min: 0 })
    .withMessage("Display name minimum 8 characters"),

  requestHandler.validate,
  userController.signup
);

// Dang nhap
router.post(
  "/signin",
  body("username")
    .exists()
    .withMessage("Username is required")
    .isLength({ min: 0 })
    .withMessage("Username minimum 8 characters"),
  body("password").isLength({ min: 0 }).withMessage("Password minimum 8 characters"),
  requestHandler.validate,
  userController.signin
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

  body("newPassword")
    .exists()
    .withMessage("New password is required")
    .isLength({ min: 0 })
    .withMessage("New password minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error("Confirm password is not match");
      return true;
    }),

  requestHandler.validate,
  userController.updatePassword
);

// Lay thong tin users
router.get("/info", tokenMiddleware.auth, userController.getInfo);

// Lay thong tin yeu thich
router.get("/favorites", tokenMiddleware.auth, favoriteController.getFavoritesOfUser);

// Luu thong tin yeu thich
router.post(
  "/favorites",
  tokenMiddleware.auth,
  body("mediaType")
    .exists()
    .withMessage("mediaType is required")
    .custom((type) => ["movie", "tv"].includes(type).withMessage("mediaType invalid")),

  body("mediaId")
    .exists()
    .withMessage("mediaType is required")
    .custom((type) => ["movie", "tv"].includes(type).withMessage("mediaType invalid")),

  favoriteController.getFavoritesOfUser
);

export default router;
