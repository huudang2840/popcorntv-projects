import axiosClient from "../axios/axios.client.js";
import tmpEndpoint from "./tmdb.endpoint.js";

const tmdApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    axiosClient.get(tmpEndpoint.mediaList({ mediaType, mediaCategory, page })),

  mediaDetail: async ({ mediaType, page }) =>
    axiosClient.get(tmpEndpoint.mediaDetail({ mediaType, page })),

  mediaGenres: async ({ mediaType }) => axiosClient.get(tmpEndpoint.mediaGenres({ mediaType })),

  mediaCredits: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaCredits({ mediaType, mediaId })),

  mediaVideos: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaVideos({ mediaType, mediaId })),

  mediaImages: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaImages({ mediaType, mediaId })),

  mediaRecommend: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaRecommend({ mediaType, mediaId })),

  mediaSearch: async ({ mediaType, query, page }) =>
    axiosClient.get(tmpEndpoint.mediaSearch({ mediaType, query, page })),

  personDetail: async ({ personId }) => axiosClient.get(tmpEndpoint.personDetail({ personId })),
};

export default tmdApi;
