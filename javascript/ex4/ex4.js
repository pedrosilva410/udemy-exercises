let name = prompt("What's your name?");
let firstLetter = name.slice(0, 1);
let restOfName = name.slice(1, name.lenght);

let capitalizedName = firstLetter.toUpperCase() + restOfName.toLowerCase();

alert("Hello, " + capitalizedName);
