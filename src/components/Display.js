import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  backgroundColor: '#777',
  height: 100,
  color: 'white',
  fontSize: 50,
  fontWeight: 'bold',
  padding: '0 20px',
};

export const Display = (props) => {
  return <div style={styles}>{props.result}</div>;
}

Display.propTypes = {
  result: PropTypes.string,
}

Display.defaultProps = {
  result: '0',
}
