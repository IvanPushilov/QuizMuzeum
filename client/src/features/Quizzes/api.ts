import type { Quizz } from "./type";

export const quizzesLoadFetch = async (): Promise<Quizz[]> => {
  const res = await fetch('/api/quizzes')
  const data = await res.json()
  return data.quizzes
}