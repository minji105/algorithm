const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const cantor = (n) => {
  if (n === 0) {
    return '-';
  }

  return cantor(n - 1) + ' '.repeat(Math.pow(3, n - 1)) + cantor(n - 1);
};

let result = '';

for (const N of input) {
  result += (cantor(N)) + '\n';
}

console.log(result);