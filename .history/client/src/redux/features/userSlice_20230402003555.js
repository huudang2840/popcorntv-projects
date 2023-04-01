import { createSlice } from "@reduxjs/toolkit";

export const themeModeSlice = createSlice({
  name: "User",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setThemeMode: (state, action) => {
      state.setThemeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;
