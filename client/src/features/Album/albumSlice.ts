import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AlbumState } from "./type";
import * as api from './api'

const initialState: AlbumState = {
  img: [],
  message: '',
}

export const albumLoad = createAsyncThunk('album/load', () => api.albumLoadFetch())

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(albumLoad.fulfilled, (state, action) => {
      state.img = action.payload
    }).addCase(albumLoad.rejected, (state, action) => {
      state.message = action.error.message
    })
  }
})

export default albumSlice.reducer