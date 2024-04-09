import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store/store';


function PostPage(): JSX.Element {
  const { postId } = useParams();
  const selectedPost = useSelector((store: RootState) =>
    store.posts.posts.find((post) => post.id === Number(postId)),
  );

  if (!selectedPost) {
    return <div>Карточка не найдена</div>;
  }

  return (
    <div>
      <div>
        <img src={selectedPost.img} alt="post" />
      </div>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.description}</p> 
      <p>{selectedPost.date}</p> 
      <button>del</button>
      <button>upd</button>
    </div>
  );
}

export default PostPage;
