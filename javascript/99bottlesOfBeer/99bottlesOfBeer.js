let bottles = 99;

function beer() {
  while (bottles !== 1) {
    console.log(
      bottles + " bottles of beer on the wall, " + bottles + " bottles of beer."
    );
    console.log(
      "Take one down and pass it around, " +
        (bottles - 1) +
        " bottles of beer on the wall."
    );

    bottles--;
  }

  console.log("1 bottle of beer on the wall, 1 bottle of beer.");
  console.log(
    "Take one down and pass it around, no more bottles of beer on the wall."
  );
}
