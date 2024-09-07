const names = ["Alex", "Jordan", "Taylor", "Morgan", "Riley", "Casey"];

function isNameInArray(name) {
  return names.includes(name);
}

// Example usage
if (isNameInArray(prompt("what is your name?"))) {
  alert("welcome!");
} else {
  alert("you are not on the list...");
}
