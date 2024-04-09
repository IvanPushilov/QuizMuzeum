import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "../features/Auth/authSlice"
import tournamentsSlice from "../features/Tournament/tournamentsSlice";
import postsSlice from "../features/Posts/postsSlice";
import commentsSlice from "../features/Posts/commentsSlice";



export const store = configureStore({
  reducer: {
    auth: authSlice,
    tournaments: tournamentsSlice,
    posts: postsSlice,
    comment: commentsSlice,

  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
