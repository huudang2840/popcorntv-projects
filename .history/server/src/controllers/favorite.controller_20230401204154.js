import responseHandler from "../handlers/response.handler";
import favoriteModel from "../models/favorite.model";

const addFavorite = async (req, res) => {
  try {
    const isFavorite = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId,
    });
  } catch {
    responseHandler.error(res);
  }
};

const t = async (req, res) => {
  try {
  } catch {}
};
