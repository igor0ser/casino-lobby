import { TABLE_LIST, TABLE_REMOVED, TABLE_ADDED, TABLE_UPDATED } from '../actions';

const tablesReducer = (state = [], action) => {
  switch (action.type) {
    case TABLE_LIST:
      return action.payload;
    case TABLE_REMOVED:
      return state.filter(({ id }) => id !== action.payload);
    case TABLE_ADDED:
      const { after_id, table } = action.payload;
      return [
        ...state.slice(0, after_id),
        table,
        ...state.slice(after_id)
      ];
    case TABLE_UPDATED:
      const updatedTable = action.payload;
      return state.map(table =>
        (updatedTable.id === table.id ? updatedTable : table)
      );
    default:
      return state;
  }
};

export default tablesReducer;
