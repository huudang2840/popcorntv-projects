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
  mediaCredits: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`);
  },
  mediaVideos: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`);
  },
  mediaRecommend: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`);
  },
  mediaSearch: ({ mediaType, query, page }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`);
  },
};

export default tmdEndpoints;
