import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {type TournamentState } from "./type";
import * as api from './api'

const initialState: TournamentState = {
  tournaments: [],
  message: '',
}

export const tournamentsLoad = createAsyncThunk('tournaments/load', () => api.tournamentsLoadFetch())

const tournamentsSlice = createSlice({
  name: 'tournaments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(tournamentsLoad.fulfilled, (state, action) => {
      state.tournaments = action.payload
    }).
    addCase(tournamentsLoad.rejected, (state, action) => {
      state.message = action.error.message
    })
  }
})

export default tournamentsSlice.reducer