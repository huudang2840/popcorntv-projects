import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
  name: "AuthModal",
  initialState: {
    appState: "",
  },
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = authModalSlice.actions;

export default authModalSlice.reducer;
