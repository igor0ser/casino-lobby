import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import TableList from './components/TableList/TableList';

const App = () => (
  <div className="App">
    <Header />
    <TableList />
  </div>
);

App.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
};

export default App;
