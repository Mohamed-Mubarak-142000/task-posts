import React from "react";
import useStore from "../_store/store";
import OnePost from "./OnePost";

const PostsList = ({ posts }) => {
  return (
    <ul className="shadow-md rounded-lg">
      {posts.map((post) => (
        <li key={post.id}>
          <OnePost post={post} />
        </li>
      ))}
      {posts.length === 0 && (
        <h2 className="text-gray-500 text-center capitalize text-2xl">
          No posts found for search
        </h2>
      )}
    </ul>
  );
};

export default PostsList;
