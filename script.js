//Pseudocode: Create HTML file and add script tag to connect it with JS file. Add alert on the script.js file("You've received this message..."). Then create variables for the 3 combination of the lock. Use const (Byron says to use const until we can't) to declare and initialize the variable. Then console.log and concatenate the combination from the 3 variables.

const firstNum = 5 + 5;
//Using the addition operator here to get to 10
const secondNum = 10 * 4;
//Using the multiplication operator to get to 40
const thirdNum = 40 - 1;
//Using the subtraction operator to get to 39

console.log(firstNum + "-" + secondNum + "-" + thirdNum);

alert(
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10-40-39"
);
alert(`${firstNum}-${secondNum}-${thirdNum}`);
