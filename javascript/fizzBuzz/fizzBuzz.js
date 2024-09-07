const output = [];
let nextNumber = 1;

function fizzBuzz() {
  if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
    output.push("FizzBuzz");
  } else if (nextNumber % 3 === 0) {
    output.push("Fizz");
  } else if (nextNumber % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(nextNumber);
  }

  nextNumber++;
  console.log(output);
}
