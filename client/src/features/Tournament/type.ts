export type Tournament = {
  id: number;
  title: string;
  description: string;
  time: string;
  img: string;
}

export type TournamentItemId = Tournament['id']

export type TournamentState = {
  tournaments: Tournament[];
  message: string | undefined;
}

export type Question = {
  id: number;
  title: string;
  price: number;
  tournament_id: number;
  Answers: Answer[]
}

export type QuestionId = Question['id']

export type QuestionState = {
  questions: Question[],
  question:null | Question
  message: string | undefined
}

export type Answer = {
  id:number
  answer: string;
  question_id: number;
  isCorrect: boolean;
}


export type AnswerState = {
  answers: Answer[];
  answer: null | string
  message: string | undefined;
}