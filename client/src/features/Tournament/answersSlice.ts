import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnswerState } from "./type";
import * as api from './api'

const initialState: AnswerState = {
  answers: [],
  message: '',
}

export const answersLoad = createAsyncThunk('answers/load', () => api.answersLoadFetch())


const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(answersLoad.fulfilled, (state, action) => {
      state.answers = action.payload
    }).addCase(answersLoad.rejected, (state, action) => {
      state.message = action.error.message
    })
  }
})

export default answersSlice.reducer