import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import DataCache from '../utils/DataCache';
import storeReducer from './reducer';

const simpleActionLoggerMiddleware = () => next => action => {
  console.log('Action:', action);
  return next(action);
};

export default function setupStore({ httpApi }) {
  const middlewares = [
    reduxThunk.withExtraArgument({
      httpApi: httpApi,
      dataCache: new DataCache(),
    }),
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(simpleActionLoggerMiddleware);
  }

  return createStore(
    storeReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};
