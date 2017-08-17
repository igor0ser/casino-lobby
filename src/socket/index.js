import {
  actionsFromSocket, actionsFromUser
} from '../actions/actionTypes';
import { actionToMessage, messageToAction } from './helpers';
import logMessage from './logMessage';
import getTables from './getTables';

const errorTypes = ['removal_failed', 'update_failed'];

let socket;

export const socketMiddleware = () => next => (action) => {
  const result = next(action);
  if (socket && actionsFromUser.includes(action.type)) {
    socket.send(actionToMessage(action));
  }
  return result;
};

export default (store) => {
  socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api');

  socket.onopen = () => {
    socket.send(actionToMessage({
      type: 'login',
      username: 'user1234',
      password: 'password1234'
    }));

    getTables(socket);

    socket.onmessage = (message) => {
      const action = messageToAction(message.data);
      logMessage(action);

      if (errorTypes.includes(action.type)) {
        getTables(socket);
        return;
      }

      if (actionsFromSocket.includes(action.type)) {
        store.dispatch(action);
      }
    };
  };
};

