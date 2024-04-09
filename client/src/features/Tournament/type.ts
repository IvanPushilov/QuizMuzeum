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
}

export type QuestionId = Question['id']

export type QuestionState = {
  questions: Question[],
  message: string | undefined
}

export type Answer = {
  answer: string;
  question_id: number;
  isCorrect: boolean;
}

export type AnswerState = {
  answers: Answer[];
  message: string | undefined;
}