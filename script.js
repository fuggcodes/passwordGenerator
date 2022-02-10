//declare globally each array of characters 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//gathering information from the user adn storing it in a object
function userInfo() {
  //prompt(input) requesting interger from parseInt
  var length = parseInt(prompt("please enter the length you'd like your password to be?"), 10);
  //if user enters a non number send this alert
  if (Number.isNaN(length)) {
    alert("Please enter a valid number!");
    return null;
  }
  //if user enters a number less than 8 or greater than 128 send alert 
  if (length < 8 || length > 128) {
    alert("You need the number to be at least 8 and no greater than 128");
    return null;
  }
  //confirm=true or false; lets user choose if they'd like either or  
  var hasLowercase = confirm("If you would like lowercase characters click OK!");
  var hasUppercase = confirm("If you'd like uppercase characters click OK!");
  var hasNumeric = confirm("If you'd like numberic characters click OK!");
  var hasSpecialCharacters = confirm("If you'd like special characters click OK!");
  if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecialCharacters === false) {
    alert("Please confirm at least one of the type of characters!");
    return null;
  }
// create an object that holds users answers
  var userAnswers = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecialCharacters: hasSpecialCharacters,
  };
  // returning the answers so we use it in the logic 
  return userAnswers;
}
// get random for all the different character
// created function to use multiple times to process the arrays
function getRandom(arr) {
  //choosing random number form array length,, math.floor rounds it to nearesdt whole number
  var randomIndex = Math.floor(Math.random() * arr.length);
  //take the information of array based off that randomIndex number
  var randomEl = arr[randomIndex];
  //returns the value of the randomfunciton aka final result 
  return randomEl;
}
// based on users answer processing the arrays to get the random value based off length characters needed
function generatePassword() {
  //options is the object for userInfo function
  var options = userInfo();
  var guarantee = [];
  var pool = [];
  var final = [];

  if (!options) return null;
// pulls content from lowerCase
  if (options.hasLowercase) {
    //adding actual array to an empty array by .concat 
    pool = pool.concat(lowerCase);
    //passing in an argument in getrandom function, result is being pushed to guarantee 
    guarantee.push(getRandom(lowerCase));
  }
// pulls content from upperCase
  if (options.hasUppercase) {
    pool = pool.concat(upperCase);
    guarantee.push(getRandom(upperCase));
  }
// pulls content from hasNumeric
  if (options.hasNumeric) {
    pool = pool.concat(numericCharacters);
    guarantee.push(getRandom(numericCharacters));
  }
// pulls content from hasSpecialCharacters
  if (options.hasSpecialCharacters) {
    pool = pool.concat(specialCharacters);
    guarantee.push(getRandom(specialCharacters));
  }

  // loop options.length apply getRandom to possibles to create a new possibles then push possible to the final
  for (var i = 0; i < options.length; i++) {
    var poolChoice = getRandom(pool);
    final.push(poolChoice);
  }
  // do another for loop on guaranteed which you will call result to equal guarantee and its index 
  for (var i = 0; i < guarantee.length; i++) {
    final[i] = guarantee[i];
  }
  // have to return the result and do a .join to make it a string 
  return final.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //set passwored directed to generatePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
// once clicked it will start wrtiePassword function
generateBtn.addEventListener("click", writePassword);
// comment each area of the code to say what its doing