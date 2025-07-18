const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
const arrM = input[3].split(' ').map(Number);

const map = new Map();
for (const n of cards) {
  map.set(n, (map.get(n) || 0) + 1);
}

const result = [];
for (const n of arrM) {
  result.push(map.get(n) || 0);
}

console.log(result.join(' '));