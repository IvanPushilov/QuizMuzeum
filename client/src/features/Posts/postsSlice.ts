import { PostsState } from "./type";
import * as api from './api';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: PostsState = {
posts: [],
message: '',
}

export const postsLoad = createAsyncThunk('posts/load', () =>
 api.postsLoadFetch())

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
    }
})

export default postsSlice.reducer