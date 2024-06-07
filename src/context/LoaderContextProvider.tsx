"use client";
import { createContext, useState } from "react";

interface ILoaderContext {
  isLoading: boolean;
  isSpinnerLoading: boolean;
  setIsLoading: (newValue: boolean) => void;
  setIsSpinnerLoading: (newValue: boolean) => void;
}

const LoaderContext = createContext<ILoaderContext | null>(null);

const LoaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  return (
    <LoaderContext.Provider
      value={{ isLoading, isSpinnerLoading, setIsLoading, setIsSpinnerLoading }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
export { LoaderContext };
export type { ILoaderContext };
