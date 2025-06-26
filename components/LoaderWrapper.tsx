// components/LoaderWrapper.tsx
"use client";
import { useEffect } from "react";
import { useLoader } from './LoaderContext'
import Navbar from "./Navbar";

import { motion, AnimatePresence } from "framer-motion";

const text = "GFRP-INDIA";

// const letterVariants = {
//   initial: {
//     y: 0,
//     opacity: 0,
//   },
//   animate: (i: number) => ({
//     y: [-10, 0],
//     opacity: 1,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
//   exit: {
//     y: 10,
//     opacity: 0,
//     transition: { duration: 0.3 },
//   },
// };

const letterVariants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: (i: number) => ({
    y: [-10, 10, -10],
    opacity: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
};


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
      <AnimatePresence>
        {!hideLoader && (
          <motion.div
            className="loader-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <motion.div
              className="loader-content"
              style={{
                display: "flex",
                gap: "0.2em",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#ff6b35",
              }}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  // key={index}
                  // custom={index}
                  // variants={letterVariants}
                  // initial="initial"
                  // animate="animate"
                  // exit="exit"

                  key={index}
                  variants={letterVariants}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  style={{
                    color: "#ff6b35",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loader overlay */}
      {/* <div className={`loader-overlay ${hideLoader ? "fade-out" : ""}`}>
        <div className="loader-content" style={{ color: "#ff6b35" }}>
          GFRP-INDIA
        </div>
      </div> */}

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
