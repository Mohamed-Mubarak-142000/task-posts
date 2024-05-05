import Link from "next/link";
import React from "react";

const OnePost = ({ post }) => {
  return (
    <Link
      href={`/post-details/${post?.id}`}
      className="border p-3 rounded border-gray-500 bg-gray-1000 shadow-lg leading-10"
    >
      <span className="border border-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-lg animate-ping">
        {post.id}
      </span>

      <div className="flex items-center gap-1">
        <span className="text-teal-500 capitalize">title:</span>
        <h2 className="capitalize text-xs my-3">{post.title}</h2>
      </div>

      <div className="flex gap-1">
        <span className="text-teal-500 capitalize">body:</span>
        <h2 className="capitalize text-xs my-3">{post.body}</h2>
      </div>
    </Link>
  );
};

export default OnePost;
