import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const containerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const ButtonPanel = ({ clickHandler }) => {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '+',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '÷',
    '0',
    '.',
    '=',
  ].map((prop) => {
    const regex = /^[+]$|^[-]$|x|÷|=/;
    if (regex.test(prop)) {
      return <Button key={prop} name={prop} clickHandler={clickHandler} />;
    }
    if (prop === '0') {
      return (
        <Button
          key={prop}
          name={prop}
          color="#ddd"
          wide
          clickHandler={clickHandler}
        />
      );
    }
    return (
      <Button key={prop} name={prop} color="#ddd" clickHandler={clickHandler} />
    );
  });

  return <div style={containerStyles}>{buttons}</div>;
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
