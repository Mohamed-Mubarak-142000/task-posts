"use client";
import PostSkeleton from "@/app/_skeleton/PostSkeleton";
import useStore from "@/app/_store/store";
import getPostsApi from "@/app/_utils/getPostsApi";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  // Initialize postDetails as null to handle loading state
  const [postDetails, setPostDetails] = useState(null);
  const [comment, setComment] = useState([]);

  const getSingleProductByID_ = () => {
    getPostsApi.getOnePosts(params?.postid).then((res) => {
      console.log(res.data);
      setPostDetails(res?.data);
    });
  };

  const getCommentsOfPost = () => {
    getPostsApi.getCommentsOfPost(params?.postid).then((res) => {
      console.log(res.data);
      setComment(res?.data);
    });
  };

  useEffect(() => {
    getSingleProductByID_();
    getCommentsOfPost();
  }, [params?.courseID]);

  return (
    <>
      <div className=" max-w-2xl mx-auto my-5 border p-3 rounded border-gray-500 bg-gray-1000 shadow-lg leading-10">
        {postDetails ? (
          <>
            <span className="border border-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-lg animate-ping">
              {postDetails.id}
            </span>

            <div className="flex items-center gap-1">
              <span className="text-teal-500 capitalize">Title:</span>
              <h2 className="capitalize text-xs my-3">{postDetails.title}</h2>
            </div>

            <div className="flex gap-1">
              <span className="text-teal-500 capitalize">Body:</span>
              <h2 className="capitalize text-xs my-3">{postDetails.body}</h2>
            </div>
          </>
        ) : (
          <div className="text-gray-500">
            <PostSkeleton />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-center capitalize text-2xl text-teal-500">
          comments of Post
        </h2>

        <div className=" max-w-lg mx-auto my-1 p-2 rounded bg-gray-1000 shadow-lg leading-10">
          {!comment.length && (
            <>
              <PostSkeleton /> <PostSkeleton /> <PostSkeleton />
            </>
          )}
        </div>
        {comment.map((comment, index) => {
          return (
            <div
              key={index}
              className=" max-w-lg mx-auto my-1 border p-2 rounded border-gray-500 bg-gray-1000 shadow-lg leading-10"
            >
              <span className="border border-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-lg animate-ping">
                {comment.id}
              </span>

              <div className="flex items-center gap-1">
                <span className="text-teal-500 capitalize">name:</span>
                <h2 className="capitalize text-xs my-3">{comment.name}</h2>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-teal-500 capitalize">email:</span>
                <h2 className="capitalize text-xs my-3">{comment.email}</h2>
              </div>

              <div className="flex gap-1">
                <span className="text-teal-500 capitalize">Body:</span>
                <h2 className="capitalize text-xs my-3">{comment.body}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
