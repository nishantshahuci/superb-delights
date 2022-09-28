import { motion } from "framer-motion";
import React from "react";

import { ReactComponent as Fork } from "../../assets/icons/fork.svg";
import { ReactComponent as Spoon } from "../../assets/icons/spoon.svg";

import styles from "./Loader.module.css";

const animation = {
  opacity: 1,
  rotateZ: [null, "-50deg", "360deg"],
  x: [null, 0, 50],
  y: -50,
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse",
    repeatDelay: 0.5,
    type: "spring",
    bounce: 0.7,
    opacity: {
      repeat: 0,
    },
  },
};

const exitAnimation = {
  x: [null, 0, 0, 0],
  y: [null, -40, -50, 50],
  rotateZ: [null, "-45deg", "-50deg", "-60deg"],
  opacity: [null, 1, 0.5, 0],
  transition: {
    duration: 1,
    type: "tween",
  },
};

const loaderVariants = {
  initial: { opacity: 0, rotateZ: "-45deg", y: -40 },
  flip: { rotateY: "180deg" },
  animation: animation,
  flipAnimation: {
    ...animation,
    x: [null, 0, -50],
  },
  exit: exitAnimation,
};

const Loader = () => {
  return (
    <div className={styles.loader}>
      <motion.div
        className={styles.forkContainer}
        variants={loaderVariants}
        initial="initial"
        animate="animation"
        exit="exit"
      >
        <Fork />
      </motion.div>
      <motion.div
        className={styles.spoonContainer}
        variants={loaderVariants}
        initial={["initial", "flip"]}
        animate={["animation", "flipAnimation"]}
        exit="exit"
      >
        <Spoon />
      </motion.div>
    </div>
  );
};

export default Loader;
