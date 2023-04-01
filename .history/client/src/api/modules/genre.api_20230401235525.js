import publicClient from "../client/public.client.js";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
  medias: ({ person }) => `person/${persomId}/medias`,
};

export default genreEndpoints;
