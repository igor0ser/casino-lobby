import { applyMiddleware, combineReducers, createStore } from 'redux';
import tables from './tablesReducer';
import connection from './connectionReducer';
import logger from 'redux-logger';

const store = createStore(
  combineReducers({ tables, connection }),
  applyMiddleware(logger)
);

export default store;
