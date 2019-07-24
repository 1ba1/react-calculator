import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const styles = {
    border: '1px solid #aaa',
    backgroundColor: props.color ? props.color : 'orange',
    color: 'black',
    fontSize: 30,
    width: props.wide ? '50%' : '25%',
  };

  return <button style={styles}>{props.name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
}
