import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { PostsState } from "./type";

import * as api from './api';

export const initialState: PostsState = {
posts: [],
message: '',
}

export const postsLoad = createAsyncThunk('posts/load', () =>
 api.postsLoadFetch())

 export const postAdd = createAsyncThunk('post/add', (obj: FormData) =>
  api.postAddFetch(obj))

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.
      addCase(postsLoad.fulfilled, (state, action) => {
          state.posts = action.payload
      })
      .addCase(postsLoad.rejected, (state, action) => {
          state.message = action.error.message
      })
      .addCase(postAdd.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(postAdd.rejected, (state, action) => {
        state.message = action.error.message;
      })
    }
})


export default postsSlice.reducer