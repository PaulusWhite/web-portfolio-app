interface ILoaderContext {
  isLoading: boolean;
  isSpinnerLoading: boolean;
  setIsLoading: (newValue: boolean) => void;
  setIsSpinnerLoading: (newValue: boolean) => void;
}

export type { ILoaderContext };
