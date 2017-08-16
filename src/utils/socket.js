/*var socket = new WebSocket("wss://js-assignment.evolutiongaming.com/ws_api");

socket.onopen = function() {
  alert("Соединение установлено.");
};

socket.onmessage = function(event) {
  console.log(event);
};*/

/*export function chatMiddleware(store) {
  return next => action => {
    const result = next(action);

    if (socket && action.type === actions.ADD_MESSAGE) {
      let messages = store.getState().messages;
      socket.emit('message', messages[messages.length -1]);
    }

    return result;
  };
}*/

import actions from '../actions';

export default (store) => {
  const socket = new WebSocket(
    'wss://js-assignment.evolutiongaming.com/ws_api'
  );

  socket.onopen = () => {
    socket.send(JSON.stringify({
      $type: 'login',
      username: 'user1234',
      password: 'password1234'
    }));

    socket.send(JSON.stringify({
      $type: 'subscribe_tables'
    }));

    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      const actionCreator = actions[data.$type];
      if (!actionCreator) return;
      store.dispatch(actionCreator(data));
    };
  };

  /*socket.on('message', data => {
    store.dispatch(actions.addResponse(data));
  });*/
}

