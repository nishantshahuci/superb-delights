import React from "react";

import { ReactComponent as Fork } from "../../assets/icons/fork.svg";
import { ReactComponent as Spoon } from "../../assets/icons/spoon.svg";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <figure className={`${styles.logo}`}>
      <Fork />
      <Spoon />
    </figure>
  );
}
