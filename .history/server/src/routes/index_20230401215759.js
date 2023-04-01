import express from "express";
import userRouter from "./user.route.js";
import mediaRouter from "./media.route.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/user", userRouter);

export default router;
