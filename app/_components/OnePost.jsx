import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const OnePost = ({ post, show }) => {
  const path = usePathname();

  console.log("first::::::::::", path);

  return (
    <Link href={`/post-details/${post.id}`}>
      <div className="p-4 mb-4 bg-white rounded-lg cursor-pointer">
        {/**information user */}
        <div className="flex items-center gap-1">
          <div className="bg-gray-300 animate-pulse w-10 h-10 rounded-xl " />

          <div className="flex flex-col justify-center items-center ">
            <span className="capitalize font-bold text-sm">yousef helmy</span>
            <span className="text-[12px] text-blue-400">@yousefhelmy</span>
          </div>
        </div>
        {/**body post */}
        <div className="my-3">
          <h2 className="text-sm">{post.title}</h2>
          <p className="text-gray-700 text-xs">{post.body}</p>
        </div>

        {show && (
          <div className="bg-gray-300 animate-pulse w-full h-[300px] rounded-md" />
        )}
      </div>
    </Link>
  );
};

export default OnePost;
