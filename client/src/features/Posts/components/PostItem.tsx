import React from 'react';
import type { Post } from '../type';
import { Link } from 'react-router-dom';

function PostItem({ post }: { post: Post }): JSX.Element {
  return (
    <div>
      <Link onClick={() => window.scrollTo(0, 0)} to={`/posts/${post.id}`}>
        <div>
          <img src={post.img} alt="post" />
        </div>
        <h1>{post.title}</h1>
        <a href={post.file}>Скачать файл</a>
        <p>{post.description}</p>
      </Link>
    </div>
  );
}

export default PostItem;
