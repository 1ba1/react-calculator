import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const newData = JSON.parse(JSON.stringify({ total, next, operation }));
  const opRegex = /^[+]$|^[-]$|X|÷|%/;
  const digitRegex = /\d/;

  if (buttonName === 'AC') {
    newData.total = null;
    newData.next = null;
    newData.operation = null;
  } else if (buttonName === '+/-') {
    newData.total = (+newData.total * -1).toString();
    if (newData.next !== null) newData.next = (+newData.next * -1).toString();
  } else if (opRegex.test(buttonName)) {
    if (newData.total !== null && newData.next !== null) {
      newData.total = operate(newData.total, newData.next, newData.operation);
      newData.next = null;
      newData.operation = null;
    }
    newData.operation = buttonName;
  } else if (buttonName === '.') {
    if (
      newData.operation === null
      && newData.total.indexOf('.') < 0
      && newData.total.length > 0
    ) {
      newData.total += buttonName;
    } else if (
      newData.operation !== null
      && newData.next.indexOf('.') < 0
      && newData.next.length > 0
    ) {
      newData.next += buttonName;
    }
  } else if (buttonName === '=') {
    if (newData.total !== null && newData.next !== null) {
      newData.total = operate(newData.total, newData.next, newData.operation);
      newData.next = null;
      newData.operation = null;
    }
  } else if (digitRegex.test(buttonName)) {
    if (newData.operation === null) {
      newData.total = newData.total === '0' || newData.total === null
        ? newData.total = buttonName
        : newData.total + buttonName;
    } else {
      newData.next = newData.next === null
        ? newData.next = buttonName
        : newData.next + buttonName;
    }
  }

  return newData;
};

export default calculate;
