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
        <p>{post.description}</p>
        <p>{post.date}</p>
      </Link>
    </div>
  );
}

export default PostItem;
