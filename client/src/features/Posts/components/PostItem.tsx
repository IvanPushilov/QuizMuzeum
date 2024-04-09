import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../type';

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
