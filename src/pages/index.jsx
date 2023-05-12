import React from "react";
import styles from "../styles/Home.module.scss";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading text="Next JS Application" />
    </div>
  );
};

export default Home;
