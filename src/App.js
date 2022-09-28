import React from "react";

import { ReactComponent as Icon } from "./assets/icons/storefront.svg";

import "./styles/base.css";
import "./styles/reset.css";
import "./styles/typography.css";
import "./styles/variables.css";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.icon}>
      hello world
      <Icon />
    </div>
  );
}

export default App;
