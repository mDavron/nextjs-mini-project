import Head from "next/head";
import React from "react";
import Heading from "../../components/Heading";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map(({ id }) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
};
const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Single Post</title>
      </Head>
      <Heading tag="h3" text="Post" />
      <PostInfo post={post} />
    </div>
  );
};

export default Post;
