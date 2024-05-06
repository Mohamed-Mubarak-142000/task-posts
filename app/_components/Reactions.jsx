import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const Reactions = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        {/**likes */}
        <div className="flex items-center gap-10">
          <BiLike size={22} /> <BiDislike size={22} />
        </div>
        {/***options */}
        <div className="flex items-center gap-8">
          <span className="flex items-center  text-xs">
            <FaRegComment size={22} />6
          </span>
          <span className="flex items-center text-xs">
            <CiHeart size={22} />
            35
          </span>
          <IoShareSocialOutline size={22} />
        </div>
      </div>
    </div>
  );
};

export default Reactions;
