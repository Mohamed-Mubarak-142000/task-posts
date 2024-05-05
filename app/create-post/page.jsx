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
  const [userid, setUsetid] = useState("");

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
    <section className="w-full my-5">
      <div className=" p-4 w-[50%] mx-auto ">
        <h1 className="text-[30px] font-bold mb-4 capitalize">Form</h1>
        <h3 className="  mb-4 text-lg">create a post</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title ot the post
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
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              user id
            </label>
            <input
              type="text"
              id="userid"
              name="userid"
              value={userid}
              onChange={(e) => setUsetid(e.target.value)}
              className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700"
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

          <div className="flex ">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white px-4 py-3 rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              share a Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePostPage;
