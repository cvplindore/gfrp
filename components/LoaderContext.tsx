// app/context/LoaderContext.tsx

"use client";

import React, { createContext, useContext, useState } from "react";

type LoaderContextType = {
  hideLoader: boolean;
  setHideLoader: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [hideLoader, setHideLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ hideLoader, setHideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
