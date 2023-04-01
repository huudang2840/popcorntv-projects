import { createSlice } from "@reduxjs/toolkit";

export const globalModalSlice = createSlice({
  name: "GlobalModal",
  initialState: {
    globalLoading: false,
  },
  reducers: {
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalModalSlice.actions;

export default globalModalSlice.reducer;
