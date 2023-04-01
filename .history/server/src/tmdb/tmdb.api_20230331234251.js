import axiosClient from "../axios/axios.client.js";
import tmpEndpoint from "./tmdb.endpoint.js";

const tmdApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    axiosClient.get(tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page)),
  mediaDetail: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmdbConfig.getUrl(`${mediaType}/${mediaId}`)),
  mediaGenres: async ({ mediaType }) =>
    axiosClient.get(tmdbConfig.getUrl(`genre/${mediaType}/list`)),
  mediaCredits: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`)),
  mediaVideos: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`)),
  mediaImages: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`)),
  mediaRecommend: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`)),
  mediaSearch: async ({ mediaType, query, page }) =>
    axiosClient.get(tmdbConfig.getUrl(`search/${mediaType}`, { query, page })),
  personDetail: async ({ personId }) =>
    axiosClient.get(tmdbConfig.getUrl(`person/${personId}/combined_credits`)),
};

export default tmdApi;
