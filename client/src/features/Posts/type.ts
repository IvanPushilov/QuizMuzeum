import { User } from "../Auth/type";

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

export type Comment = {
  id:number
  user_id:number
  title: string;
  post_id: number
  date:string
  User:User

}

export type CommentFetch = {
  title: string;
  post_id: number
}


export type CommentsState = {
  comment: Comment[],
  message: string | undefined
}


  export type PostItemId = Post['id']
  
 