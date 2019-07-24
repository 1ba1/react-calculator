import React from 'react';
import { Button } from './Button';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const rowStyles = {
  display: 'flex',
  height: 100,
};

export class ButtonPanel extends React.Component {
  render() {
    return (
      <div style={containerStyles}>
        <div style={rowStyles}>
          <Button color="#ddd" name="AC"/>
          <Button color="#ddd" name="+/-"/>
          <Button color="#ddd" name="%"/>
          <Button name="+"/>
        </div>
        <div style={rowStyles}>
          <Button color="#ddd" name="7"/>
          <Button color="#ddd" name="8"/>
          <Button color="#ddd" name="9"/>
          <Button name="X"/>
        </div>
        <div style={rowStyles}>
          <Button color="#ddd" name="4"/>
          <Button color="#ddd" name="5"/>
          <Button color="#ddd" name="6"/>
          <Button name="-"/>
        </div>
        <div style={rowStyles}>
          <Button color="#ddd" name="1"/>
          <Button color="#ddd" name="2"/>
          <Button color="#ddd" name="3"/>
          <Button name="/"/>
        </div>
        <div style={rowStyles}>
          <Button wide={true} color="#ddd" name="0"/>
          <Button color="#ddd" name="."/>
          <Button name="="/>
        </div>
      </div>
    )
  }
}
