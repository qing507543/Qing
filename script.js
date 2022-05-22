// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var allchars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * allchars.length);
    password += allchars.substring(randomNumber, randomNumber +1);
   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
