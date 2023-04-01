import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const userEndpoint = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
  getFavorites: "user/favorites",
  addFavorites: "user/favorites",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await publicClient.post(userEndpoint.signin, { username, password });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoint.signup, {
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
  getInfo: async ({}) => {
    try {
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({}) => {
    try {
    } catch (err) {
      return { err };
    }
  },
  getFavorites: async ({}) => {
    try {
    } catch (err) {
      return { err };
    }
  },
  addFavorites: async ({}) => {
    try {
    } catch (err) {
      return { err };
    }
  },
};
