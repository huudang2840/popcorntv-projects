import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    appState: "",
  },
  reducers: {
    appState: (state, action) => {
      state.setThemeMode = action.payload;
    },
  },
});

export const { setThemeMode } = appStateSlice.actions;

export default appStateSlice.reducer;
