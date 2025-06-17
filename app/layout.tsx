"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "development") {
    // Removes red error overlay in dev
    window.onerror = () => true;
  }
  return (
    <html lang="en">
      <body className="body">
        <div className="page-wrapper">
          <Navbar />
        </div>
          {children}
        {/* {children} */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ea6645891c299018425dd4"
          type="text/javascript"
        ></Script>
        <Script
          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.schunk.57d5559d2f0cd9f8.js"
          type="text/javascript"
        ></Script>
        <Script
          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.0f246077.147b97be32273d1f.js"
          type="text/javascript"
        ></Script>
      </body>
    </html>
  );
}



