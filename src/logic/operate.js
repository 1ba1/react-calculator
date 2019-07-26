import Big from './big';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne + numberTwo);
    case '-':
      return Big(numberOne - numberTwo);
    case 'X':
      return Big(numberOne * numberTwo);
    case '÷':
      return Big(numberOne / numberTwo);
    case '%':
      return Big(numberOne % numberTwo);
    default:
  }
  return false;
};

export default operate;
