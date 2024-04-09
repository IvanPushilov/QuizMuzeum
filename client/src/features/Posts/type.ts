export type Post = {
    id: number;
    title: string;
    description: string;
    img: string;
    date: string;
  }
  
export type PostsState = {
  posts: Post[],
  message: string | undefined
}


  export type PostItemId = Post['id']
  
 