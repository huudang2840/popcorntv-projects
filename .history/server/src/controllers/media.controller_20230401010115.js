import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favorite.model.js";
import reviewModel from "../models/review.model.js";

//  Danh sach
const getList = async (req, res) => {
  try {
    const { page } = req.query;
    const { mediaType, mediaCategory } = req.params;

    const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page });

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

// The loai
const getGenres = async (req, res) => {
  try {
    const { mediaType } = req.params;
    const response = await tmdbApi.mediaGenres({ mediaType });

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

// Tim kiem
const search = async (req, res) => {
  try {
    const { mediaType } = req.params;
    const { query, page } = req.query;

    const response = await tmdbApi.mediaSearch({
      query,
      page,
      mediaType: mediaType === "people" ? "person" : mediaType,
    });

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

// Chi tiet
const getDetail = async (req, res) => {
  try {
    const { mediaType, mediaId } = req.params;

    const media = await tmdbApi.mediaDetail({
      mediaType,
      mediaId,
    });
    media.credits = await tmdbApi.mediaCredits({});

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};
