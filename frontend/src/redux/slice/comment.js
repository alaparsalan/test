import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../http";
const HTTP_STATUS = Object.freeze({
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
});
const namespace = "comment";

export const FetchComments = createAsyncThunk(`${namespace}/FetchComment`, async (payload) => {
  const { data } = await Request({
    url: `film/${payload}/comment`,
    type: "get",
  }); 
  return data;
});

export const CreateComment = createAsyncThunk(`${namespace}/CreateComment`, async (payload) => {
  const {state, token} = payload
  const { data } = await Request({
    url: `film/${state.filmId}/comment`,
    type: "post",
    data: state,
    token:token
  });

  return data;
});

export const commentSlice = createSlice({
  name: namespace,
  initialState: {
    films: [],
    filmComments: null,
  },
  reducers: {},
  extraReducers: {

    [FetchComments.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [FetchComments.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [FetchComments.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.films = payload;
    },
  
      
    [CreateComment.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [CreateComment.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

    [CreateComment.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
    },
  },
});

export default commentSlice.reducer;
