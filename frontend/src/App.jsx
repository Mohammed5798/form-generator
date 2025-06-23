import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPage from './pages/ForgotPage';

function App() {
  
  return (
   <div className=''>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/forgotPage' element={<ForgotPage/>} />
    </Routes>
   </div>
  )
}

export default App