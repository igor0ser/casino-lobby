import { TABLE_LIST } from './';

const tableList = ({ tables }) => ({
  type: TABLE_LIST,
  payload: tables
});

export default tableList;