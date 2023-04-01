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

    responseHandler.created(res, {
      ...review._doc,
      id: review.id,
      user: req.use,
    });
  } catch {
    responseHandler.error(res);
  }
};

const remove = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await reviewModel.findOne({ _id: reviewId, user: req.user.id });

    if (!review) return responseHandler.notFound(res);

    await review.remove();
    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getReviewOfUser = async (req, res) => {
  try {
    const review = await reviewModel.findOne({ _id: reviewId, user: req.user.id });

    if (!review) return responseHandler.notFound(res);

    await review.remove();
    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};
