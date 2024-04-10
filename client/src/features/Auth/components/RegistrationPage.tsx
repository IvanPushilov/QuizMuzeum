/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, ref, string } from 'yup';
import { useAppDispatch } from '../../../store/store';
import { authRegistration } from '../authSlice';
import type { UserForRegistration } from '../type';

const checkfild = object().shape({
  name: string().required('Необходимо указать имя'),
  email: string().required('Необходимо указать электронную почту'),
  password: string()
    .required('Необходимо указать пароль')
    .min(8, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов'),
  rpassword: string()
    .required('Необходимо подтвердить пароль')
    .min(8, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForRegistration>({ resolver: yupResolver(checkfild) });

  const registration: SubmitHandler<UserForRegistration> = (data: UserForRegistration) => {
    dispatch(authRegistration(data)).catch(console.log);
    navigate('/');
  };

  return (
    <div className="auth-form">
  <div className="auth-form__container">
    <div className="auth-form__content">
      <form className="auth-form__form" onSubmit={handleSubmit(registration)}>
      

        <div className="auth-form__input-group">
          <input
            type="text"
            className="auth-form__input"
            placeholder="Ваше имя"
            {...register('name')}
          />
          <i className="auth-form__icon" />
          <div className="auth-form__error">{errors.name?.message}</div>
        </div>
        <div className="auth-form__input-group">
          <input
            type="email"
            className="auth-form__input"
            placeholder="Электронная почта"
            {...register('email')}
          />
          <i className="auth-form__icon" />
          <div className="auth-form__error">{errors.email?.message}</div>
        </div>
        <div className="auth-form__input-group">
          <input
            type="password"
            className="auth-form__input"
            placeholder="Пароль"
            {...register('password')}
          />
          <i className="auth-form__icon" />
          <div className="auth-form__error">{errors.password?.message}</div>
        </div>
        <div className="auth-form__input-group">
          <input
            type="password"
            className="auth-form__input"
            placeholder="Повторите пароль"
            {...register('rpassword')}
          />
          <i className="auth-form__icon" />
          <div className="auth-form__error">{errors.rpassword?.message}</div>
        </div>
        <label>
          <input
            className="auth-form__checkbox"
            onChange={(e) => setChecked(e.target.checked)}
            checked={checked}
            type="checkbox"
          />
          Согласен с условиями обработки персональных данных
        </label>
        <div className="auth-form__form-group">
          <button disabled={!checked} type="submit" className="auth-form__button">
            Регистрация
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
export default RegistrationPage;
