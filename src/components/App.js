import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '50px auto',
  width: 700,
};

export default class App extends React.Component {
  render() {
    return (
      <div id="App" style={styles}>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
