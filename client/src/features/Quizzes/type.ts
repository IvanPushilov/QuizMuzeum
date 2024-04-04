export type Quizz = {
  id: number;
  title: string;
  description: string;
  time: string;
  img: string;
}

export type QuizzItemId = Quizz['id']

export type QuizzState = {
  quizzes: Quizz[];
  message: string | undefined;
}