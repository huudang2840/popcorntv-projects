import express from "express";
import { body } from "express-validator";
import reviewController from "../controllers/review.controller.js";
import requestHandler from "../handlers/request.handler.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", tokenMiddleware.auth, reviewController.getReviewsOfUser);
router.get("/", tokenMiddleware.auth, reviewController.getReviewsOfUser);

export default router;
