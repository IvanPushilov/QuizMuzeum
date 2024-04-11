import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "../features/Auth/authSlice";
import postsSlice from "../features/Posts/postsSlice";
import questionSlice from "../features/Tournament/questionsSlice";
import tournamentsSlice from "../features/Tournament/tournamentsSlice";
import answersSlice from "../features/Tournament/answersSlice";
import commentsSlice from "../features/Posts/commentsSlice";
import albumSlice from "../features/Album/albumSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    tournaments: tournamentsSlice,
    posts: postsSlice,
    questions: questionSlice,
    answers: answersSlice,
    comment: commentsSlice,
    album: albumSlice,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
