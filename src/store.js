import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    let middleware = getDefaultMiddleware().concat(sagaMiddleware);

    if (process.env.NODE_ENV === 'development') {
      middleware = middleware.concat(logger);
    }

    return middleware;
  },
  devTools: process.env.NODE_ENV === 'development',
});

sagaMiddleware.run(mySaga);

export default store;
