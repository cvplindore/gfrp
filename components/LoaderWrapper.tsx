// components/LoaderWrapper.tsx
"use client";
import { useEffect } from "react";
import { useLoader } from './LoaderContext'
import Navbar from "./Navbar";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { hideLoader, setHideLoader } = useLoader();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideLoader(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [setHideLoader]);

  return (
    <>
      {/* Loader overlay */}
      <div className={`loader-overlay ${hideLoader ? "fade-out" : ""}`}>
        <div className="loader-content" style={{ color: "#ff6b35" }}>
          GFRP-INDIA
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          display: hideLoader ? "block" : "none",
        }}
      >
        <div className="page-wrapper">
          <Navbar />
        </div>
        {children}
      </div>
    </>
  );
}
