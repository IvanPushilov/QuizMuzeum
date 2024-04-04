import React from 'react'
import type { Post } from '../type'

function PostItem({post}: {post: Post}): JSX.Element {

  return (
    <div>
    <div>
      <img src={post.img} alt="post" />
    </div>
    <h1>{post.title}</h1>
    <a href={post.file}>Скачать файл</a>

    <p>{post.description}</p>
    </div>
  )
}

export default PostItem;