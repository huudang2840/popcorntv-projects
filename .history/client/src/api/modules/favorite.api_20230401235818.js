import publicClient from "../client/public.client.js";

const favoriteEndpoints = {
  list: "user/favorites",
  add: "user/favorites",
  remove: ({ favoriteId }) => `user/favorites/${favoriteId}`,
};

const favoriteApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(genreEndpoints.list({ mediaType }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
