function fibonacci(number) {
  if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else {
    let output = [0, 1];
    for (let i = 2; i < number; i++) {
      let sum = output[i - 1] + output[i - 2];
      output.push(sum);
    }
    return output;
  }
}
