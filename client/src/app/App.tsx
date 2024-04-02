import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../features/Main/components/Main';
import RegistrationPage from '../features/Auth/components/RegistrationPage';

function App(): JSX.Element {

  return (
<Routes>
  <Route path='/' element={<Main/>}>
  <Route path='sign-up' element={<RegistrationPage/>} />
  </Route>
</Routes>
  );
}

export default App;
