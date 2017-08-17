import {
  TABLE_LIST, TABLE_REMOVED, TABLE_ADDED, TABLE_UPDATED,
  REMOVE_TABLE, ADD_TABLE, EDIT_TABLE
} from '../actions/actionTypes';

const tablesReducer = (state = [], action) => {
  switch (action.type) {
    case TABLE_LIST: {
      return action.tables;
    }
    case TABLE_REMOVED:
    case REMOVE_TABLE: {
      return state.filter(({ id }) => id !== action.id);
    }
    case TABLE_ADDED: {
      const { after_id, table } = action;
      return [
        ...state.slice(0, after_id),
        table,
        ...state.slice(after_id)
      ];
    }
    case EDIT_TABLE:
    case TABLE_UPDATED: {
      const updatedTable = action.table;
      return state.map(t =>
        (updatedTable.id === t.id ? updatedTable : t)
      );
    }
    case ADD_TABLE:
      return state;
    default:
      return state;
  }
};

export default tablesReducer;
