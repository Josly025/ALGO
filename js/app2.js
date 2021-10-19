///JavaScript Cardio version two

// 1. Longest Word
// Return to longest word in a string
// If more than one longest word, put into an array
// ex. longestWord("Hello, my name is Grant") ===> return Hello and Grant // 5 characters each
// ex. longestWord("Hello, my name is guy") ===> return guy

function longestWord() {}

longestWord("what is the longest word");

// 3. Flatten Array
// 4. Anagrams
// 5. Letter Changes

// function maxChars(str) {
//   //charMap //create an object
//   let charMap = {};
//   //numMax
//   let maxNum = 0;
//   //maxChar
//   let maxChar = "";

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   console.log(maxChar);
//   return maxChar;
// }

// maxChars("javascript");

/// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - No awways
// ex. addALL(2,5,6,7) ===> 20

function addAll(...numbers) {
  let total = 0;

  numbers.forEach((number) => {
    console.log(number);
    total += number;
  });
  console.log(total);
  return total;
}

addAll(2, 5, 6, 7, 5);

///Challenge 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 who only factors are 1 and itself
// ex. sumAllPrimes(10) === 17

function sumAllPrimes(num) {}

console.log(sumAllPrimes(10));
