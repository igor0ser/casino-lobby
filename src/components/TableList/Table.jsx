/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import range from 'lodash/range';
import './Table.css';

const Table = ({ name, participants }) => (
  <li className="Table">
    <h1 className="Table__header">{name}</h1>
    <ul className="Table__chairList">
      {range(participants).map(item => (
        <li key={item} className="Table__chair" />
      ))}
    </ul>
  </li>
);

Table.propTypes = {
  name: PropTypes.string.isRequired,
  participants: PropTypes.number.isRequired
};

export default Table;
