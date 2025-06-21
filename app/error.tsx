"use client";
import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "this page could not be found",
};

const error = () => {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="h-[90vh] flex justify-center flex-col items-center py-10">
          <Image
            src={"/images/error.png"}
            width={500}
            height={500}
            alt="error"
          />

          <p className="text-[30px] font-bold tracking-widest md:text-2xl text-gray-700 dark:text-gray-300">
            An error occured{" "}
          </p>
        </div>
      </body>
    </html>
  );
};

export default error;
