import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "this page could not be found",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
