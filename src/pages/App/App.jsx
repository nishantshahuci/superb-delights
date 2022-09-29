import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "../../styles/base.css";
import "../../styles/reset.css";
import "../../styles/typography.css";
import "../../styles/utils.css";
import "../../styles/variables.css";

import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import styles from "./App.module.css";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // if the current path is just "/", redirect to the home page
  // which will populate the Outlet with the Home component
  useEffect(() => {
    if (location.pathname === "/") navigate("/home", { replace: true });
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <section className="padding">
        <Carousel />
      </section>
      <main className={`${styles.main} flexColumn rounded padding`}>
        <Outlet />
      </main>
      <footer className="padding">
        <Footer />
      </footer>
    </>
  );
}
