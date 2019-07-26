import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const styles = {
    border: '1px solid #aaa',
    backgroundColor: color,
    color: 'black',
    fontSize: 30,
    height: 100,
    width: wide ? '50%' : '25%',
  };

  return <button type="button" style={styles}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
