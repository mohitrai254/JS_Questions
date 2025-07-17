function* fibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const series = fibonacciGenerator();

let n = 10;
for (let i = 0; i < 10; i++) {
  console.log(series.next().value);
}
