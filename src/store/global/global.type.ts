export interface IGlobalErrorContextState {
  error: boolean;
  text?: string;
}

export interface IGlobalLoadingState {
  showLoading: boolean;
  loadingCounter: number;
}

export interface IGlobalState {
  isAppInitialized: boolean;
  errorContext: IGlobalErrorContextState;
  loading: IGlobalLoadingState;
}
