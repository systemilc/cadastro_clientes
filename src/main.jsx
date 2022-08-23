import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { Customers } from './assets/routes/Customers';
import { Home } from './assets/routes/Home';
import { Register } from './assets/routes/Register';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes>
    <Route path="/" element={<Home />}>  </Route>
    <Route path="/" element={<Customers />}>  </Route>
    <Route path="/" element={<Register />}>  </Route>
    </Routes>
  </React.StrictMode>
)
