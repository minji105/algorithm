const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let [start, end, sum] = [0, 0, arr[0]];
let minLen = N;
let isMore = false;

while (end < N) {
  if (sum < S) {
    end++;
    sum += arr[end];
  } else {
    minLen = Math.min(minLen, end - start + 1);
    isMore = true;
    sum -= arr[start];
    start++;
  }
}

console.log(isMore ? minLen : 0);