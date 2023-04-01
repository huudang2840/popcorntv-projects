import express from "express";
import { body } from "express-validator";
import reviewController from "../controllers/review.controller.js";
import requestHandler from "../handlers/request.handler.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", tokenMiddleware.auth, reviewController.getReviewsOfUser);
router.post(
  "/",
  body("username")
    .exists()
    .withMessage("Username is required")
    .isLength({ min: 8 })
    .withMessage("Username minimum 8 characters")
);

export default router;
