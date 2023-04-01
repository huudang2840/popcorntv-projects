import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty()) return res.status(400).json(err.array()[0].msg);
};
