const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const specialCaseCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const numberCharacters = "0123456789";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var autoPassword = "";
  var result = "";
  var choiceLength = window.prompt("*Please Enter Password Length: \n(8 characters minimum) \n(128 characters maximum)");

  if (choiceLength >= 8 && choiceLength <= 128) {
    var choiceUC = window.confirm("*Do you want to include upper case:");

    if (choiceUC) {
      autoPassword += upperCaseCharacters;
      //Checking to see if the upper case character are being added to the autopassword string in the console
      console.log(autoPassword);
    }
    //Checking to see if the input was true or false in the console
    console.log(choiceUC);
    var choiceLC = window.confirm("*Do you want to include lower case:");

    if (choiceLC) {
      autoPassword += lowerCaseCharacters;
      console.log(autoPassword);
    }

    console.log(choiceLC);
    var choiceSC = window.confirm("*Do you want to include special characters: \nEg. (@'s and /'s)");

    if (choiceSC) {
      autoPassword += specialCaseCharacters;
      console.log(autoPassword);
    }

    console.log(choiceSC);
    var choiceSN = window.confirm("*Do you want to include numbers:");

    if (choiceSN) {
      autoPassword += numberCharacters;
      console.log(autoPassword);
    }
    console.log(choiceSN);

    //If none of the options are selected
    if (!choiceUC && !choiceLC && !choiceSC && !choiceSN) {
      return "Please select an option!";
    }

    // Based on the length of the character choice
    for (var x = 1; x <= choiceLength; x++) {
      // Stores auto password string in result and gets random characters from the autopassword string
      result += autoPassword.charAt(Math.floor(Math.random() * autoPassword.length));
    }

    return result;

  } else if (choiceLength < 8) {
    alert("*Password length needs to be at least 8 characters, try again!");
    return "Password length too short.";
  } else if (choiceLength > 128) {
    alert("*Password length needs to be less than 129 characters, try again!");
    return "Password length too long.";
  } else {
    alert("*Invalid type. Please input a numerical value!");
    return "Cannot recognize input, invalid entry type.";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

