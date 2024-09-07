function whosPaying(names) {
  //generate random number
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //return string with random index of the array names and the desired message
  return names[getRandomInt(names.length)] + " is going to buy lunch today!";
}
