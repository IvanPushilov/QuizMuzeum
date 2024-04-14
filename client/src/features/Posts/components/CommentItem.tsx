import React from 'react';
import type { Comment } from '../type';
import '../styles/comment.css'
function CommentItem({comment}: {comment:Comment}): JSX.Element {
  return (
    <div className='container-comments'>
    <img className='img-comments' src={comment.User?.img} alt="" />
    <div className='cont-title-name'>
    <h5>{`${comment.User.name}:`}</h5>
    <p className='title-comment'>{comment.title}</p>
    </div>
    </div>
  );
}

export default CommentItem;
