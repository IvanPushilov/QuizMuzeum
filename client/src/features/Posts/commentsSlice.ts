import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { CommentFetch, CommentsState } from "./type";

import * as api from './api';

export const initialState: CommentsState = {
comment: [],
message: '',
}

export const commentsLoadThunk = createAsyncThunk('comments/load', (id:string | undefined) =>
 api.commentsLoadFetch(id))

 export const commentsAddThunk = createAsyncThunk('comments/add', (obj: CommentFetch) =>
  api.commentAddfetch(obj))

const postsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.
      addCase(commentsLoadThunk.fulfilled, (state, action) => {
          state.comment = action.payload
      })
      .addCase(commentsLoadThunk.rejected, (state, action) => {
          state.message = action.error.message
      })
      .addCase(commentsAddThunk.fulfilled, (state, action) => {
        state.comment.push(action.payload);
      })
      .addCase(commentsAddThunk.rejected, (state, action) => {
        state.message = action.error.message;
      })
    }
})


export default postsSlice.reducer