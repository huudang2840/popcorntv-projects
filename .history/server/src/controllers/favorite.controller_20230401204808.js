import responseHandler from "../handlers/response.handler";
import favoriteModel from "../models/favorite.model";

// Them yeu thich
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
    responseHandler.created(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

// Xoa yeu thich
const removeFavorite = async (req, res) => {
  try {
    const { favoriteId } = req.params;
    const favorite = await favoriteModel.findOne({
      user: req.user.id,
      _id: favoriteId,
    });
    if (!favorite) return responseHandler.notFound(res);

    await favorite.remove();
    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

//Lay yeu thich cua User
const getFavoritesOfUser = async (req, res) => {
  try {
    const favorite = await favoriteModel
      .findOne({
        user: req.user.id,
      })
      .sort();
  } catch {
    responseHandler.error(res);
  }
};
