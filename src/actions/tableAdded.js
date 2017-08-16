import { TABLE_ADDED } from './';

const tableAdded = ({ after_id, table }) => ({
  type: TABLE_ADDED,
  payload: { after_id, table }
});

export default tableAdded;
