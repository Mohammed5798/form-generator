import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPage from './pages/ForgotPage';
import MainPage from './pages/MainPage';
import FormAiPage from './pages/FormAiPage';
import ManualForm from './pages/ManualForm';
import CreateFrom from './pages/CreateFrom';
import FormBuilder from './pages/FormBuilder';
import QRCodePage from './pages/QRCodePage';
import FormResponsesPage from './pages/FormResponsesPage';
import FormStylePage from './pages/FormStylePage';
import PreviewPage from './pages/PreviewPage';
import FormPage from './user-pages/FormPage';
import QRSuccessPage from './user-pages/QRSuccessPage';

function App() {
  
  return (
   <div className='w-screen overflow-hidden'>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
      <Route path='/forgotPage' element={<ForgotPage/>} />
      <Route path='/main' element={<MainPage/>} />
      <Route path='/formAI' element={<FormAiPage/>}/>
      <Route path='/createForm' element={<CreateFrom/>} />
      <Route path='/manualForm' element={<ManualForm/>} />
      <Route path='/formBuilder' element={<FormBuilder/>}/>
      <Route path='/qrPage' element={<QRCodePage/>} />
      <Route path='/formResponses' element={<FormResponsesPage/>} />
      <Route path='/formStyle' element={<FormStylePage/>}/>
      <Route path='/preview' element={<PreviewPage/>}/>


      <Route path='/formPage' element={<FormPage/>}/>
      <Route path='/qrSuccess' element={<QRSuccessPage/>} />
    </Routes>
   </div>
  )
}

export default App