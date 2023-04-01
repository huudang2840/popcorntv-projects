import axiosClient from "../axios/axios.client.js";
import tmpEndpoint from "./tmdb.endpoint.js";

const tmdApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    axiosClient.get(tmpEndpoint.mediaList(`${mediaType}/${mediaCategory}`, page)),
  mediaDetail: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaDetail(`${mediaType}/${mediaId}`)),
  mediaGenres: async ({ mediaType }) =>
    axiosClient.get(tmpEndpoint.mediaGenres(`genre/${mediaType}/list`)),
  mediaCredits: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaCredits(`${mediaType}/${mediaId}/credits`)),
  mediaVideos: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaVideos(`${mediaType}/${mediaId}/videos`)),
  mediaImages: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaImages(`${mediaType}/${mediaId}/images`)),
  mediaRecommend: async ({ mediaType, mediaId }) =>
    axiosClient.get(tmpEndpoint.mediaRecommend(`${mediaType}/${mediaId}/recommendations`)),
  mediaSearch: async ({ mediaType, query, page }) =>
    axiosClient.get(tmpEndpoint.mediaSearch(`search/${mediaType}`, { query, page })),
  personDetail: async ({ personId }) =>
    axiosClient.get(tmpEndpoint.personDetail(`person/${personId}/combined_credits`)),
};

export default tmdApi;
