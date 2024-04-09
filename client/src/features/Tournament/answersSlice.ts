import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnswerState } from "./type";
import * as api from './api'

const initialState: AnswerState = {
  answers: [],
  answer:null,
  message: '',
}

export const answersLoad = createAsyncThunk('answers/load', () => api.answersLoadFetch())
export const rightAnswer = createAsyncThunk('answers/id', (id: number) => api.answerIdFetch(id))



const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(answersLoad.fulfilled, (state, action) => {
      state.answers = action.payload
    }).addCase(answersLoad.rejected, (state, action) => {
      state.message = action.error.message
    })
    .addCase(rightAnswer.fulfilled, (state, action) => {
      state.answer = action.payload
    }).addCase(rightAnswer.rejected, (state, action) => {
      state.message = action.error.message
    })
  }
})

export default answersSlice.reducer