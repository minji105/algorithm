const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
let [p1, p2] = [0, 0];
let sum = arr[0];

while (p2 < N) {
  if (sum < M) {
    p2++;
    sum += arr[p2];
  } else if (sum > M) {
    sum -= arr[p1];
    p1++;
  } else {
    count++;
    sum -= arr[p1];
    p1++;
  }
}

console.log(count);