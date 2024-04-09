import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/reglog.css';
import type { RootState} from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import FormUpdateUser from './FormUpdateUser';

function Profile ():JSX.Element {
    const dispatch = useAppDispatch();
    const user = useSelector((store: RootState) => store.auth.user);
  
  return (
    <div>
      <img src={user?.img} alt="huy" />
    <p>имя: {user?.name}</p>
    <p>очки: {user?.score}</p>
    <p>почта: {user?.email}</p>
    <FormUpdateUser/>
    </div>
    
   
    
  )
}

export default Profile;