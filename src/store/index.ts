import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import globalSlice from './global/global.slice';


const middlewares: never[] = [];

const reducers = {
  global: globalSlice.reducer,
};

const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware: [...getDefaultMiddleware({ thunk: true }), ...middlewares],
});

export default store;
