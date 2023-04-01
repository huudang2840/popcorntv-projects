import responseHandler from "../handlers/response.handler";
import tmdbApi from "../tmdb/tmdb.api.js";

// Thong tin nguoi dung
const personDetail = async (req, res) => {
  try {
    const personId = req.params;
    const person = await tmdbApi.personDetail({ personId });
    responseHandler.ok(res, person);
  } catch {
    responseHandler.error(res);
  }
};

const personMedias = async (req, res) => {
  try {
    const personId = req.params;
    const media = await tmdbApi.personMedias({ personId });
    responseHandler.ok(res, media);
  } catch {
    responseHandler.error(res);
  }
};
