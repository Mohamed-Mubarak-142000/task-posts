"use client";
import React, { useEffect, useState } from "react";
import RelatedPosts from "@/app/_components/RelatedPosts";
import PostSkeleton from "@/app/_skeleton/PostSkeleton";
import getPostsApi from "@/app/_utils/getPostsApi";
import { MdOutlineReplay } from "react-icons/md";

const Page = ({ params }) => {
  // Initialize postDetails and comments
  const [postDetails, setPostDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState(1);

  const getSingleProductByID = () => {
    getPostsApi.getOnePosts(params?.id).then((res) => {
      setPostDetails(res?.data);
      setUserId(res?.data?.userId);
    });
  };

  const getCommentsOfPost = () => {
    getPostsApi.getCommentsOfPost(params?.id).then((res) => {
      setComments(res?.data);
    });
  };

  useEffect(() => {
    getSingleProductByID();
    getCommentsOfPost();
  }, [params?.id]);

  return (
    <section className="w-[80%] my-5 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Post Details and Comments Section */}
      <div className="p-3 rounded bg-gray-1000 shadow-lg ">
        {postDetails ? (
          <>
            {/* Post Details */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gray-300 w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <span className="capitalize font-medium">yousef helmy</span>
                <span className="text-sm text-blue-500">@yousef helmy</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <h2 className="capitalize text-lg">{postDetails.title}</h2>
              <p className="capitalize text-sm text-gray-700">
                {postDetails.body}
              </p>
            </div>
            <div className="bg-gray-300 w-full h-72 rounded mb-4" />

            {/* Comments Section */}
            <div>
              {comments.map((comment) => (
                <section
                  key={comment.id}
                  className="border my-2 rounded-lg shadow-sm p-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-300 w-10 h-10 rounded-full" />
                      <div className="flex flex-col text-xs text-gray-700">
                        <span>{comment.name}</span>
                        <span>{comment.email}</span>
                        <span>2 weeks ago</span>
                      </div>
                    </div>
                    <button className="text-blue-500 flex items-center capitalize font-semibold text-sm">
                      <MdOutlineReplay /> Reply
                    </button>
                  </div>
                  <div className="text-xs">{comment.body}</div>
                </section>
              ))}
            </div>
          </>
        ) : (
          <div className="text-gray-500">
            <PostSkeleton />
          </div>
        )}
      </div>

      {/* Related Posts Component */}
      <RelatedPosts userId={userId} />
    </section>
  );
};

export default Page;
