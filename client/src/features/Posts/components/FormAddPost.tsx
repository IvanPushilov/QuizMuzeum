/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { postAdd } from '../postsSlice';
import { useAppDispatch } from '../../../store/store';

const FormAddPost = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useAppDispatch();

 

  const postAddFetch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('img', img);
    dispatch(postAdd(formData)).catch(console.log);
    setTitle('');
    setDescription('');
    setImg('');
};

  return (
    <div className="add__form__container">
      <div className="foram-add-record">
        <form className="add__form" onSubmit={postAddFetch}>
         
          <input
            className="input-order"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input-order"
            value={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="input-order"
            value={img}
            placeholder="img"
            onChange={(e) => setImg(e.target.value)}
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default FormAddPost;
