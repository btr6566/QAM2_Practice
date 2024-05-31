import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import Shop from './pages/Shop'

export default function App() {
  return (
    // Use BrowserRouter as Root, to comply with JSX needing a single parent
    <BrowserRouter>
      <body>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
      </body>
    </BrowserRouter>
  );
}
