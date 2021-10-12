//ALGO PRACTICE

//CLASS review --- You use classes to make objects
// use the word class to create a class - use the method constructor to define the values
class DogName {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  allDogs() {
    let dogArray = [];
    dogs.forEach((dog) => {
      //   console.log(dog.name);
      dogArray.unshift(dog.name);
    });
    // console.log(dogArray);
  }
}

let dog1 = new DogName("Jeff", 1);
let dog2 = new DogName("George", 10);
let dog3 = new DogName("Jorge", 23);

let dogs = [dog1, dog2, dog3];

dog1.allDogs();

///
//// CLOSURES
//JavaScript Closures - occur when the inner function (displayName) has access to the outer (enclosing) functions variables

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    return name; // use variable declared in the parent function
  }
  displayName();
}
init();

// REVERSE a STRING
//  Return a string in reverse
// ex. reverseString("hello") === "olleh"

//verison 1
function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  console.log(reversed);
  return reversed;
}

//verison 1
// function reverseString(str) {
//   let reversed = "";

//   //remind for of ==> strings
//   for (let char of str) {
//     console.log(char);
//     reversed = char + reversed;
//   }
//   console.log(reversed);
// }

// reverseString("hello"); // "olleh"

/// Challenge 2: Validate a Palindrome
// palidrome is the same forward and backwards
// ex. isPalindrome("racecar") === true //, isPalindrome("hello") === false

function isPalindrome(str1) {
  let reversed = "";
  for (let char of str1) {
    reversed = char + reversed;
  }
  if (reversed !== str1) {
    console.log(reversed + " this is true");
    return false;
  } else {
    console.log(reversed + " this is false");
    console.log(reversed);
    return true;
  }
}

// isPalindrome("racecar"); //true
// isPalindrome("hello"); //false

// Challenge 3: Reverse an Integer
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let intString = int.toString().split("").reverse().join("");
  let reversedInt = parseInt(intString) * Math.sign(int); //returns either a pos or neg value
  // console.log(reversedInt);
  return reversedInt;
}

reverseInt(123); ///321

// Challenge 4: Capitalize Letters
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters("i love javascript") === "I Love Javascript"

function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" "); //maker sure this is spaced
  //looping over array and objects use for in
  for (i in strArr) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  let caps = strArr.join(" ");
  console.log(console.log(caps));
}

capitalizeLetters("i love javascript");

//Challenge 5: Fizzbuzz
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print ("Fizzbuzz")

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();
