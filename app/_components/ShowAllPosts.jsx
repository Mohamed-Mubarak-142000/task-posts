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

  const { setPosts, search, setSearch } = useStore();

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
    <section className="w-[100%] md:w-[60%]">
      <div className="flex flex-col gap-5 my-5 ">
        <div className="flex gap-1 items-center mb-5 ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            id="search"
            className=" border border-gray-300 rounded-sm  outline-none p-1 py-3 w-full"
            placeholder="Typing..."
          />
        </div>
        {filteredPosts.map((post) => (
          <OnePost key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <h2 className="text-gray-500 text-center text-2xl">
            No posts found for "{search}"
          </h2>
        )}
      </div>
    </section>
  );
};

export default ShowAllPosts;
