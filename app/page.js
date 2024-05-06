"use client";
import { useEffect } from "react";
import PostsList from "./_components/PostsList";
import useStore from "./_store/store";
import apiService from "./_utils/apiService";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import SearchInput from "./_components/SearchInput";

export default function Home() {
  const { setPosts, search, setSearch } = useStore();
  // GET ALL POSTS
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: apiService.getPosts,
  });

  // Filter posts based on the search term
  const filteredPosts = useStore((state) =>
    state.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    )
  );

  useEffect(() => {
    if (posts) {
      setPosts(posts);
    }
  }, [posts, setPosts]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className=" md:max-w-3xl my-5 ">
      <SearchInput
        search={search}
        setSearch={setSearch}
        showIcon={false}
        text="Typing..."
      />
      <PostsList posts={filteredPosts} />
    </main>
  );
}
