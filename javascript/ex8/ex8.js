function bmiCalculator(weight, height) {
  return Math.floor(weight / (height * height));
}

console.log(bmiCalculator(65, 1.8));
