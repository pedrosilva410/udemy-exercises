function checkLeapYear(year) {
  if (year % 4 !== 0) {
    return "Not a leap year because it's not divisible by 4.";
  }
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return "It's a leap year because it's divisible by 400.";
    } else {
      return "Not a leap year because it's divisible by 100 but not by 400.";
    }
  }
  return "It's a leap year because it's divisible by 4 but not by 100.";
}

// Usage:
const year = 2000;
console.log(checkLeapYear(year)); // "It's a leap year because it's divisible by 400."
