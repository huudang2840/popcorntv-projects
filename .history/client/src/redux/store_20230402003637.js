import { configureStore } from "@reduxjs/toolkit";
import userSlice, { themeModeSlice } from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
  },
});

export default store;
