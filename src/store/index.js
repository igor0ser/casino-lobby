import { combineReducers, createStore } from 'redux';
import tables from './tablesReducer';

const store = createStore(
  combineReducers({ tables }),
);

export default store;
