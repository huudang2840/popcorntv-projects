import publicClient from "../client/public.client.js";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};

export default genreEndpoints;
