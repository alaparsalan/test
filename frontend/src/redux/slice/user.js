import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../http";
const HTTP_STATUS = Object.freeze({
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
});
const namespace = "user";

export const FetchLogin = createAsyncThunk(`${namespace}/FetchLogin`, async (payload) => {
  const { data } = await Request({
    url: "user/login",
    data: payload,
    type: "post",
  });
 
  return data;
});
export const Signup = createAsyncThunk(`${namespace}/FetchSignup`, async (payload) => {
  const { data } = await Request({
    url: "user",
    data: payload,
    type: "post",
  });
  return data;
});
export const FetchProfile = createAsyncThunk(`${namespace}/FetchProfile`, async (token) => {
  const { data } = await Request({
    url: "user/me",
    token: token,
    type: "get",
  });

  return data;
});

export const userSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    user: null,
    token: null,
  },
  reducers: {},
  extraReducers: {
    [FetchLogin.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [FetchLogin.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [FetchProfile.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.user = payload;
    },

    [FetchProfile.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },

    [FetchProfile.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [FetchLogin.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.token = payload.token;
    },
   

    [Signup.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },

    [Signup.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [Signup.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.user = payload;
    },
  },
});

export default userSlice.reducer;
