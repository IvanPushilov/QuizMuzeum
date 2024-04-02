import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { StateAuth, UserForAuthorisation, UserForRegistration } from "./type";
import * as api from './api'

const initialState: StateAuth  = {
user: null,
message: '',
}

export const authRegistration = createAsyncThunk('auth/registration', (obj: UserForRegistration) => api.registrationFetch(obj))
export const authLogin = createAsyncThunk('auth/login', (obj: UserForAuthorisation) => api.authorisationFetch(obj));


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(authRegistration.fulfilled, (state, action) => {
      state.user = action.payload
    }).addCase(authRegistration.rejected, (state, action) => {
      state.message = action.error.message
    })
    .addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(authLogin.rejected, (state, action) => {
      state.message = action.error.message;
    })
  }
})

export default authSlice.reducer