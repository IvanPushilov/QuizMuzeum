import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Main from '../features/Main/components/Main';
import RegistrationPage from '../features/Auth/components/RegistrationPage';
import { useAppDispatch } from '../store/store';
import { authCheckUser } from '../features/Auth/authSlice';

function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckUser()).catch(console.log)
  }, [])

  return (
<Routes>
  <Route path='/' element={<Main/>}>
  <Route path='sign-up' element={<RegistrationPage/>} />
  </Route>
</Routes>
  );
}

export default App;
