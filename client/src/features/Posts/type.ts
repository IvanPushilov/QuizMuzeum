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
  
  export type PostItemId = Post['id']
  
 