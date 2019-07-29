import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '50px auto',
  width: 700,
};

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    equalButtonPressed: false,
  };

  handleClick = (buttonName) => {
    this.setState(prevState => (calculate(prevState, buttonName)));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div id="App" style={styles}>
        <Display result={next || total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
