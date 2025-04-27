const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let nums = n[1].split(' ').map(Number);
for (let i = 1; i < n[0] / 1; i++)
  nums[i] += nums[i - 1];

const M = Number(n[2]);
let index = 3;
const result = [];

for (let i = 0; i < M; i++) {
  const [start, end] = n[index++].split(' ').map(Number);
  result.push(start === 1 ? nums[end - 1] : nums[end - 1] - nums[start - 2]);
}

console.log(result.join('\n'));