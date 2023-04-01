import axiosClient from "../axios/axios.client.js";
import tmpEndpoint from "./tmdb.endpoint.js";

const tmdApi = {
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
  mediaImages: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`);
  },
  mediaRecommend: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`);
  },

  mediaSearch: ({ mediaType, query, page }) => {
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page });
  },
  personDetail: ({ personId }) => {
    tmdbConfig.getUrl(`person/${personId}/combined_credits`);
  },
};

export default tmdApi;
