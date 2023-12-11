function converter() {
  // Get input values and units
  var input = parseFloat(document.getElementById('input-box').value);
  var fromUnit = document.getElementById('input-dropdown').value;
  var toUnit = document.getElementById('result-dropdown').value;

  // Perform conversion
  var result;
  if (fromUnit === 'Celcius' && toUnit === 'Farenheit') {
    result = (input * 9/5) + 32;
  } else if (fromUnit === 'Farenheit' && toUnit === 'Celcius') {
    result = (input - 32) * 5/9;
  } else if (fromUnit === 'Celcius' && toUnit === 'Kelvin') {
    result = input + 273.15;
  }
  // Add more conversion cases as needed

  // Display the result in the result box
  document.getElementById('result-box').value = result.toFixed(2);
}
