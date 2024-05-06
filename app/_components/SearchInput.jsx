import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = ({ showIcon, text, search, setSearch }) => {
  return (
    <div className="w-full my-5 relative ">
      {showIcon && (
        <label htmlFor="searchid" className="absolute top-3 left-1">
          <IoSearch size={23} />
        </label>
      )}
      <input
        value={search}
        id="searchid"
        onChange={(e) => setSearch(e.target.value)}
        placeholder={text}
        className="outline-none border border-gray-300 rounded-sm px-7 py-3 w-full"
      />
    </div>
  );
};

export default SearchInput;
