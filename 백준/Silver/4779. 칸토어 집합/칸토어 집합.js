const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const cantor = (n) => {
  if (n === 0) {
    return '-';
  }

  return cantor(n - 1) + ' '.repeat(Math.pow(3, n - 1)) + cantor(n - 1);
};

const result = [];
let i = 0;

while (i < input.length) {
  const N = input[i++];

  result.push(cantor(N));
}

console.log(result.join('\n'));