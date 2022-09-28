import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./styles/base.css";
import "./styles/reset.css";
import "./styles/typography.css";
import "./styles/variables.css";

import styles from "./App.module.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // if the current path is just "/", redirect to the home page
  useEffect(() => {
    if (location.pathname === "/") navigate("/home", { replace: true });
  }, [location.pathname]);

  return (
    <div className={styles.icon}>
      hello world
      <Outlet />
    </div>
  );
}

export default App;
