import React from "react";

const PostSkeleton = () => {
  return (
    <div className="p-3 bg-gray-1000 shadow-lg rounded-md">
      <div className="flex items-center gap-2">
        <div className="bg-gray-300 w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-3">
          <div className="capitalize bg-gray-300 w-16 h-5 rounded"></div>
          <div className="text-sm text-blue-500 bg-gray-300 w-16 h-5 rounded"></div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="capitalize text-xs my-3 bg-gray-300 w-[300px] h-10 rounded"></div>
      </div>
      <div className="flex gap-1">
        <div className="capitalize text-sm text-gray-700 my-3 bg-gray-300 w-[300px] h-10 rounded"></div>
      </div>

      <div className="bg-gray-300 w-full h-[300px] rounded-md" />
    </div>
  );
};

export default PostSkeleton;
