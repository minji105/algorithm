const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [_, M] = n[0].split(' ');
const arr = n[1].split(' ').map(Number);
let count = 0;

// 누적합 나머지 Map
let prefixSum = 0;
const remainderMap = new Map();
remainderMap.set(0, 1);

for (let i = 0; i < arr.length; i++) {
  prefixSum += arr[i]; // 누적합

  const remainder = prefixSum % M;  // 누적합 나머지

  if (remainderMap.has(remainder))
    count += remainderMap.get(remainder)  // 나머지가 map에 있으면 나머지 수만큼 count 증가(조합)

  remainderMap.set(remainder, (remainderMap.get(remainder) || 0) + 1);  // 나머지 수 1 증가
}

console.log(count);