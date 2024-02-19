// TODO: Implement the oddNumbers function
function oddNumbers(a, b) {
  let result = "";
  for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
      result += i;
      //console.log(i);
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, letter) {
  if (letter.length !== 1) {
    return "the second character musste be a single character";
  }

  const lowerWord = word.toLowerCase();
  const lowerLetter = letter.toLowerCase();

  let count = 0;

  for (let i = 0; i <= lowerWord.length; i++) {
    if (lowerWord[i] === lowerLetter) {
      count++;
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
