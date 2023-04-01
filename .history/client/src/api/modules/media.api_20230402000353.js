import privateClient from "../client/private.client.js";
import publicClient from "../client/public.client.js";

const mediaEndponits = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await publicClient.post(mediaEndponits.signin, { username, password });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(mediaEndponits.signup, {
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
      const response = await privateClient.get(mediaEndponits.getInfo);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmPassword }) => {
    try {
      const response = await privateClient.put(mediaEndponits.signup, {
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

export default userApi;
