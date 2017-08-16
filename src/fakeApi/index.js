import random from 'lodash/random';
import range from 'lodash/range';
import createTable from './createTable';

let tables = range(random(n)).map(createTable);

const fakeApi = {
  getTables() {
    return tables;
  },

  tableAdded() {
    const newTable = createTable();
    const afterIndex = random(appState.tables.length);
    const afterId = tables[afterId].id;

    tables = [
      ...tables.slice(0, afterId),
      newTable,
      ...tables.slice(afterId)
    ];

    return { afterId, newTable };
  },

  tableRemoved() {
    const removeIndex = random(appState.tables.length);
    const removeId = tables[removeIndex].id

    tables = tables.filter(({ id }) => id !== removeId);

    return { removeId };
  },

  removeTable(id) {
    tables = tables.filter(({ id }) => id !== removeId);

    return true;
  }

  addTable(table) {
    tables = [table, ...tables];

    return true;
  }
};

export default fakeApi;