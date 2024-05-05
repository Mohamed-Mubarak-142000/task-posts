"use client";
import React, { useState } from "react";
import useStore from "../_store/store";
import { useRouter } from "next/navigation";

const CreatePostPage = () => {
  const router = useRouter();
  const { addPost, resetForm } = useStore();

  // Local state for form fields
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Title and body are required.");
      return;
    }

    // Create a new post object
    const newPost = {
      id: Date.now().toString(), // Unique ID
      title,
      body,
      date: new Date().toISOString(),
    };

    // Log the new post
    console.log("Adding new post:", newPost);

    // Add the new post directly to the state
    addPost(newPost);

    // Log state after adding the new post
    console.log("State after adding new post:", useStore.getState().posts);

    // Reset form fields
    setTitle("");
    setBody("");
    resetForm();

    // Redirect if necessary (e.g., to home page or another route)
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-teal-500"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="body"
            className="block text-sm font-medium text-teal-600"
          >
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
