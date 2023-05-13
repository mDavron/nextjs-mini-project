import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading tag="h3" text="Posts List..." />
      <ul>
        {posts?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <b>{id} &nbsp;</b> {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
