import random from 'lodash/random';
import createTables from './createTables';
import createTable from './createTable';

let tables = [];

const fakeApi = {
  tableList() {
    const newTables = createTables(100);
    tables = newTables;

    return tables;
  },

  newTableAdded() {
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

    tables = tables.filter((t, index) => index !== removeIndex);

    return { removeId };
  },

  tableUpdated() {
    const updateIndex = random(appState.tables.length);

    return { };
  }
};

export default fakeApi;