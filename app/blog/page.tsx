import Link from "next/link";
import React from "react";

const AllBlogPosts = () => {
  return (
    <div>
      AllBlogPosts
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </div>
  );
};

export default AllBlogPosts;
