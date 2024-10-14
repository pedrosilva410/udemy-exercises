import generateName from "sillyname";
import superheroes, { randomSuperhero } from "superheroes";
var sillyName = generateName();
let name = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${name}!`);
