import type { Answer, Question, QuestionId, Tournament } from "./type";

export const tournamentsLoadFetch = async (): Promise<Tournament[]> => {
  const res = await fetch('/api/tournaments')
  const data = await res.json()
  return data.tournaments
}

export const questionsLoadFetch = async (): Promise<Question[]> => {
  const res = await fetch('/api/questions')
  const data = await res.json()
  return data.questions
}

export const answersLoadFetch = async (): Promise<Answer[]> => {
  const res = await fetch('/api/answers')
  const data = await res.json()
  return data.answers
}

export const questionIdFetch = async (id: string | undefined): Promise<Question> => {
  const res = await fetch(`/api/questions/${id}`)
  const data = await res.json()
  return data.question
}