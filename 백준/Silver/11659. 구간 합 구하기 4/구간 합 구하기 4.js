const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [_, M] = n[0].split(' ').map(Number);
const arr = n[1].split(' ').map(Number);
const prefix = [0];
arr.forEach((v, i) => prefix.push(prefix[i] + v));

let result = [];

for (let k = 0; k < M; k++) {
  const [i, j] = n[2 + k].split(' ').map(Number);
  result.push(prefix[j] - prefix[i - 1]);
}

console.log(result.join('\n'));