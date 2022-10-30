// Assignment code here

// Variables

var specialCharacter = ["!", "#", "$", "%", "&", "'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordLength = {from:8, to:128};

var writePassword = (specialCharacter, lowerCase, upperCase, numbers);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  var lengthInput = window.prompt(`How long would you like your password. Choose a number between 8-128. The default will be 8.`);
  
  var specialCharacterInput = window.prompt(`Choose any ONE of the following special characters:\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~`);
  var lowerCaseInput = window.prompt(`Choose some lowercase letter(s) --abcdefghijklmnopqrstuvwxyz-- If you do not want any, leave the space blank.`);
  var upperCaseInput = window.prompt(`Choose some uppercase letter(s). --ABCDEFGHIJKLMNOPQRSTUVWXYZ-- If you do not want any, leave the space blank.`);
  var numbersInput = window.prompt(`Choose numbers from 0-9. If you do not want any, leave the space blank.`);
  

if(specialCharacterInput === specialCharacter){
    writePassword;
  } else (specialCharacterInput !== specialCharacter);{
    specialCharacterInput = window.prompt(`Choose any ONE of the following special characters:\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~`);
  } return;},

if(lowerCaseInput === lowerCase){
    writePassword;
  } else (lowerCaseInput !== lowerCase);{
    lowerCaseInput = window.prompt(`Choose some lowercase letter(s) --abcdefghijklmnopqrstuvwxyz-- If you do not want any, leave the space blank.`)
  } return;

if(specialCharacterInput === specialCharacter){
    writePassword;
  } else (specialCharacterInput !== specialCharacter);{
    specialCharacterInput = window.prompt(`Choose any ONE of the following special characters:\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~`);
  } return;};

lowerCase = lowerCase.toLowerCase();
upperCase = upperCase.toUpperCase();
);


// //Password Randomization
// var index = Math.floor(Math.random() * writePassword);
// var putThingsTogether = writePassword[index];

// alert(putThingsTogether);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

