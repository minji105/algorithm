const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = n[0].split(' ').map(Number);
const arr = n[1].split(' ').map(Number);
let count = 0;

// 누적합 나머지 배열
let prefixSum = 0;
const remainderCount = new Array(M).fill(0);
remainderCount[0] = 1;

for (let i = 0; i < N; i++) {
  prefixSum += arr[i];
  remainderCount[prefixSum % M]++;
}

remainderCount.forEach(v => count += v * (v - 1) / 2)

console.log(count);