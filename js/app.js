const height = prompt("Enter your height in Meter:");
const weight = prompt("Enter your weight in kg:");
let result = weight/height**2;
document.getElementById("bmiDisplay").innerHTML = result;

