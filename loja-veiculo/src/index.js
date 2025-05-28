import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer'

import Home from './components/pages/home/Home'
import Buy from './components/pages/buy/Buy'
import Sell from './components/pages/sell/Sell';
import Services from './components/pages/aesthetics/Services.js';
import Help from './components/pages/help/Help'
import Anunciar from './components/form/Anunciar.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/services' element={<Services />} />
        <Route path='/help' element={<Help />} />

        <Route path='/anunciar' element={<Anunciar />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
