import privateClient from "../client/private.client.js";

const reviewEndpoints = {
  list: "reviews",
  add: "reviews",
  remove: ({ reviewId }) => `reviews/${reviewId}`,
};

const reviewApi = {
  
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, content }) => {
    try{
        const response = await privateClient.post(reviewEndpoints.add, {
            mediaId,
            mediaType,
            mediaTitle,
            mediaPoster,
            content,
          });
          return { response };

        
    }
    catch{}
  
};
