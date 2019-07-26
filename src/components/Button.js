import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  function handleClick() {
    return clickHandler(name);
  }

  const styles = {
    border: '1px solid #aaa',
    backgroundColor: color,
    color: 'black',
    fontSize: 30,
    height: 100,
    width: wide ? '50%' : '25%',
  };

  return (
    <button
      type="button"
      style={styles}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
