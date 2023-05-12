import React from "react";
import Heading from "../components/Heading";
import { useRouter } from "next/router";
const Error = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div>
      <Heading text="404" />
      <Heading tag="h2" text="Something is going wrong..." />
    </div>
  );
};

export default Error;
