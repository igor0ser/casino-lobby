import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import scrollRenderer from './scrollRenderer';
import './TableList.css';

class TablesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: 0,
      shown: 4
    };
  }

  onScroll = ({ target: { scrollLeft } }) => {
    this.setState(state => scrollRenderer(state, scrollLeft));
  }

  render() {
    const { shown } = this.state;
    const { tables } = this.props;

    console.log(shown);

    return (
      <ul
        className="TableList"
        onScroll={this.onScroll}
      >
        {tables.slice(0, shown).map(table => (
          <Table
            {...table}
            key={table.id}
          />
        ))}
      </ul>
    );
  }
}

TablesList.propTypes = {
  tables: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['round', 'square']).isRequired,
    name: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired,
    players: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired
  })).isRequired
};

export default connect(
  ({ tables }) => ({ tables })
)(TablesList);
