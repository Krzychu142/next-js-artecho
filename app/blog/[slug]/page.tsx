import React from "react";

const SingleBlogPost: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return <div>SingleBlogPost {params.slug}</div>;
};

export default SingleBlogPost;
