const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
}
if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// TODO: Implement the oddEven function
function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function

function oldYoung(number) {
  if (number < 1) {
    return "invalid parameter";
  } else if (number < 16) {
    return "children";
  } else if (number < 50) {
    return "young person";
  } else if (number >= 50) {
    return "elder peron";
  } else {
    return "invalid parameter";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
