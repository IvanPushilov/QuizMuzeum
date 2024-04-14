import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { commentsAddThunk, commentsLoadThunk } from '../commentsSlice';
import {postDel} from '../postsSlice'
import CommentItem from './CommentItem';
import '../styles/comment.css'
import '../styles/post.css';



function PostPage(): JSX.Element {
  const { postId } = useParams();
  const [commentValue, setComment] = useState('');
  const selectedPost = useSelector((store: RootState) =>
    store.posts.posts.find((post) => post.id === Number(postId)),
  );
  const comments = useSelector((store: RootState) => store.comment.comment);
  console.log(comments);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

const postDelete = ():void => {
  dispatch(postDel(selectedPost?.id)).catch(console.log);
  navigate('/posts');
}

  return (
    <div className='container-postpage'>
      <div>
      <div>
        <img className='img-post' src={selectedPost.img} alt="post" />
      </div>
      <div className='container-info'>
      <h1 className='info'>{selectedPost.title}</h1>
      <p className='info'>{selectedPost.description}</p>
      <p className='info'>{selectedPost.date}</p>
      </div>
      <div>{user?.role === 'admin' ?
      <div>
      <button onClick={postDelete} type="button">Удалить</button>
      
      </div> : null} 
  </div>
      </div>
      <div>
        
        <p>Коментарии</p>
        <div className='comment-main-container'>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
        </div>
        <form className='form-comment' onSubmit={commentAdd}>
          <input
            className="input-comment"
            value={commentValue}
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Оставить комментарий..."
          />
          <button className='btn' type="submit">Поделиться</button>
        </form>

      </div>
    </div>
  );
}

export default PostPage;
