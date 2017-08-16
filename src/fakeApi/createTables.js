import random from 'lodash/random';
import range from 'lodash/range';
import createTable from './createTable';

const createTables = n => range(random(n)).map(createTable);

export default createTables;
