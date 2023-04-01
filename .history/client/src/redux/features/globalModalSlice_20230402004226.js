import { createSlice } from "@reduxjs/toolkit";

export const globalModalSlice = createSlice({
  name: "AuthModal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModalOpen } = gobalModalSlice.actions;

export default gobalModalSlice.reducer;
