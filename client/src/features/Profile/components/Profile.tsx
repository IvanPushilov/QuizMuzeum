import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/reglog.css';
import type { RootState} from '../../../store/store';
import { useAppDispatch } from '../../../store/store';

function Profile ():JSX.Element {
    const dispatch = useAppDispatch();
    const user = useSelector((store: RootState) => store.auth.user);
  
  return (
    <div>
      <img src={user?.img} alt="huy marka" />
    <p>Имя: {user?.name}</p>
    <p>Очки: {user?.score}</p>
    <p>Почта: {user?.email}</p>
    </div>
   
    
  )
}

export default Profile;