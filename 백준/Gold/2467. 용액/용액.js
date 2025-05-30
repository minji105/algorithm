const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let [start, end] = [0, N - 1];
let twoSum = [0, 0, Infinity];

while (start < end) {
  const sum = arr[start] + arr[end];

  if (Math.abs(sum) < twoSum[2]) {
    twoSum = [arr[start], arr[end], Math.abs(sum)];
  }

  if (sum < 0) {
    start++;
  } else if (sum > 0) {
    end--;
  } else {
    console.log(arr[start], arr[end]);
    return;
  }
}

console.log(twoSum[0], twoSum[1]);