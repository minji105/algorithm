const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const setN = new Set(input[1].split(' ').map(Number));
const setM = new Set(input[3].split(' ').map(Number));

const result = [];

for (const num of setM) {
  if (setN.has(num)) result.push(1);
  else result.push(0);
}

console.log(result.join(' '));