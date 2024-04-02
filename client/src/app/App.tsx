import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../features/Main/components/Main';

function App(): JSX.Element {

  return (
<Routes>
  <Route path='/' element={<Main/>}/>
</Routes>
  );
}

export default App;
