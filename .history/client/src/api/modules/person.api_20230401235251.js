import publicClient from "../client/public.client.js";

const personEndpoints = {
  detail: ({ person }) => `person/${persomId}`,
  medias: ({ person }) => `person/${persomId}/medias`,
};

const personApi = {
  detail: async ({ personId }) => {
    try {
      const response = await publicClient.get(personEndpoints.detail({ persomId }));
    } catch (err) {
      return { err };
    }
  },
};

export default personApi;
