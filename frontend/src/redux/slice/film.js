import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../http";
const HTTP_STATUS = Object.freeze({
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
});
const namespace = "film";

export const FetchFilm = createAsyncThunk(`${namespace}/FetchFilm`, async (payload) => {
  const { data } = await Request({
    url: `film/${payload}/comment`,
    type: "get",
  }); 
  return data;
});
export const FetchFilms = createAsyncThunk(`${namespace}/FetchFilms`, async (payload) => {
  const { data } = await Request({
    url: "film",
    type: "get",
  });

  return data;
});

export const CreateFilms = createAsyncThunk(`${namespace}/CreateFilms`, async (payload) => {
  const { data } = await Request({
    url: "film",
    type: "post",
    data: payload,
    isMulti:true
  });

  return data;
});
export const filmSlice = createSlice({
  name: namespace,
  initialState: {
    films: [],
    filmComments: null,
  },
  reducers: {},
  extraReducers: {
    [FetchFilm.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [FetchFilm.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
    [FetchFilm.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.filmComments = payload;
    },

    [FetchFilms.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [FetchFilms.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [FetchFilms.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.films = payload;
    },
  
      
    [CreateFilms.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [CreateFilms.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [CreateFilms.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
    },
  },
});

export default filmSlice.reducer;
