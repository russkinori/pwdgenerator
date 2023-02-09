// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Prompt the user to select a password length between 10 and 64
// Validate that the correct length was selected
// Prompt the user to decide on upper case characters
// Prompt the user to decide on lower case characters
// Prompt the user to decide on special characters
// Ensure that at least one character type is selected
// Collect user selections into an empty array
// Display the randomly generated password in an alert or written on the page


let characterSet = [];       // Create an empty array to store the selected characters
let passwordLength = 0;      // Create an variable to store the password length


// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = 0;
  // Use a while loop to validate that the user input for password length is a number between 10 and 64 characters)
  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {

    passwordLength = prompt("How long would you like the password? Enter a number between 10 and 64.");     // Prompt the user to choose a password length

    // Use an if statement to verify that the user makes the right selection
    if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
      alert("Please enter a number between 10 and 64 characters.");      // Alert the user to input their selection again if they made a wrong selection
    }
    
  }
  if (confirm("Would you like any upper case characters?")) {     // Prompt the user to accept or reject upper case characters
    characterSet = characterSet.concat(upperCasedCharacters);     // Place the upper case characters in the characterSet array, if accepted
  } 
  if (confirm("Would you like any lower case characters?")) {     // Prompt the user to accept or reject lower case characters
    characterSet = characterSet.concat(lowerCasedCharacters);     // Place the lower case characters in the characterSet array, if accepted
  } 
  if (confirm("Would you like any special characters?")) {        // Prompt the user to accept or reject special characters
    characterSet = characterSet.concat(specialCharacters);        // Place the special characters in the characterSet array, if accepted
  } 
  if (confirm("Would you like any numbers?")) {                   // Prompt the user to accept or reject numbers characters
    characterSet = characterSet.concat(numericCharacters);        // Place the numeric characters in the characterSet array, if accepted
  }

  return characterSet;      // End the function and return the values of characterSet array

};


// Function for getting a random element from an array
function getRandom() {

  let newPassword = "";   // Create an empty variable to hold the newly generaed password

  // Create a for loop that iterates though the the amount of characters selected for the pasword length 
  for (let i = 0; i < passwordLength; i++) {
    newPassword += characterSet[Math.floor(Math.random() * characterSet.length)]    //Randomise the amount characters selected and round down to the nearest number
  };

  return newPassword;       // End the function and return the value of the newly generated password

};


// Function to generate password with user input    
function generatePassword() {

  getPasswordOptions();     // Call the function that generates user prompts

  let password = getRandom()     // Call the function that randomises the characters and generates a new password

  return password;      // Display the newly generated password

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);