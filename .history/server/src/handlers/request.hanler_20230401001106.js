import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const err = validationResult(req);
};
