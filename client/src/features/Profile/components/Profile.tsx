import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/reglog.css';
import type { RootState} from '../../../store/store';
import FormUpdateUser from './FormUpdateUser';

function Profile ():JSX.Element {
  const [open, setOpen] = useState(true)
    const user = useSelector((store: RootState) => store.auth.user);
  
  return (
    
    <div className='container-profile'>
      <div className='profile'>

      <img className='img-profile' src={user?.img} alt="img" />
    <p className='name-profile'>Имя: {user?.name}</p>
    <p className='score-user'>Очки: {user?.score}</p>
    <p className='email-profile'>Почта: {user?.email}</p>
    <button className='btn-next2' onClick={() => setOpen((prev) => !prev)} type='button'>Редактировать профиль</button>
    </div>
    <div>    {open === true && <FormUpdateUser/>}</div>

    </div>
  )
}

export default Profile;