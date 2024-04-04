import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "../features/Auth/authSlice"
import quizzesSlice from "../features/Quizzes/quizzesSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    quizzes: quizzesSlice,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
