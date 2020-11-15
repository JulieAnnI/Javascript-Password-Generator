// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays 
var number = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","@","#","$","^","&","*","(",")","-","_","+","=","{","}","[","]","|",";",":","'","<",">","?","/","~","`"];

//Variable Declarations
var passLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

generateBtn.addEventListener("click", writePassword);

//Prompt to determine how many characters the user would like in their password
function writePassword() {
  var passLength = (prompt("How many characters would you like your password to contain? (Must be between 8-128 characters)"))
  
//If outside parameters of 8-128 characters
while(passLength <= 7 || passLength >= 129) {
  alert("Password must be between 8-128 characters")
  return 
}
//Turn password Length into an integer
  var newPassLength = parseInt(passLength);
  console.log(newPassLength)

  //Parameters of Password
  var confirmLowerCase = confirm("Would you like lowercase characters in your password?")
  var confirmUpperCase = confirm("Would you like uppercase characters in your password?")
  var confirmNumber = confirm("Would you like numbers in your password?")
  var confirmSpecialChar = confirm("Would you like special characters in your password?")
  //If no parameters are selected
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumber === false) {
    alert("You must choose at least one parameter");
    return

  }
}

  while (newPassLength>= 0) {
    
    if (confirmLowerCase = true) {
      const random = Array[Math.floor(Math.random()*lowerCase.length)];

      console.log (random, lowerCase[random])

      
    }
    var newPassLength = newPassLength - 1
  }
//Define Parameters of Password


// Write password to the #password input


// Add event listener to generate button