import Link from "next/link";
import React from "react";
import useStore from "../_store/store";

const Header = () => {
  const { search, setSearch } = useStore(); // Get the search term and function from Zustand

  return (
    <header className="bg-white dark:bg-gray-900 shadow-xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="capitalize text-lg text-teal-600 dark:text-teal-600 flex gap-1 items-center"
              href="/"
            >
              <span className="sr-only">Home</span>
              <span className="text-white">Task</span>
              <span>posts</span>
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="search">search:</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="bg-gray-800 border border-teal-500 rounded-sm outline-none p-1"
            />
          </div>

          <div className="hidden md:block">
            <nav>
              <ul style={{ display: "flex", gap: "10px" }}>
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/create-post">Create Post</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
