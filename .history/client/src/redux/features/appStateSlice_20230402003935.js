import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    appState: "",
  },
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    },
  },
});

setAppState;
export default appStateSlice.reducer;
