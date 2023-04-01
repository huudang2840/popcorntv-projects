import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice.js";
import themeModeSlice from "./features/themeModeSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
  },
});

export default store;
