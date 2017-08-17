/* eslint no-console: 0 */
const logMessage = (messageData) => {
  console.group('socket message');
  console.log(messageData.type);
  console.log(messageData);
  console.groupEnd();
};

export default logMessage;
