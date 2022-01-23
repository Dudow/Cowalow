const fibonacci = (factor: number): Array<number> => {
  const sequence = [];
  sequence[0] = 0;
  sequence[1] = 1;

  for (let i = 2; i < factor; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence;
};

console.log(fibonacci(6));
