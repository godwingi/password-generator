// Assignment code here

// Variables

var characters = ["\!,\",\#,\$,\%,\&,\',\(,\),\*,\+,\,,\-,\.,\/,\:,\;,\<,\=,\>,\?,\@,\[,\\,\],\^,\_,\`,\{,\|,\},\~"];
var specialCharacter = window.prompt(`Choose any ONE of the following special characters: \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~ 
If you do not want one, leave the space blank`);
var lowerCase = window.prompt(`Choose a lowercase letter. "abcdefghijklmnopqrstuvwxyz" If you do not want any, leave the space blank`);

var upperCase = window.prompt(`Choose an uppercase letter. "ABCDEFGHIJKLMNOPQRSTUVWXYZ" If you do not want any, leave the space blank`);
var numbers = window.prompt(`Choose numbers from 0-9. If you do not want any, leave the space blank`);
var passwordLength = window.prompt(`How long would you like your password. Choose a number between 8-128. The default will be 8.`);

// Input Validation
var specialCharacter = window.prompt(`Choose any of the following special characters: \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~ If you do not want one, leave the space blank`);
if (specialCharacter === characters){
  console.log(passwordText);
} else (specialCharacter !== characters);{
  specialCharacter;
};

lowerCase = lowerCase.toLowerCase();
upperCase = upperCase.toUpperCase();

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
