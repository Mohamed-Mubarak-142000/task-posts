import Link from "next/link";
import React from "react";
import useStore from "../_store/store";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="capitalize text-lg text-teal-600 dark:text-teal-600 flex gap-1 items-center"
              href="/"
            >
              <span className="sr-only">Home</span>
              <span className="text-black">logo</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav>
              <ul style={{ display: "flex", gap: "10px" }}>
                <li>
                  <Link
                    href="/"
                    className="bg-blue-600 px-4 py-2 text-white rounded capitalize"
                  >
                    register
                  </Link>
                </li>

                <li>
                  <Link
                    href="/create-post"
                    className="capitalize rounded text-white py-2 px-3 bg-blue-600"
                  >
                    login
                  </Link>
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
