/* eslint jsx-a11y/label-has-for: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTable from '../../actions/addTable';

import './TableForm.css';

class TableForm extends PureComponent {
  onSubmit = (e) => {
    e.preventDefault();
    const table = {
      name: this.name.value,
      participants: +this.participants.value
    };

    this.name.value = '';
    this.participants.value = '';
    this.props.onSubmit(table);
  }

  render() {
    const {
      headerText, btnText, defaultName, defaultParticipants
    } = this.props;

    return (
      <div className="TableForm">
        <h3 className="TableForm__header">{headerText}</h3>
        <form onSubmit={this.onSubmit}>
          <label>
            Table name:
            <input
              className="input text-input"
              type="text"
              placeholder="New awesome table"
              pattern=".{3,}"
              title="3 characters minimum"
              required
              ref={(input) => { this.name = input; }}
              defaultValue={defaultName}
            />
          </label>
          <label>
            Participants:
            <input
              className="input"
              type="number"
              placeholder="9"
              min="1"
              max="10"
              required
              ref={(input) => { this.participants = input; }}
              defaultValue={defaultParticipants}
            />
          </label>
          <button type="submit" className="btn">
            {btnText}
          </button>
        </form>
      </div>
    );
  }
}

TableForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  defaultName: PropTypes.string,
  defaultParticipants: PropTypes.number,
};

export default connect(
  ({ tables }) => ({ tables }),
  { dispathTableForm: addTable }
)(TableForm);
