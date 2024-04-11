import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../type';
import '../styles/post.css';

function PostItem({ post }: { post: Post }): JSX.Element {
  return (
    <Link className="link-post" onClick={() => window.scrollTo(0, 0)} to={`/posts/${post.id}`}>
      <div className="container-postcard">
        <div>
          <div>
            <img className="img" src={post.img} alt="post" />
          </div>
          <div className="postcard-info"></div>
          <h1 className="info">{post.title}</h1>
          <p className="info">{post.description}</p>
          <p className="info">{post.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
