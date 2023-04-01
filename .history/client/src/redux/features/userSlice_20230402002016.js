import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorites: [],
  },
  reducers: {
    setUser: (sate, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
      }
    },

    setListFavorites: (sate, action) => {
      state.listFavorites = action.payload;
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
      }
    },
  },
});
