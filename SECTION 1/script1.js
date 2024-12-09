function convertToMeter() {
  const inputValue = parseFloat(document.getElementById('inputMetric').value);
  if (isNaN(inputValue)) {
    document.getElementById('outputMetric').value = "Invalid input";
    return;
  }
  const convertedValue = inputValue * 0.3048;
  document.getElementById('outputMetric').value = `${convertedValue.toFixed(2)} meters`;
}

function convertToFeet() {
  const inputValue = parseFloat(document.getElementById('inputMetric').value);
  if (isNaN(inputValue)) {
    document.getElementById('outputMetric').value = "Invalid input";
    return;
  }
  const convertedValue = inputValue / 0.3048;
  document.getElementById('outputMetric').value = `${convertedValue.toFixed(2)} feet`;
}


function celToFah() {
  const input = document.getElementById('inputTemp').value;
  const celsius = parseFloat(input);

  if (isNaN(celsius)) {
    document.getElementById('resultTemp').textContent = 'Please enter a valid number';
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById('outputTemp').value = fahrenheit.toFixed(2) + ' °F';
}

function fahToCel() {
  const input = document.getElementById('inputTemp').value;
  const fahrenheit = parseFloat(input);

  if (isNaN(fahrenheit)) {
    document.getElementById('resultTemp').textContent = 'Please enter a valid number';
    return;
  }

  const celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('outputTemp').value = celsius.toFixed(2) + ' °C';
}
