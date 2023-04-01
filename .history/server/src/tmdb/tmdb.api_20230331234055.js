import axiosClient from "../axios/axios.client.js";
import tmpEndpoint from "./tmdb.endpoint.js";

const tmdApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) => {
    axiosClient.get(`${mediaType}/${mediaCategory}`, page);
  },
  mediaDetail: async ({ mediaType, mediaId }) => {
    axiosClient.get(`${mediaType}/${mediaId}`);
  },
  mediaGenres: async ({ mediaType }) => {
    axiosClient.get(`genre/${mediaType}/list`);
  },
  mediaCredits: async ({ mediaType, mediaId }) => {
    axiosClient.get(`${mediaType}/${mediaId}/credits`);
  },
  mediaVideos: async ({ mediaType, mediaId }) => {
    axiosClient.get(`${mediaType}/${mediaId}/videos`);
  },
  mediaImages: async ({ mediaType, mediaId }) => {
    axiosClient.get(`${mediaType}/${mediaId}/images`);
  },
  mediaRecommend: async ({ mediaType, mediaId }) => {
    axiosClient.get(`${mediaType}/${mediaId}/recommendations`);
  },
  mediaSearch: async ({ mediaType, query, page }) => {
    axiosClient.get(`search/${mediaType}`, { query, page });
  },
  personDetail: async ({ personId }) => {
    axiosClient.get(`person/${personId}/combined_credits`);
  },
};

export default tmdApi;
