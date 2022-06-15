import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Login from 'containers/Login'
import Home from 'containers/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
