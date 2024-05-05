"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useStore from "../_store/store";
import getAllPosts from "../_utils/getPostsApi";
import OnePost from "./OnePost";
import Loading from "../loading";

// Fetch posts from the API
const fetchPosts = async () => {
  const response = await getAllPosts.getAllPosts();
  return response.data;
};

const ShowAllPosts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { setPosts, search } = useStore();

  // Filter posts based on the search term
  const filteredPosts = useStore((state) =>
    state.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    )
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data, setPosts]);

  // Handle loading and error states
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render filtered posts
  return (
    <div className="flex flex-col gap-3 my-5">
      {filteredPosts.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
      {filteredPosts.length === 0 && (
        <h2 className="text-gray-500 text-center text-2xl">
          No posts found for "{search}"
        </h2>
      )}
    </div>
  );
};

export default ShowAllPosts;
