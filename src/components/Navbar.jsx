import React from 'react';
import { Link } from 'react-router-dom';

import '../style.css'

export default function Navbar() {

  return (
    <nav>
      <h1 id="siteHeaderText">seed theory</h1>
      <ul id='navLinks'>
          <li className='navlink'>
            <Link to="/">Home</Link>
          </li>
          <li className='navlink'>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
    </nav>
  );
}
