import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '50px auto',
  width: 700,
};

const App = () => (
  <div id="App" style={styles}>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
