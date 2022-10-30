// Assignment code here
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


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

