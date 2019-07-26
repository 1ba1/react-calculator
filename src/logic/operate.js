import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(+numberOne);
  const y = Big(+numberTwo);

  switch (operation) {
    case '+':
      return x.plus(y).toString();
    case '-':
      return x.minus(y).toString();
    case 'X':
      return x.times(y).toString();
    case '÷':
      return x.div(y).toString();
    case '%':
      return x.mod(y).toString();
    default:
  }
  return false;
};

export default operate;
