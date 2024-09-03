prompt("your name");
prompt("your crush name");

let randomNumber = Math.random() * 100;
randomNumber = Math.floor(randomNumber) + 1;

if (randomNumber > 70) {
  alert("your love score is: " + randomNumber + " max lover!!");
} else if (randomNumber > 30 && randomNumber <= 70) {
  alert("your love score is: " + randomNumber);
} else {
  alert("your love score is: " + randomNumber + " forget about it...");
}
