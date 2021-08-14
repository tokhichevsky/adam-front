import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IGlobalState,
  IGlobalLoadingState,
  IGlobalErrorContextState,
} from './global.type';

const initialState: IGlobalState = {
  isAppInitialized: false,
  errorContext: {
    error: false,
  },
  loading: {
    showLoading: false,
    loadingCounter: 0,
  },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    initializeApp: (state) => {
      state.isAppInitialized = true;
    },
    setLoading: (state, action: PayloadAction<IGlobalLoadingState>) => {
      state.loading = action.payload;
    },
    setErrorContext: (state, action: PayloadAction<IGlobalErrorContextState>) => {
      state.errorContext = action.payload;
    },
  },
});

export default globalSlice;

export const globalActions = globalSlice.actions;
