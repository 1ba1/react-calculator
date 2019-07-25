import React from 'react';
import Button from './Button';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const rowStyles = {
  display: 'flex',
  height: 100,
};

const ButtonPanel = () => (
  <div style={containerStyles}>
    <div style={rowStyles}>
      <Button name="AC" color="#ddd" />
      <Button name="+/-" color="#ddd" />
      <Button name="%" color="#ddd" />
      <Button name="+" />
    </div>
    <div style={rowStyles}>
      <Button name="7" color="#ddd" />
      <Button name="8" color="#ddd" />
      <Button name="9" color="#ddd" />
      <Button name="X" />
    </div>
    <div style={rowStyles}>
      <Button name="4" color="#ddd" />
      <Button name="5" color="#ddd" />
      <Button name="6" color="#ddd" />
      <Button name="-" />
    </div>
    <div style={rowStyles}>
      <Button name="1" color="#ddd" />
      <Button name="2" color="#ddd" />
      <Button name="3" color="#ddd" />
      <Button name="/" />
    </div>
    <div style={rowStyles}>
      <Button name="0" color="#ddd" wide />
      <Button name="." color="#ddd" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
