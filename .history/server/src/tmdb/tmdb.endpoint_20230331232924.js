import tmdbConfig from "./tmdb.config";

const tmdEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) => {
    tmdbConfig.getUrl();
  },
};

export default tmdEndpoints;
