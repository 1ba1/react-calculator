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
          <Button wide={false} color="#ddd" name="AC"/>
          <Button wide={false} color="#ddd" name="+/-"/>
          <Button wide={false} color="#ddd" name="%"/>
          <Button wide={false} name="+"/>
        </div>
        <div style={rowStyles}>
          <Button wide={false} color="#ddd" name="7"/>
          <Button wide={false} color="#ddd" name="8"/>
          <Button wide={false} color="#ddd" name="9"/>
          <Button wide={false} name="X"/>
        </div>
        <div style={rowStyles}>
          <Button wide={false} color="#ddd" name="4"/>
          <Button wide={false} color="#ddd" name="5"/>
          <Button wide={false} color="#ddd" name="6"/>
          <Button wide={false} name="-"/>
        </div>
        <div style={rowStyles}>
          <Button wide={false} color="#ddd" name="1"/>
          <Button wide={false} color="#ddd" name="2"/>
          <Button wide={false} color="#ddd" name="3"/>
          <Button wide={false} name="/"/>
        </div>
        <div style={rowStyles}>
          <Button wide={true} color="#ddd" name="0"/>
          <Button wide={false} color="#ddd" name="."/>
          <Button wide={false} name="="/>
        </div>
      </div>
    )
  }
}
