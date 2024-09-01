let msg = prompt("write your message: ");
let cleft = 240 - msg.length;
alert(
  "your message is " +
    msg.length +
    " characters long, you have " +
    cleft +
    " characters left."
);
