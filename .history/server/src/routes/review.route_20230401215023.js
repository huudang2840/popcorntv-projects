import express from "express";
import reviewController from "../controllers/review.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/:personId/medias", personController.personDetail);

router.get("/:personId", personController.personDetail);

export default router;
