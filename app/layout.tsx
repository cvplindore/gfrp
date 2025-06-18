// // "use client";

// // import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";
// // import Script from "next/script";
// // import Navbar from "@/components/Navbar";


// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body className="body">
// //         <div className="page-wrapper">
// //           <Navbar />
// //         </div>
// //           {children}
// //         {/* {children} */}
// //         <Script
// //           src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ea6645891c299018425dd4"
// //           type="text/javascript"
// //         ></Script>
// //         <Script
// //           src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.schunk.57d5559d2f0cd9f8.js"
// //           type="text/javascript"
// //         ></Script>
// //         <Script
// //           src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.0f246077.147b97be32273d1f.js"
// //           type="text/javascript"
// //         ></Script>
// //       </body>
// //     </html>
// //   );
// // }



// "use client";

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import Navbar from "@/components/Navbar";
// import React, { useEffect, useState } from "react";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [hideLoader, setHideLoader] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setHideLoader(true);
//     }, 4000); // ⏱️ 3 seconds after load

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <html lang="en">
//       <body
//         className="body"
//         style={!hideLoader ? { overflow: "hidden" } : { overflow: "auto" }}
//       >
//         {/* Loader overlay */}
//         <div className={`loader-overlay ${hideLoader ? "fade-out" : ""}`}>
//           <div className="loader-content" style={{ color: "#ff6b35" }}>
//             GFRP-INDIA
//           </div>
//         </div>

//         {/* Main content */}
//         <div
//           style={
//             !hideLoader
//               ? {
//                   display: "none",
//                 }
//               : {
//                   display: "block",
//                 }
//           }
//         >
//           <div className="page-wrapper">
//             <Navbar setHideLoader={setHideLoader} />
//           </div>
//           {children}
//         </div>

//         {/* Scripts */}
//         <Script
//           src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ea6645891c299018425dd4"
//           type="text/javascript"
//         />
//         <Script
//           src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.schunk.57d5559d2f0cd9f8.js"
//           type="text/javascript"
//         />
//         <Script
//           src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.0f246077.147b97be32273d1f.js"
//           type="text/javascript"
//         />
//       </body>
//     </html>
//   );
// }
  

// app/layout.tsx or wherever your RootLayout is
import LoaderWrapper from "@/components/LoaderWrapper";
import { LoaderProvider } from "../components/LoaderContext";
import Script from "next/script";

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="body">
        <LoaderProvider>
          <LoaderWrapper>{children}</LoaderWrapper>
        </LoaderProvider>

        {/* Scripts */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ea6645891c299018425dd4"
          type="text/javascript"
        />
        <Script
          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.schunk.57d5559d2f0cd9f8.js"
          type="text/javascript"
        />
        <Script
          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.0f246077.147b97be32273d1f.js"
          type="text/javascript"
        />
      </body>
    </html>
  );
}
