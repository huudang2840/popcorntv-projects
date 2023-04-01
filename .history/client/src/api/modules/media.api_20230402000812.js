import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const mediaEndpoints = {
  list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
  search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
  getList: async ({ username, password }) => {
    try {
      const response = await publicClient.post(mediaEndpoints.signin, { username, password });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(mediaEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(mediaEndpoints.getInfo);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmPassword }) => {
    try {
      const response = await privateClient.put(mediaEndpoints.signup, {
        password,
        newPassword,
        confirmPassword,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default mediaApi;
