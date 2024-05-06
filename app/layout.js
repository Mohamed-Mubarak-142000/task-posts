"use client"; // Use the 'use client' directive at the top
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./_components/queryClient";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div className="min-h-screen w-[90%] md:w-[80%] mx-auto">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
