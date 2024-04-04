import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Main from '../features/Main/components/Main';
import RegistrationPage from '../features/Auth/components/RegistrationPage';
import AuthorisationPage from '../features/Auth/components/AuthorisationPage';
import { useAppDispatch } from '../store/store';
import { authCheckUser } from '../features/Auth/authSlice';
import MainPage from '../features/MainContent/components/MainPage';
import { quizzesLoad } from '../features/Quizzes/quizzesSlice';
import QuizzesPage from '../features/Quizzes/components/QuizzesPage';

function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckUser()).catch(console.log)
    dispatch(quizzesLoad()).catch(console.log)
  }, [])

  return (
<Routes>
  <Route path='/' element={<Main/>}>
  <Route index element={<MainPage/>}/>
  <Route path='sign-up' element={<RegistrationPage/>} />
  <Route path='sign-in' element={<AuthorisationPage/>} />
  <Route path='tournaments' element={<QuizzesPage/>}/>
  </Route>
</Routes>
  );
}

export default App;
