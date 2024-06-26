import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { StateAuth, UserForAuthorisation, UserForRegistration } from "./type";
import * as api from './api'

const initialState: StateAuth  = {
user: null,
message: '',
}

export const authRegistration = createAsyncThunk('auth/registration', (obj: UserForRegistration) => api.registrationFetch(obj));
export const authLogin = createAsyncThunk('auth/sign-in', (obj: UserForAuthorisation) => api.authorisationFetch(obj));
export const authLogout = createAsyncThunk('auth/logout', () => api.logoutFetch());
export const authCheckUser = createAsyncThunk('auth/check-user', () => api.checkUserFetch());
export const userUpd = createAsyncThunk('profile/update', (obj: FormData) =>
api.profileUpdateFetch(obj))
export const userUpdateScore = createAsyncThunk('user/update', (id: number) => api.userUpdateScoreFetch(id))

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(authRegistration.fulfilled, (state, action) => {
      state.user = action.payload
      state.message = ''
    }).addCase(authRegistration.rejected, (state, action) => {
      state.message = action.error.message
    }).addCase(authLogout.fulfilled, (state) => {
      state.user = null;
      state.message = '';
    }).addCase(authLogout.rejected, (state) => {
      state.message = 'Logout error'
    }).addCase(authCheckUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.message = '';
    }).addCase(authCheckUser.rejected, (state, action) => {
      state.message = action.error.message;
    })
    .addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(authLogin.rejected, (state, action) => {
      state.message = action.error.message;
    })
    .addCase(userUpd.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(userUpd.rejected, (state, action) =>{
      state.message = action.error.message;
    }).addCase(userUpdateScore.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(userUpdateScore.rejected, (state, action) =>{
      state.message = action.error.message;
    })
  }
})

export default authSlice.reducer