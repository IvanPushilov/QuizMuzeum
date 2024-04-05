import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Main from '../features/Main/components/Main';
import RegistrationPage from '../features/Auth/components/RegistrationPage';
import AuthorisationPage from '../features/Auth/components/AuthorisationPage';
import { useAppDispatch } from '../store/store';
import { authCheckUser } from '../features/Auth/authSlice';
import MainPage from '../features/MainContent/components/MainPage';
import { tournamentsLoad } from '../features/Tournament/tournamentsSlice';
import TournamentsPage from '../features/Tournament/components/TournamentsPage';
import { postAdd, postsLoad } from '../features/Posts/postsSlice';
import PostPage from '../features/Posts/components/PostPage';
import GamePage from '../features/Tournament/GamePage';

function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckUser()).catch(console.log)
    dispatch(tournamentsLoad()).catch(console.log)
    dispatch(postsLoad()).catch(console.log)
    // dispatch(postAdd()).catch(console.log)
  }, [])

  return (
<Routes>
  <Route path='/' element={<Main/>}>
  <Route index element={<MainPage/>}/>
  <Route path='sign-up' element={<RegistrationPage/>} />
  <Route path='sign-in' element={<AuthorisationPage/>} />
  <Route path='tournaments' element={<TournamentsPage/>}/>
  <Route path='posts/:postId' element={<PostPage/>}/>
  <Route path='tournaments/:tournamentId' element={<GamePage/>}/>
  </Route>
</Routes>
  );
}

export default App;
