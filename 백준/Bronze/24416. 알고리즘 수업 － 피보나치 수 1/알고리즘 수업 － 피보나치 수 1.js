const fs = require("fs");
let N = fs.readFileSync("/dev/stdin").toString() / 1;

let countRec = 0;

const fibRec = (n) => {
  if (n === 1 || n === 2) {
    countRec++;
    return 1;
  };
  return fibRec(n - 1) + fibRec(n - 2);
};

fibRec(N);

console.log(countRec, N - 2);
