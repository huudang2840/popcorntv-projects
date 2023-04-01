import publicClient from "../client/public.client.js";

const favoriteApi = {
  list: ({ mediaType }) => `${mediaType}/genres`,
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

export default genreApi;
