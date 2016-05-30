import React, { PropTypes } from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items;

    if (!this.props.incWarnings) {
      items = items.filter((item) => item.type === 'error');
    }

    return (
      <div className="row">
        <div className="medium-12 columns">
          <table className="table-results">
            <thead>
              <tr>
                <th>Type</th>
                <th>Message</th>
                <th>Code block</th>
                <th>Lines affected</th>
              </tr>
            </thead>
            <tbody>
              { items.map((item, i) => <TableRow item={item} key={i} />) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

Table.propTypes = {
  items: PropTypes.array.isRequired
};

export default Table;
