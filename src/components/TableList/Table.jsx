/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import range from 'lodash/range';
import './Table.css';

const Table = ({ name, type, warning, players, maxPlayers }) => (
  <li
    className={classnames(
      'Table',
      `Table_${type}`,
      warning && 'Table_warning'
    )}
  >
    <h1 className="Table__header">{name} {players}/{maxPlayers}</h1>
    <ul className="Table__chairList">
      {range(maxPlayers).map(item => (
        <li
          key={item}
          className={classnames(
            'Table__chair',
            item < players && 'Table__chair_busy'
          )}
        />
      ))}
    </ul>
  </li>
);

Table.propTypes = {
  type: PropTypes.oneOf(['round', 'square']).isRequired,
  name: PropTypes.string.isRequired,
  warning: PropTypes.bool.isRequired,
  players: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired
};

export default Table;
