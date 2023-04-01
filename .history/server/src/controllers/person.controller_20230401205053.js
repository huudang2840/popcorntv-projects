import responseHandler from "../handlers/response.handler";
import tmdbApi from "../tmdb/tmdb.api.js";

const personDetail = async (req, res) => {
  try {
    const personId = req.params;
  } catch {
    responseHandler.error(res);
  }
};
