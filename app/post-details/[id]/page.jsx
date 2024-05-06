"use client";
import useStore from "../../_store/store";
import { useEffect } from "react";
import apiService from "../../_utils/apiService";
import { useQuery } from "@tanstack/react-query";
import OnePost from "@/app/_components/OnePost";
import SearchInput from "@/app/_components/SearchInput";
import CommentSkeleton from "@/app/_skeleton/CommentSkeleton";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReply } from "react-icons/md";
import OneComment from "@/app/_components/OneComment";
import Reactions from "@/app/_components/Reactions";

const page = ({ params }) => {
  const { id } = params;
  const { setPosts } = useStore();

  // Fetch post details by ID
  const {
    data: postDetail,
    isLoading: isPostLoading,
    error: postError,
  } = useQuery({
    queryKey: ["postDetail", id], // Query key array
    queryFn: () => apiService.getPostById(id), // Query function
    enabled: !!id, // Only run query when id is available
  });

  //comment
  // Fetch post details by ID
  const {
    data: postComment,
    isLoading: iscommentLoading,
    error: commentError,
  } = useQuery({
    queryKey: ["commentPost", id], // Query key array
    queryFn: () => apiService.getCommentsOfPost(id), // Query function
    enabled: !!id, // Only run query when id is available
  });

  // Fetch related posts by userId
  const {
    data: relatedPosts,
    isLoading: isRelatedLoading,
    error: relatedError,
  } = useQuery({
    queryKey: ["relatedPosts", postDetail?.userId], // Query key array
    queryFn: () => apiService.getPostsByUserId(postDetail?.userId), // Query function
    enabled: !!postDetail?.userId, // Only run query when userId is available
  });

  // Update Zustand store with fetched related posts
  useEffect(() => {
    if (relatedPosts) {
      setPosts(relatedPosts);
    }
  }, [relatedPosts, setPosts]);

  if (isPostLoading || isRelatedLoading) {
    return <CommentSkeleton />;
  }

  if (postError) {
    return <div>Error: {postError.message}</div>;
  }

  if (relatedError) {
    return <div>Error: {relatedError.message}</div>;
  }

  return (
    <div className="mt-5 flex justify-center flex-col md:flex-row md:justify-between ">
      {/* Render post detail */}
      <div className=" w-full md:w-[60%] ">
        <OnePost show={true} post={postDetail} />

        <Reactions />

        {/***comment */}
        {postComment.map((comment) => {
          return <OneComment comment={comment} />;
        })}
      </div>

      {/* Render related posts using Zustand state */}
      <div className=" w-full md:w-[30%]">
        <SearchInput showIcon={true} text="" />
        {relatedPosts?.map((post) => (
          <OnePost post={post} show={false} />
        ))}

        {relatedPosts.length === 0 && (
          <h2 className="text-gray-500 text-center capitalize text-2xl">
            No posts found for relatedPosts
          </h2>
        )}
      </div>
    </div>
  );
};

export default page;
