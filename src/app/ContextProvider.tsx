"use client";
import { createContext, useState } from "react";

import { ILoaderContext } from "@/interfaces/IContext";

const LoaderContext = createContext<ILoaderContext | null>(null);

const LoaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
export { LoaderContext };
