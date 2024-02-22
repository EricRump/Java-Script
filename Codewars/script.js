// Number of People in the Bus

var number = function (busStops) {
  let count = 0;
  for (i = 0; i < busStops.length; i++) {
    count += busStops[i][0];
    count -= busStops[i][1];
  }
  return count >= 0 ? count : 0;
};

//Counting sheep...

function countSheeps(sheep) {
  let count = 0;
  for (i = 0; i <= sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }
  return count;
}

//Sum of positive

function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//Return Negative

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//Opposite number

function opposite(number) {
  const anders = number * -1;
  return anders;
}

//Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  const beide = arr1.concat(arr2);
  beide.sort((a, b) => a - b);
  const nureins = [...new Set(beide)];
  return nureins;
}

// Convert a Number to a String!

function numberToString(num) {
  return num.toString();
}

//Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//Highest and Lowest

function highAndLow(numbers) {
  const nummern = numbers.split(" ").map(Number);
  const maxZahl = Math.max(...nummern);
  const minZahl = Math.min(...nummern);

  return `${maxZahl} ${minZahl}`;
}

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

//Reversed Strings

function solution(str) {
  const dreh = str.split("");
  const ergebnis = dreh.reverse();
  const word = ergebnis.join("");

  return word;
}

// Sum Arrays

function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let summe = 0;
  for (let i = 0; i < numbers.length; i++) {
    summe += numbers[i];
  }
  return summe;
}

//Abbreviate a Two Word Name

function abbrevName(name) {
  let words = name.split(" ");
  let letters = [];

  for (i = 0; i < words.length; i++) {
    letters.push(words[i].charAt(0).toUpperCase());
  }
  return letters.join(".");
}

//Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
  if (string.endsWith("!")) {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

//String repeat

function repeatStr(n, s) {
  return s.repeat(n);
}

//Remove String Spaces

function noSpace(x) {
  return x.split(" ").join("");
}

// Convert a String to a Number!

const stringToNumber = function (str) {
  return parseInt(str);
};

//Days in the year

function yearDays(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + " has 366 days";
  } else {
    return year + " has 365 days";
  }
}
