const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let nums = n[1].split(' ').map(Number);
nums.forEach((v, i) => nums[i] = v += nums[i - 1] ? nums[i - 1] : 0)

let M = Number(n[2]);
let index = 3;
while (M-- > 0) {
  const [start, end] = n[index++].split(' ').map(v => v / 1 - 1);
  console.log(start === 0 ? nums[end] : nums[end] - nums[start - 1]);
}