import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberTwo === '0' && operation === '÷') return 'Error!';

  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case '+':
      return x.plus(y).toString();
    case '-':
      return x.minus(y).toString();
    case 'x':
      return x.times(y).toString();
    case '÷':
      return x.div(y).toString();
    default:
      return false;
  }
};

export default operate;
