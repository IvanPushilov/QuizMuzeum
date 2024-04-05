import { Post } from "./type";

export const postsLoadFetch = async():Promise<Post[]> => {
    const res = await fetch('/api/posts')
    const data = await res.json()
    return data.posts;

}
export const postAddFetch = async (obj: FormData): Promise<Post> => {
    const res = await fetch('/api/posts', {
      method: 'post',
      body: obj,
    });
    const data = await res.json();
    return data.post;
  };
  