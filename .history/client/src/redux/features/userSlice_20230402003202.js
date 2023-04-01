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
      sate.user = action.payload;
    },

    setListFavorites: (sate, action) => {
      state.listFavorites = action.payload;
    },

    removeFavorites: (sate, action) => {
      const { mediaId } = action.payload;
      sate.listFavorites = [...sate.listFavorites].filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },

    addFavorites: (sate, action) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },
  },
});

export const { setUser, setListFavorites, addFavorites, removeFavorites } = userSlice.actions;

export default userSlice.reducer;
