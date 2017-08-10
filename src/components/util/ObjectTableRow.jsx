import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This component renders a <tr> given a dataObject and 
 * an array of headers. It will iterate through the headers
 * in the given order and create a <td> for each. Each header
 * should include a displayName property, used for 
 * component metadata, and a field property. The field property
 * will tell the component which property of the dataObject to look at.
 * field can also be a function that will be applied to the dataObject.
 * The return value of this function will be the displayed inner value.
 */
export default class ObjectTableRow extends Component {

  render() {
    const { headers } = this.props;
    return (
      <tr>
        {
          headers.map(header => this.mapFunction(header))
        }
      </tr>
    )
  }

  mapFunction(header) {
    let innerValue;
    if (typeof header.field === 'function') {
      innerValue = header.field(this.props.dataObject);
    } else {
      innerValue = this.props.dataObject[header.field];
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
      displayName: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
      field: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]).isRequired,   
    }),
  ).isRequired,
}

