import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPage from './pages/ForgotPage';
import MainPage from './pages/MainPage';

function App() {
  
  return (
   <div className=''>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
      <Route path='/forgotPage' element={<ForgotPage/>} />
      <Route path='/main' element={<MainPage/>} />
    </Routes>
   </div>
  )
}

export default App