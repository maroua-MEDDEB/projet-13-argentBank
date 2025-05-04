import { createSlice } from "@reduxjs/toolkit";
//----------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
//----------------------
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    login: (state) => {},
    register: (state) => {},
    logout: (state) => {
      state = {
        token: null,
        user: null,
      };
      return state;
    },
  },
});

export default authSlice.reducer;

export const { login, logout, register } = authSlice.actions;
