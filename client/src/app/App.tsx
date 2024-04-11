import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { authCheckUser } from '../features/Auth/authSlice';
import AuthorisationPage from '../features/Auth/components/AuthorisationPage';
import RegLog from '../features/Auth/components/RegLog';
import Main from '../features/Main/components/Main';
import MainPage from '../features/MainContent/components/MainPage';
import { tournamentsLoad } from '../features/Tournament/tournamentsSlice';
import TournamentsPage from '../features/Tournament/components/TournamentsPage';
import { postsLoad } from '../features/Posts/postsSlice';
import PostPage from '../features/Posts/components/PostPage';
import Profile from '../features/Profile/components/Profile';
import GamePage from '../features/Tournament/components/GamePage';
import { questionsLoad } from '../features/Tournament/questionsSlice';
import { useAppDispatch } from '../store/store';
import { answersLoad } from '../features/Tournament/answersSlice';
import '../index.css'
import { albumLoad } from '../features/Album/albumSlice';

function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckUser()).catch(console.log)
    dispatch(tournamentsLoad()).catch(console.log)
    dispatch(postsLoad()).catch(console.log)
    dispatch(questionsLoad()).catch(console.log)
    dispatch(answersLoad()).catch(console.log)
    dispatch(albumLoad()).catch(console.log)
  }, [])

  return (
<Routes>
  <Route path='/' element={<Main/>}>
  <Route index element={<MainPage/>}/>
  <Route path='auth' element={<RegLog/>} />
  <Route path='sign-in' element={<AuthorisationPage/>} />
  <Route path='profile' element={<Profile/>}/>
  <Route path='tournaments' element={<TournamentsPage/>}/>
  <Route path='posts/:postId' element={<PostPage/>}/>
  <Route path='tournaments/:tournamentId/questions/:questionId' element={<GamePage/>}/>
  </Route>
</Routes>
  );
}

export default App;
