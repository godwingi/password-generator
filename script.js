// Assignment code here

var specialCharacter = window.prompt(`Choose any of the following special characters: \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~ If you do not want one, leave the space blank`);

var lowerCase = window.prompt(`Choose a lowercase letter. "abcdefghijklmnopqrstuvwxyz" If you do not want any, leave the space blank`);
lowerCase = lowerCase.toLowerCase();
var upperCase = window.prompt(`Choose an uppercase letter. "ABCDEFGHIJKLMNOPQRSTUVWXYZ" If you do not want any, leave the space blank`);
upperCase = upperCase.toUpperCase();

document.write(specialCharacter)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
