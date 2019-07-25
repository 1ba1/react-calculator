import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, wide } = props;

  const styles = {
    border: '1px solid #aaa',
    backgroundColor: color || 'orange',
    color: 'black',
    fontSize: 30,
    width: wide ? '50%' : '25%',
  };

  return <button type="button" style={styles}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
}

export default Button;
