import loginSuccessful from '../actions/loginSuccessful';
import tableList from '../actions/tableList';
import tableRemoved from '../actions/tableRemoved';
import tableAdded from '../actions/tableAdded';
import tableUpdated from '../actions/tableUpdated';

export const LOGIN_SUCCESSFUL = 'login_successful';
export const TABLE_LIST = 'table_list';
export const TABLE_REMOVED = 'table_removed';
export const TABLE_ADDED = 'table_added';
export const TABLE_UPDATED = 'table_updated';

const actions = {
  [LOGIN_SUCCESSFUL]: loginSuccessful,
  [TABLE_LIST]: tableList,
  [TABLE_REMOVED]: tableRemoved,
  [TABLE_ADDED]: tableAdded,
  [TABLE_UPDATED]: tableUpdated,
};

export default actions;