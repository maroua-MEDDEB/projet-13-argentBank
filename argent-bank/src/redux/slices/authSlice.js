import { createSlice } from "@reduxjs/toolkit";
//----------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
//----------------------
import axios from "axios";
// les actions login et register passes par 3 etats possibles
/* 
1- pending : requete on cours 
2- fulfilled : terminé avec succes + j'ai une reponse 
3- rejected : saret mochkla + ma3andich reponse 
*/

// createAsyncThunk : permet d'extraire les 3 etats d'une requete
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      let result = await axios.post(
        "http://localhost:3001/api/v1/user/signup",
        data
      );
      console.log(result.data);
      return result.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUSER",
  async (data, thunkAPI) => {
    try {
      let result = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        data
      );
      console.log(result.data);
      return result.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: "",
  },
  reducers: {
    logout: (state) => {
      state = {
        token: null,
        user: null,
      };
      return state;
    },
  },
  //builder = celui qui contruit
  // state = initialstate
  // action : result mta3 requete
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.msg = null;
      })
      // action.payload == res.body
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.msg = null;
      })
      // action.payload == res.body
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.error;
        } else {
          state.msg = action.payload.msg;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
