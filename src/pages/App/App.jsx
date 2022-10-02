import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "../../styles/base.css";
import "../../styles/reset.css";
import "../../styles/typography.css";
import "../../styles/variables.css";

import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import styles from "./App.module.css";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isIndexPage = location.pathname === "/";
  const isHomePage = location.pathname === "/home";

  // if the current path is just "/", redirect to the home page
  // which will populate the Outlet with the Home component
  useEffect(() => {
    if (isIndexPage) navigate("/home", { replace: true });
  }, [isIndexPage, navigate]);

  return (
    <>
      <header className={styles.header}>
        <Navbar />
        {isHomePage && <Carousel />}
      </header>
      <main className={`${styles.main}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
