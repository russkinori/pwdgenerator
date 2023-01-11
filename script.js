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
  //Validate that the correct length was selected
// Prompt the user to decide on upper case characters
// Prompt the user to decide on lower case characters
// Prompt the user to decide on special characters
//Ensure that at least one character type is selected
// Collate user selections into an empty array
// Display the randomly generated password in an alert or written on the page

// Create an empty array to hold the randomly generated passwords
let characterSet = [];

  // Function to prompt user for password options
function getPasswordOptions() {

    
    let promptUser = prompt("Choose password length");          //Prompt the user to choose a password length
    return promptUser;              //return the value of the promptuser variable

    };
 
    
    
    
    
    // Function for getting a random element from an array
    function getRandom() {
      
      let characterlength = getPasswordOptions();       //Call the user selection from the passwordOptions function

      if(confirm("Would you like any upper case characters?")){
        characterSet = characterSet.concat(upperCasedCharacters);         //Prompt option for the user to select upper case characters
      }
      if(confirm("Would you like any lower case characters?")){
        characterSet = characterSet.concat(lowerCasedCharacters);         //Prompt option for the user to select lower case characters
      }
      if(confirm("Would you like any special characters?")){
        characterSet = characterSet.concat(specialCharacters);            //Prompt option for the user to select special characters
      }

      if(confirm("Would you like any numbers?")){
        characterSet = characterSet.concat(numericCharacters);           //Prompt option for the user to select numbers characters
      }

      return characterSet;
      };
      
    
    
    // Function to generate password with user input
    
    function generatePassword() {
    
    
    
    }
    
    
    
    // Get references to the #generate element
    var generateBtn = document.querySelector('#generate');
    
    // Write password to the #password input
    function writePassword() {
      var password = getPasswordOptions();
      var passwordText = document.querySelector('#password');
    
      passwordText.value = password;
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener('click', writePassword);