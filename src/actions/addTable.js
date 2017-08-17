import { ADD_TABLE } from './actionTypes';

const addTable = payload => ({ type: ADD_TABLE, ...payload });

export default addTable;
