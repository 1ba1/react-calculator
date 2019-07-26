import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const containerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const ButtonPanel = ({ clickHandler }) => {
  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  const buttons = [
    'AC',
    '+/-',
    '%',
    '+',
    '7',
    '8',
    '9',
    'X',
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
    const regex = /^[+]$|^[-]$|X|÷|=/;
    if (regex.test(prop)) {
      return <Button key={prop} name={prop} clickHandler={handleClick} />;
    }
    if (prop === '0') {
      return (
        <Button
          key={prop}
          name={prop}
          color="#ddd"
          wide
          clickHandler={handleClick}
        />
      );
    }
    return (
      <Button key={prop} name={prop} color="#ddd" clickHandler={handleClick} />
    );
  });

  return <div style={containerStyles}>{buttons}</div>;
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
