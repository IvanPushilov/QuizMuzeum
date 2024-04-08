import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState} from '../../../store/store';
import { useAppDispatch } from '../../../store/store';

function Profile ():JSX.Element {
    const dispatch = useAppDispatch();
    const user = useSelector((store: RootState) => store.auth.user);
  
  return (
    
    <div>Привет {user?.name}</div>
    
  )
}

export default Profile;