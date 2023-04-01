import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
  name: "AuthModal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    authModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAppState } = authModalSlice.actions;

export default authModalSlice.reducer;
