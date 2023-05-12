import React from "react";
import Heading from "../components/Heading";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading tag="h2" text="Something is going wrong..." />
    </div>
  );
};

export default Error;
