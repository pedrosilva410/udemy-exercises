function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  bottles = Math.floor(money / 1.5);
  console.log("buy " + bottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(2); //1
getMilk(3); //2
getMilk(5); //3
