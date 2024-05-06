import React from "react";
import PostSkeleton from "./PostSkeleton";

const CommentSkeleton = () => {
  return (
    <div className="my-5 flex justify-center flex-col md:flex-row md:justify-between ">
      {/* Render post detail */}
      <div className=" w-full md:w-[60%] ">
        <PostSkeleton />
      </div>

      {/* Render related posts using Zustand state */}
      <div className=" w-full md:w-[30%]">
        <div className="bg-gray-300 w-full h-10 rounded-md" />

        <div className="my-8">
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 w-10 h-10 rounded-lg" />
            <div className="flex flex-col gap-3">
              <div className="capitalize bg-gray-300 w-16 h-5 rounded"></div>
              <div className=" bg-gray-300 w-16 h-5 rounded "></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="bg-gray-300 w-[300px] h-4 rounded" />
          <div className="bg-gray-300 w-[300px] h-4 rounded" />
          <div className="bg-gray-300 w-[300px] h-4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CommentSkeleton;
