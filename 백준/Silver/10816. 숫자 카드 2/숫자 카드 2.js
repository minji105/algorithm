const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
const arrM = input[3].split(' ').map(Number);

const map = {};
for (const n of cards) {
  map[n] = map[n] ? map[n] + 1 : 1;
}

const bn = (arr, tg) => {
  let pl = 0;
  let pr = arr.length - 1;

  while (pl <= pr) {
    let pc = Math.floor((pl + pr) / 2);
    if (tg < arr[pc]) {
      pr = pc - 1;
    } else if (tg > arr[pc]) {
      pl = pc + 1;
    } else return map[tg];
  }

  return 0;
};

const result = [];
for (const n of arrM) {
  result.push(bn(cards, n));
}

console.log(result.join(' '));