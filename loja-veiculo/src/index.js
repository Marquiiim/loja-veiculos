import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from './components/pages/home/Home'
import Buy from './components/pages/buy/Buy'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Home />} />
        <Route path='/services' element={<Home />} />
        <Route path='/help' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
