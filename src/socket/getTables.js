import { actionToMessage } from './helpers';

const getTables = (socket) => {
  socket.send(actionToMessage({
    type: 'subscribe_tables'
  }));
};

export default getTables;
