import { configureStore } from "@reduxjs/toolkit";
import lanagueSlice from "./slices/languageSlice";
import buttonColor from "./slices/buttonColorsSlice";
import authSlice from "./slices/authSlice";
let store = configureStore({
  reducer: {
    language: lanagueSlice,
    buttonColor: buttonColor,
    auth: authSlice,
  },
});

export default store;
