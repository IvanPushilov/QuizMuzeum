import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {type QuizzState } from "./type";
import * as api from './api'

const initialState: QuizzState = {
  quizzes: [],
  message: '',
}

export const quizzesLoad = createAsyncThunk('quizzes/load', () => api.quizzesLoadFetch())

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(quizzesLoad.fulfilled, (state, action) => {
      state.quizzes = action.payload
    }).
    addCase(quizzesLoad.rejected, (state, action) => {
      state.message = action.error.message
    })
  }
})

export default quizzesSlice.reducer