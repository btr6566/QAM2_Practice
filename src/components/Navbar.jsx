import React from 'react';
import { Link } from 'react-router-dom';

// import '../style.css'
// import '../styles/Navbar.css'
import styles from './styles/Navbar.module.css'

export default function Navbar() {

  return (
    <nav className={styles.nav}>
      <h1 className={styles.siteHeaderText}>seed theory</h1>
      <ul className={styles.navLinks}>
          <li className={styles.navlink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
    </nav>
  );
}
