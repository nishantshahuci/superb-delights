import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "../../styles/base.css";
import "../../styles/reset.css";
import "../../styles/typography.css";
import "../../styles/variables.css";

import Loader from "../../components/Loader/Loader";

import { AnimatePresence } from "framer-motion";
import styles from "./App.module.css";

function App() {
  const [show, setShow] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // if the current path is just "/", redirect to the home page
  useEffect(() => {
    if (location.pathname === "/") navigate("/home", { replace: true });
  }, [location.pathname, navigate]);

  return (
    <div className={styles.app}>
      <Outlet />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <AnimatePresence>{show && <Loader />}</AnimatePresence>
    </div>
  );
}

export default App;
