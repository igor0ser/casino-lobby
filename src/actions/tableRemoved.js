import { TABLE_REMOVED } from './';

const tableRemoved = ({ id }) => ({
  type: TABLE_REMOVED,
  payload: id
});

export default tableRemoved;
