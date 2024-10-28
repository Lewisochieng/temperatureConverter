document.getElementById('converter').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  let degrees = parseFloat(document.getElementById('degrees').value); // Get input value
  let type = document.getElementById('type').value; // Get selected type (Fahrenheit, Celsius, Kelvin)
  let result;

  if (isNaN(degrees)) {
    // Handle invalid input
    document.getElementById('result').value = "Please enter a valid number";
    return;
  }

  if (type === 'fahrenheit') {
    // Fahrenheit to Celsius and Kelvin
    let celsius = (degrees - 32) * 5 / 9;
    let kelvin = celsius + 273.15;
    document.getElementById('result').value = `${celsius.toFixed(2)} °C / ${kelvin.toFixed(2)} K`;
  } else if (type === 'celsius') {
    // Celsius to Fahrenheit and Kelvin
    let fahrenheit = (degrees * 9 / 5) + 32;
    let kelvin = degrees + 273.15;
    document.getElementById('result').value = `${fahrenheit.toFixed(2)} F / ${kelvin.toFixed(2)} K`;
  } else if (type === 'kelvin') {
    // Kelvin to Celsius and Fahrenheit
    let celsius = degrees - 273.15;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').value = `${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} F`;
  }
});
