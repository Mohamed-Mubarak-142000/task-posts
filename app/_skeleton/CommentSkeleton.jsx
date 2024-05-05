import React from "react";

const CommentSkeleton = () => {
  return (
    <div className=" p-3 rounded border-gray-500 bg-gray-1000 shadow-lg leading-12">
      <div className="bg-gray-500 animate-pulse rounded-full w-6 h-6 flex items-center justify-center text-lg"></div>

      <div className="flex items-center gap-2">
        <div className="w-[100px] rounded h-5 capitalize bg-gray-500 animate-pulse"></div>
        <div className="capitalize text-xs w-[300px] rounded h-5 my-3 bg-gray-500 animate-pulse"></div>
      </div>

      <div className="flex gap-1">
        <div className="w-[100px] rounded h-5 text-teal-500 capitalize bg-gray-500 animate-pulse"></div>
        <div className="capitalize text-xs w-[300px] rounded h-5 bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CommentSkeleton;
