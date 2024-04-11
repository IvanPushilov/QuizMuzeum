import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../type';
import '../styles/post.css';

function PostItem({ post }: { post: Post }): JSX.Element {
  return (
    <div className='container-postcard'>
      <Link onClick={() => window.scrollTo(0, 0)} to={`/posts/${post.id}`}>
        <div className='img'>
          <img src={post.img} alt="post" />
        </div>
        <div className='postcard-info'></div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.date}</p>
      </Link>
    </div>
  );
}

export default PostItem;
