import axiosClient from "../axios/axios.client.js";
import tmpEndpoint from "./tmdb.endpoint.js";

const tmdApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) => {
    axiosClient.getUrl(`${mediaType}/${mediaCategory}`, page);
  },
  mediaDetail: async ({ mediaType, mediaId }) => {
    axiosClient.getUrl(`${mediaType}/${mediaId}`);
  },
  mediaGenres: async ({ mediaType }) => {
    axiosClient.getUrl(`genre/${mediaType}/list`);
  },
  mediaCredits: async ({ mediaType, mediaId }) => {
    axiosClient.getUrl(`${mediaType}/${mediaId}/credits`);
  },
  mediaVideos: async ({ mediaType, mediaId }) => {
    axiosClient.getUrl(`${mediaType}/${mediaId}/videos`);
  },
  mediaImages: async ({ mediaType, mediaId }) => {
    axiosClient.getUrl(`${mediaType}/${mediaId}/images`);
  },
  mediaRecommend: async ({ mediaType, mediaId }) => {
    axiosClient.getUrl(`${mediaType}/${mediaId}/recommendations`);
  },
  mediaSearch: async ({ mediaType, query, page }) => {
    axiosClient.getUrl(`search/${mediaType}`, { query, page });
  },
  personDetail: async ({ personId }) => {
    axiosClient.getUrl(`person/${personId}/combined_credits`);
  },
};

export default tmdApi;
