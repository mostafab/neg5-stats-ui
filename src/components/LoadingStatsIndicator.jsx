import React from 'react';
import FontAwesome from 'react-fontawesome'

const LoadingStatsIndicator = ({
  loading,
}) => (
  <FontAwesome
    name='circle-o-notch'
    className='fa-fw LoadingCircle'
    style={{ visibility: loading ? 'visible': 'hidden' }}
    spin
  />
)

export default LoadingStatsIndicator;

