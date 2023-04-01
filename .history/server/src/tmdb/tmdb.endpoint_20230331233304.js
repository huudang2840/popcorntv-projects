import tmdbConfig from "./tmdb.config";

const tmdEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page);
  },
  mediaDetail: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}`);
  },
  mediaGenres: ({ mediaType }) => {
    tmdbConfig.getUrl(`genre/${mediaType}/list`);
  },
  mediaGenres: ({ mediaType }) => {
    tmdbConfig.getUrl(`genre/${mediaType}/list`);
  },
};

export default tmdEndpoints;
