// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import './style/App.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
