import { GO_TO_EDIT_TABLE, EDIT_TABLE } from '../actions/actionTypes';

const editableTable = (state = null, action) => {
  switch (action.type) {
    case GO_TO_EDIT_TABLE:
      return action.table;
    case EDIT_TABLE:
      return null;
    default:
      return state;
  }
};

export default editableTable;
