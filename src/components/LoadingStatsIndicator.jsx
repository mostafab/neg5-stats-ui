import React from 'react';
import FontAwesome from 'react-fontawesome'

export default ({ loading }) => (
  <FontAwesome name='circle-o-notch' className='fa-fw LoadingCircle' style={{ visibility: loading ? 'visible': 'hidden' }} spin/>
);
