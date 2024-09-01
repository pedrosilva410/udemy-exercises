function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  let personAgeMonths = age * 12;
  let personAgeWeeks = age * 52;
  let personAgeDays = age * 365;

  let monthsLeft = 1080 - personAgeMonths;
  let weeksLeft = 4680 - personAgeWeeks;
  let daysLeft = 32850 - personAgeDays;

  console.log(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months left ."
  );

  /*************Don't change the code below**********/
}
