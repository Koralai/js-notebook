function fibonacciGenerator(n) {
  let output = [0, 1];

  //     Start count at 2 because we're now starting at index 2.
  for (let index = 2; index < n; index++) {
    output.push(output[index - 1] + output[index - 2]);
  }

  return output.slice(0, n);
}