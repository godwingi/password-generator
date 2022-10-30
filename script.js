// Assignment code here
// Prompt elements

var password = generatePassword();
var passwordText = document.querySelector("#password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  var desiredLength = prompt("Choose character between 8-128:");
  var lowerCaseLetters = confirm("Include lowercase characters?\nEither OK or Cancel.");
  var upperCaseLetters = confirm("Include uppercase characters?\nEither OK or Cancel.");
  var numerical = confirm("Include numbers?\nEither OK or Cancel.");
  var symbols = confirm("Include special characters?\nEither OK or Cancel.");

function generatePassword(){
  var length = +desiredLength.value;
  var yesLower =  lowerCaseLetters === true;
  var yesUpper = upperCaseLetters === true;
  var yesNumbers = numerical === true;
  var yesSymbols = symbols === true;

  passwordText = generatePassword(yesLower, yesUpper, yesNumbers,yesSymbols, length);
}
}
);
const randomizer = {
  lower: lowerCase,
  upper: upperCase,
  number: numbers,
  character: specialCharacters,
}; 


// Generator fucntions
function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function numbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function specialCharacters() {
  const characters = `!"#$%&'()*+,-./:;<=>?@[^_`;
  return characters[Math.floor(Math.random() * characters.length)];
}



// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

