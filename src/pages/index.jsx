import React from "react";
import styles from "../styles/Home.module.scss";
import Heading from "../components/Heading";
import Head from "next/head";
import Socials from "../components/socials";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/socials`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { socials: data },
  };
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next JS Application" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
