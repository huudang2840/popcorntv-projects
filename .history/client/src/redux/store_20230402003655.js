import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import userSlice,  from "./features/userSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
  },
});

export default store;
