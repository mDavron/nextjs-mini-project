import React from "react";
import styles from "../styles/Home.module.scss";
import Heading from "../components/Heading";
import Head from "next/head";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next JS Application" />
    </div>
  );
};

export default Home;
