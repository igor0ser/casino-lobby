import random from 'lodash/random';
import randomWords from 'random-words';
import shortid from 'shortid';

const tableTypes = ['round', 'square', 'rectangular'];

const table = () => {
  const maxPlayers = random(10);

  return {
    id: shortid.generate(),
    type: tableTypes[random(2)],
    name: randomWords(),
    warning: random(9) > 8,
    players: random(maxPlayers),
    maxPlayers
  };
};

export default table;
