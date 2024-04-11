import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function PostsPage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsPage;
