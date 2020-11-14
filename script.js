// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays 
var number = [0,1,2,3,4,5,6,7,8,9]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialChar = ["!","@","#","$","^","&","*","(",")","-","_","+","=","{","}","[","]","|",";",":","'","<",">","?","/","~","`"];

//Variable Declarations
var confirmLength = "";
var comfirmSpecialCharacter;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

//Prompt to determine how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? (Must be between 8-128 characters)"))
  //If outside parameters of 8-128 characters
  while(confirmLength <= 7 || confirmLength >=129) {
    alert("Password must be between 8-128 characters")
    var confirmLength = generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  


  