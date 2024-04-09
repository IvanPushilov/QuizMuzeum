import React from 'react';
import type { Comment } from '../type';

function CommentItem({comment}: {comment:Comment}): JSX.Element {
  return (
<div>
    <p>{comment.title}</p>
</div>

  );
}

export default CommentItem;
