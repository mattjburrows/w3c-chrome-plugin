import React, { PropTypes } from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    const itemButtonType = (item.type === 'error') ? 'alert button' : 'warning button';

    return (
      <tr>
        <td><span className={ itemButtonType }>{item.type}</span></td>
        <td>{item.message}</td>
        <td><code>{item.extract}</code></td>
        <td>{item.lastLine}</td>
      </tr>
    );
  }
};

TableRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default TableRow;
