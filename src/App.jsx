import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import TableList from './components/TableList/TableList';

const App = ({ connection }) => (
  <div className="App">
    <Header />
    { connection ? <TableList /> : (
      <b>Trying to connect to server</b>
    )}
  </div>
);

App.propTypes = {
  connection: PropTypes.bool.isRequired
};

export default connect(
  ({ connection }) => ({ connection })
)(App);
