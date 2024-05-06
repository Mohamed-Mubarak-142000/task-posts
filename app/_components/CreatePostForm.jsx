"use client";
import React, { useState } from "react";
import useStore from "../_store/store";
import apiService from "../_utils/apiService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserid] = useState();
  const { addPost } = useStore();
  const queryClient = useQueryClient();

  // Use the mutation hook
  const mutation = useMutation({
    mutationFn: apiService.createPost,
    onSuccess: (createdPost) => {
      // Update the Zustand store
      addPost(createdPost);

      // Update the React Query cache
      queryClient.setQueryData(["posts"], (oldPosts) => {
        if (oldPosts) {
          return [createdPost, ...oldPosts];
        } else {
          return [createdPost];
        }
      });

      // Clear form fields
      setTitle("");
      setBody("");
      setUserid("");
    },
    onError: (error) => {
      console.error("Failed to create post:", error);
    },
  });

  // Submit form handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { title, body, userId };
    // Trigger the mutation
    mutation.mutate(newPost);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-1 py-3 outline-none rounded border-gray-300 border sm:text-sm"
          required
          placeholder="Type Here"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          User ID
        </label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserid(Number(e.target.value))}
          className="mt-1 block w-full px-1 py-3 outline-none rounded border-gray-300 border sm:text-sm"
          required
          placeholder="User Id"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Post Body
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-1 block w-full px-1 py-3 outline-none rounded border-gray-300 border sm:text-sm"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-3 w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Share Post
      </button>
    </form>
  );
};

export default CreatePostForm;
