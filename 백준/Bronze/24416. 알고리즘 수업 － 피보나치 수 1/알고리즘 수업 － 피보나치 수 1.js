const fs = require("fs");
let N = fs.readFileSync("/dev/stdin").toString() / 1;

let countRec = 0;
let countDP = 0;

const fibRec = (n) => {
  if (n === 1 || n === 2) {
    countRec++;
    return 1;
  };
  return fibRec(n - 1) + fibRec(n - 2);
};

const fibDP = (n) => {
  const fib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    countDP++;
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
};

fibRec(N);
fibDP(N);

console.log(countRec, countDP);
