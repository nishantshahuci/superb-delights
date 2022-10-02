import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={`${styles.navList}`}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li className={styles.navTitle}>
          <Link to="/">
            <h1 className={`${styles.navLogo}`}>
              <span>Superb</span>
              <Logo />
              <span>Delights</span>
            </h1>
          </Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/">Order</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
