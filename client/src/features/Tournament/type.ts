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