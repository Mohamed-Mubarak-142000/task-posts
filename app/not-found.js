"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import notFoundAnimation from "../public/_lottie-react/notFoundAnimation.json";
export default function NotFoundPage() {
  return (
    <div className="max-w-2xl flex items-center justify-center mx-auto h-[85vh]">
      <div>
        <div>
          <Lottie animationData={notFoundAnimation} />
        </div>
        <Link
          href="/"
          className="text-md capitalize py-2 px-3 shadow-lg bg-teal-500 animate-pulse"
        >
          <span className="text-black">Go back home</span>
        </Link>
      </div>
    </div>
  );
}
