const numberInputElem = document.getElementById('numberInput');
const nthFactorialResultElem = document.getElementById('nthFactorialResult');
const sumOfFirstNNumbersResultElem = document.getElementById('sumOfFirstNNumbersResult');
const averageOfFirstNNumbersResultElem = document.getElementById('averageOfFirstNNumbersResult');
const calculateButton = document.getElementById('addEmployeeBtn');


const calculateFactorial = (n) => {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
};

const calculateSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const calculateAverage = (n) => {
  let sum = calculateSum(n);
  return (sum / n).toFixed(2);
};

const updateResults = () => {
  const n = parseInt(numberInputElem.value);
  
  if (!isNaN(n) && n > 0) {
    const factorial = calculateFactorial(n);
    const sum = calculateSum(n);
    const average = calculateAverage(n);

    nthFactorialResultElem.value = factorial;
    sumOfFirstNNumbersResultElem.value = sum;
    averageOfFirstNNumbersResultElem.value = average;
  } else {
    nthFactorialResultElem.value = '';
    sumOfFirstNNumbersResultElem.value = '';
    averageOfFirstNNumbersResultElem.value = '';
  }
};

calculateButton.addEventListener('click', updateResults);
