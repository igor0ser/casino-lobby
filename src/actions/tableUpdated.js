import { TABLE_UPDATED } from './';

const tableUpdated = ({ table }) => ({
  type: TABLE_UPDATED,
  payload: table
});

export default tableUpdated;
