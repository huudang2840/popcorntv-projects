import responseHandler from "../handlers/response.handler";
import reviewModel from "../models/review.model.js";

const create = async (req, res) => {
  try {
    const { movieId } = req.params;

    const review = new reviewModel({
      user: req.user.id,
      movieId,
      ...req.body,
    });

    await review.save();
  } catch {
    responseHandler.error(res);
  }
};

const t = async (req, res) => {
  try {
  } catch {
    responseHandler.error(res);
  }
};
