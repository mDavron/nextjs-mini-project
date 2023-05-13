import React from "react";
import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};
  if (!post) {
    return <Heading tag="h2" text="Epmty Post" />;
  }
  return (
    <div>
      <Heading text={title} />
      <p>{body}</p>
    </div>
  );
};

export default PostInfo;
