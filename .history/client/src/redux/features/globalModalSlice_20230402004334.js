import { createSlice } from "@reduxjs/toolkit";

export const globalModalSlice = createSlice({
  name: "GlobalModal",
  initialState: {
    globalLoading: false,
  },
  reducers: {
    setGlobalLoading: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModalOpen } = globalModalSlice.actions;

export default globalModalSlice.reducer;
