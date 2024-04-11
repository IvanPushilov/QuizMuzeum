import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { commentsAddThunk, commentsLoadThunk } from '../commentsSlice';
import CommentItem from './CommentItem';

function PostPage(): JSX.Element {
  const { postId } = useParams();
  const [commentValue, setComment] = useState('');
  const selectedPost = useSelector((store: RootState) =>
    store.posts.posts.find((post) => post.id === Number(postId)),
  );
  const comments = useSelector((store: RootState) => store.comment.comment);
  console.log(comments);
  
  const dispatch = useAppDispatch();

  const id = postId;

  useEffect(() => {
    dispatch(commentsLoadThunk(id)).catch(console.log);
  }, []);

  if (!selectedPost) {
    return <div>Карточка не найдена</div>;
  }

  const commentAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const obj = {
      title: commentValue,
      post_id: selectedPost.id,
    };
    dispatch(commentsAddThunk(obj)).catch(console.log);
  };

  return (
    <div>
      <div>
        <img src={selectedPost.img} alt="post" />
      </div>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.description}</p>
      <p>{selectedPost.date}</p>

      <button type="button">del</button>
      <button type="button">upd</button>
      <div>
        <p>Коментарии</p>
        <form onSubmit={commentAdd}>
          <input
            className="input-comment"
            value={commentValue}
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Оставить комментарий..."
          />
          <button type="submit">Поделиться</button>
        </form>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default PostPage;
