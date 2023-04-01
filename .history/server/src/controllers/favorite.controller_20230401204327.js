import responseHandler from "../handlers/response.handler";
import favoriteModel from "../models/favorite.model";

const addFavorite = async (req, res) => {
  try {
    const isFavorite = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId,
    });
    if (isFavorite) return responseHandler.ok(res, isFavorite);
    const favorite = new favoriteModel({
      ...req.body,
      user: req.user.id,
    });
    await favorite.save();
  } catch {
    responseHandler.error(res);
  }
};

const t = async (req, res) => {
  try {
  } catch {}
};
