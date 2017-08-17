import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTable from '../../actions/addTable';
import TableForm from '../shared/TableForm';

import './AddTable.css';

class AddTable extends PureComponent {
  state = {
    expanded: false
  }

  onSubmit = (table) => {
    const { dispathAddTable, tables } = this.props;

    dispathAddTable({
      after_id: tables[tables.length - 1].id,
      table
    });

    this.setState({ expanded: false });
  }

  expand = () => this.setState({ expanded: true })

  render() {
    return this.state.expanded ? (
      <TableForm
        onSubmit={this.onSubmit}
        headerText="Table creation"
        btnText="Create new table"
      />
    ) : (
      <button
        className="btn AddTable__expand"
        onClick={this.expand}
      >
        Add new table
      </button>
    );
  }
}

AddTable.propTypes = {
  dispathAddTable: PropTypes.func.isRequired,
  tables: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired,
};

export default connect(
  ({ tables }) => ({ tables }),
  { dispathAddTable: addTable }
)(AddTable);