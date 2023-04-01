import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice.js";
import themeModeSlice from "./features/themeModeSlice.js";
import authModalSlice from "./features/authModelSlice.js";
import globalModalSlice from "./features/globalModalSlice.js";
import appStateSlice from "./features/appStateSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    authModal: authModalSlice,
    globalLoading: globalModalSlice,
    appState: appStateSlice,
  },
});

export default store;
