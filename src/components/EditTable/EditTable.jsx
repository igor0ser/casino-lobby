import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editTable from '../../actions/editTable';
import TableForm from '../shared/TableForm';

import './EditTable.css';

const EditTable = ({ tables, dispathEditTable, id }) => {
  const { name, participants } =
    tables.find(t => t.id === id) || {};

  return (
    <TableForm
      onSubmit={table => dispathEditTable({ ...table, id })}
      headerText="Edit Table"
      btnText="Save"
      defaultName={name}
      defaultParticipants={participants}
    />
  );
};


EditTable.propTypes = {
  id: PropTypes.number.isRequired,
  dispathEditTable: PropTypes.func.isRequired,
  tables: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
};

export default connect(
  ({ tables }) => ({ tables }),
  { dispathEditTable: editTable }
)(EditTable);
