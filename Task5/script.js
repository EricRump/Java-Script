// TODO: Implement the oddNumbers function
//const isOdd = (number) => number % 2 !== 0;

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

//console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function
function charCount(word, letter) {
  wordlength = word.length;
  for (let i = 0; i < wordlength; i++) {
    if (word.charAt(i) === letter) count++;
    else i + 1;
  }

  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
