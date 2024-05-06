import React from "react";
import CreatePostForm from "../_components/CreatePostForm";

const page = () => {
  return (
    <div className="flex flex-col gap-5 my-5 justify-center h-[80vh] w-full md:w-[50%] ">
      <h1 className="font-bold text-[35px]">Form</h1>
      <h4 className="text-gray-700 text-[16px]">create new post</h4>
      <CreatePostForm />
    </div>
  );
};

export default page;
