import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import FormAddPost from '../../Posts/components/FormAddPost';
import '../styles/post.css';


function PostsPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const posts = useSelector((store: RootState) => store.posts.posts);
  return (
   
    <div className='container-posts'>
       <div>
        {user?.role === 'admin' && <p>Добавить пост</p> && <FormAddPost />}
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsPage;
