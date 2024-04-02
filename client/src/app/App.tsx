import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../features/Main/components/Main';
import RegistrationPage from '../features/Auth/components/RegistrationPage';
import AuthorisationPage from '../features/Auth/components/AuthorisationPage';

function App(): JSX.Element {

  return (
<Routes>
  <Route path='/' element={<Main/>}>
  <Route path='sign-up' element={<RegistrationPage/>} />
  <Route path='sign-in' element={<AuthorisationPage/>} />
  </Route>
</Routes>
  );
}

export default App;
