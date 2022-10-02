import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { carouselData, foods } from "../../api/api";
import useInterval from "../../utils/utils";

import styles from "./Carousel.module.css";

export default function Carousel() {
  const [count, setCount] = useState(0);

  const carouselDataArray = Object.entries(carouselData);

  const { reset: resetInterval } = useInterval(() => {
    setCount((c) => (c + 1) % Object.entries(carouselData).length);
  }, 4000);

  // get tag and caption based on counter
  const [tag, tagline] = carouselDataArray[count];

  // get possible food pictures to show
  const foodOptions = foods.filter((food) => food.tags.includes(tag));

  // shuffle the food options and pick a random one
  const food = foodOptions.sort(() => 0.5 - Math.random())[0];

  const foodImage = require(`../../assets/images/${food.image}`);
  const backgroundStyle = `linear-gradient(to bottom, rgba(36, 16, 2, 100%) 0%, rgba(36, 16, 2, 60%) 50%, rgba(0, 0, 0, 60%) 100%), url(${foodImage}) no-repeat center/cover`;

  const animationTransition = {
    transition: {
      duration: 1.5,
    },
  };

  const opacityVariant = {
    hidden: {
      opacity: 0,
      ...animationTransition,
    },
    visible: {
      opacity: 1,
      ...animationTransition,
    },
  };

  const transitionVariant = {
    right: {
      x: 10,
      ...animationTransition,
    },
    left: {
      x: -10,
      ...animationTransition,
    },
    center: {
      x: 0,
      ...animationTransition,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <section key={count} className={styles.carousel}>
        <motion.div
          style={{ background: backgroundStyle }}
          className={styles.carouselBackground}
          variants={opacityVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        />
        <div className={styles.carouselContent}>
          <motion.div
            variants={{ ...transitionVariant, ...opacityVariant }}
            initial={["left", "hidden"]}
            animate={["center", "visible"]}
            exit={["left", "hidden"]}
          >
            <h1>{tag}</h1>
            <h2>{tagline}</h2>
            <Link to={"/"}>Order Now</Link>
          </motion.div>
          <motion.div
            variants={{ ...transitionVariant, ...opacityVariant }}
            initial={["right", "hidden"]}
            animate={["center", "visible"]}
            exit={["right", "hidden"]}
          >
            <figure>
              <img src={foodImage} alt={food.image} />
              <figcaption>{food.name}</figcaption>
            </figure>
          </motion.div>
        </div>
        <div className={styles.indicators}>
          {carouselDataArray.map((data, index) => (
            <button
              className={index === count ? styles.active : ""}
              onClick={() => {
                resetInterval();
                setCount(index);
              }}
            ></button>
          ))}
        </div>
      </section>
    </AnimatePresence>
  );
}
