"use client";
import React, { useEffect, useState } from "react";
import OnePost from "./OnePost";
import getPostsApi from "../_utils/getPostsApi";

const RelatedPosts = ({ id }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  const fetchAndFilterPosts = async () => {
    const response = await getPostsApi.getAllPosts();
    setRelatedPosts(response?.data);
  };

  useEffect(() => {
    fetchAndFilterPosts();
  }, []);

  return (
    <div className="flex flex-col gap-1 my-5 w-[90%] md:w-[450px] h-screen overflow-y-scroll">
      <h2 className="capitalize text-2xl text-teal-500">Related Posts</h2>

      {relatedPosts?.map((post) => {
        return <OnePost post={post} />;
      })}
    </div>
  );
};

export default RelatedPosts;
