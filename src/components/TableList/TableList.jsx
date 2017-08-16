import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import scrollRenderer, { tableWidth } from './scrollRenderer';
import './TableList.css';

class TablesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: 0,
      shown: 4
    };
  /*  this.state = {
      start: 0,
      end: 10
    };*/
  }

  onScroll = ({ target: { scrollLeft } }) => {
    this.setState(state => scrollRenderer(state, scrollLeft));
    // this.setState(scrollRenderer(scrollLeft));
  }

  render() {
    const { shown } = this.state;
    const { tables } = this.props;


  /*  console.log('----------');
    console.log(start);
    console.log(end);
    console.log(width);
*/
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
    name: PropTypes.string.isRequired,
    participants: PropTypes.number.isRequired,
  })).isRequired
};

export default connect(
  ({ tables }) => ({ tables })
)(TablesList);
