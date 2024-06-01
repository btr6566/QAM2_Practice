import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

export default function App() {
  return (
    // Use BrowserRouter as Root, to comply with JSX needing a single parent
    <BrowserRouter>  
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
    </BrowserRouter>
  );
}
