import tmdbConfig from "./tmdb.config";

const tmdEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page);
  },
  mediaDetail: ({ mediaType, mediaCategory, page }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`);
  },
};

export default tmdEndpoints;
