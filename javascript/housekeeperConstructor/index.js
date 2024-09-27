function Housekeeper(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
  this.clean = function () {
    alert("Cleaning in progress");
    //cleaning is done
  };
}

const housekeeper1 = new Housekeeper("Vanessa", 19, 2);

console.log(housekeeper1);
