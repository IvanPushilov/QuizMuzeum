import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { QuestionId, QuestionState } from "./type";
import * as api from './api'

const initialState: QuestionState = {
  questions: [],
  message: '',
}

export const questionsLoad = createAsyncThunk('questions/load', () => api.questionsLoadFetch())
export const getQuestionId = createAsyncThunk('question/id', (id: string | undefined) => api.questionIdFetch(id))

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(questionsLoad.fulfilled, (state, action) => {state.questions = action.payload}).addCase(questionsLoad.rejected, (state, action) => {
      state.message = action.error.message
    })
  }
})

export default questionsSlice.reducer