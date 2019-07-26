import React from 'react';
import Button from './Button';

const containerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

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
  if (regex.test(prop)) return <Button key={prop} name={prop} />;
  if (prop === '0') return <Button key={prop} name={prop} color="#ddd" wide />;
  return <Button key={prop} name={prop} color="#ddd" />;
});


const ButtonPanel = () => <div style={containerStyles}>{buttons}</div>;

export default ButtonPanel;
