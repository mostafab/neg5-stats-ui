import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ObjectTableRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { dataObject, headers } = this.props;
    return (
      <tr>
        {
          headers.map(this.mapFunction)
        }
      </tr>
    )
  }

  mapFunction(header) {
    let innerValue;
    if (typeof header.field === 'function') {
      innerValue = header.field(this.dataObject);
    } else {
      innerValue = this.dataObject[header.field];
    }
    return (
      <td key={header.displayName} data-display-name={header.displayName}>
        { innerValue }
      </td>
    )
  }
};

ObjectTableRow.propTypes = {
  dataObject: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      field: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]).isRequired,   
    }),
  ).isRequired,
}

