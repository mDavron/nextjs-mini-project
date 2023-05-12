import React from "react";
import Heading from "../components/Heading";
import Head from "next/head";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
};

export default Posts;
