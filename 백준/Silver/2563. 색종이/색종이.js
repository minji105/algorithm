const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let T = Number(input[0]);
const arr = Array.from({ length: 101 }, () => Array(101).fill(0));
let count = 0;

for (let i = 1; i <= T; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (arr[j][k] === 0) {
        arr[j][k] = 1;
        count++;
      }
    }
  }
}

console.log(count);