export type Post = {
    id: number;
    title: string;
    description: string;
    file: 'pdf' | 'word';
    img: string;
  }
  
export type PostsState = {
  posts: Post[],
  message: string | undefined
}

export type TournamentState = {
  tournaments: Tournament[],
  message: string | undefined
}
export type Tournament = {
  id: number;
  title: string;
  description: string;
  img: string;
  time: string;
}

  export type TournamentItemId = Tournament['id']
  export type PostItemId = Post['id']
  
 