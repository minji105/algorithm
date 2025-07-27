const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const arrN = input[1].split(' ').sort((a, b) => a - b).map(Number);
const arrM = input[3].split(' ').map(Number);

const bn = (arr, num) => {
  let pl = 0;
  let pr = arr.length - 1;

  while (pl <= pr) {
    const mid = Math.floor((pl + pr) / 2);

    if (num < arr[mid]) {
      pr = mid - 1;
    } else if (num > arr[mid]) {
      pl = mid + 1;
    } else return 1;
  }

  return 0;
};

const result = [];

for (const n of arrM) {
  result.push(bn(arrN, n));
}

console.log(result.join(' '));