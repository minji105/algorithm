const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const set = new Set(input[1].split(' ').map(Number));
const arrM = input[3].split(' ').map(Number);
let result = '';

for (const num of arrM) {
  result += (set.has(num) ? 1 : 0) + '\n';
}

console.log(result);