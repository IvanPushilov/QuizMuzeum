/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Comment, CommentFetch, Post } from './type';

export const postsLoadFetch = async (): Promise<Post[]> => {
  const res = await fetch('/api/posts');
  const data = await res.json();
  return data.posts;
};
export const postAddFetch = async (obj: FormData): Promise<Post> => {
  const res = await fetch('/api/posts', {
    method: 'post',
    body: obj,
  });
  const data = await res.json();
  return data.post;
};

export const commentAddfetch = async (obj: CommentFetch): Promise<Comment> => {
  const res = await fetch('/api/comments', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data.commentUser;
};

export const commentsLoadFetch = async (id: string | undefined): Promise<Comment[]> => {
  const res = await fetch(`/api/comments/${id}`);
  const data = await res.json();
  return data;
};
