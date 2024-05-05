import Link from "next/link";
import React from "react";

const OnePost = ({ post }) => {
  return (
    <Link
      href={`/post-details/${post?.id}`}
      className="p-3 bg-gray-1000 shadow-lg rounded-md"
    >
      <div className="flex items-center gap-2">
        <div className="bg-gray-300 w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <span className="capitalize">yousef helmy</span>
          <span className="text-sm text-blue-500">@yousef helmy</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <h2 className="capitalize text-xs my-3">{post.title}</h2>
      </div>
      <div className="flex gap-1">
        <h2 className="capitalize text-sm text-gray-700 my-3">{post.body}</h2>
      </div>

      <div className="bg-gray-300 w-full h-[300px] rounded-md" />
    </Link>
  );
};

export default OnePost;
