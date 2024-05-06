import React from "react";
import { MdOutlineReply } from "react-icons/md";

const OneComment = ({ comment }) => {
  return (
    <section
      key={comment.id}
      className="my-5 border border-gray-300 p-2 rounded-lg"
    >
      <div className="flex items-center justify-between ">
        <div className="flex gap-1 items-center">
          <div className="bg-gray-300 w-8 h-8 rounded-full " />
          <span className="text-[12px] font-bold capitalize">
            {comment.name}
          </span>
          <span className="text-[10px]">2 weeks ago</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600 capitalize">
          <MdOutlineReply size={22} />
          reply
        </div>
      </div>
      <div className="text-[16px] my-3 ">{comment.body}</div>
    </section>
  );
};

export default OneComment;
