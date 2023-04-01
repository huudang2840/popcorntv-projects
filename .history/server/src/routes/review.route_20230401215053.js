import express from "express";
import reviewController from "../controllers/review.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/:personId/medias", reviewController.personDetail);

router.get("/:personId", reviewController.personDetail);

export default router;
