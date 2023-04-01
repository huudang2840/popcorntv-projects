import publicClient from "../client/public.client.js";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};

const genreApi = {
  getList: async ({ personId }) => {
    try {
      const response = await publicClient.get(personEndpoints.detail({ personId }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default genreApi;
