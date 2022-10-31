// Assignment code here
// Prompt elements

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  var desiredLength = [8>=128].value; prompt("Choose characters between 8-128:");
  var lowerCaseLetters = confirm("Include lowercase characters?\nEither OK or Cancel.");
  var upperCaseLetters = confirm("Include uppercase characters?\nEither OK or Cancel.");
  var numerical = confirm("Include numbers?\nEither OK or Cancel.");
  var symbols = confirm("Include special characters?\nEither OK or Cancel.");

var password = generatePassword(generateBtn);
var passwordText = document.querySelector("#password");

function generatePassword(){
  var result = " ";
  var length = desiredLength;
  var yesLower =  lowerCaseLetters === true;
  var yesUpper = upperCaseLetters === true;
  var yesNumbers = numerical === true;
  var yesSymbols = symbols === true;

  if (lowerCaseLetters, upperCaseLetters, numerical, symbols === true) {
    passwordText;
  } else {
    return;
  }

  passwordText = generatePassword(yesLower, yesUpper, yesNumbers,yesSymbols, length);
}
// Write password to the #password input
function writePassword(lower, upper, number, character, length) {

  let writePassword = " ";

  const okayedPrompts = lower + upper + number + character;

  const okayedArr = [{lower}, {upper}, {number}, {character}].filter (item => Object.value(item[0]));

  if (okayedPrompts === 0){
    return '';

    for(let i=0; i<length; i += okayedPrompts){
      okayedArr.forEach(type => {
        const operName = Object.keys(type)[0];

        writePassword += randomizer[operName]();
      })
    }
const finalPassword = writePassword.slice(8, length);
return finalPassword;

  };

const randomizer = {
  lower: lowerCase,
  upper: upperCase,
  number: numbers,
  character: specialCharacters,
}; 
}
}
);


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
};
  