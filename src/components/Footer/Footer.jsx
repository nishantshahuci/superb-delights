import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
