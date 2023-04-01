import { createSlice } from "@reduxjs/toolkit";

export const globalModalSlice = createSlice({
  name: "GlobalModal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModalOpen } = globalModalSlice.actions;

export default globalModalSlice.reducer;
