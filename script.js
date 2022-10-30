// Assignment code here

// Variables

var characters = ["!","#", "$", "%", "&", "'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var specialCharacter = `Choose any ONE of the following special characters: \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~`;
var lowerCase = `Choose a lowercase letter. "abcdefghijklmnopqrstuvwxyz" If you do not want any, leave the space blank`;
var upperCase = `Choose an uppercase letter. "ABCDEFGHIJKLMNOPQRSTUVWXYZ" If you do not want any, leave the space blank`;
var numbers = `Choose numbers from 0-9. If you do not want any, leave the space blank`;
var passwordLength = `How long would you like your password. Choose a number between 8-128. The default will be 8.`;
var writePassword = (specialCharacter, lowerCase, upperCase, numbers);

generateBtn.onclick = function(){
  window.prompt(specialCharacter);
  checkCharacter;
  return;
};

// Input Validation
function checkCharacter(){
if (specialCharacter == characters){
  window.prompt(lowerCase);
  window.prompt(upperCase);
} else (specialCharacter !== characters);{
  window.prompt(specialCharacter);
}  return;
};

specialCharacter = checkCharacter();
lowerCase = lowerCase.toLowerCase();
upperCase = upperCase.toUpperCase();

//Password Randomization
var index = Math.floor(Math.random() * writePassword);
var putThingsTogether = writePassword[index];

alert(putThingsTogether);

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

