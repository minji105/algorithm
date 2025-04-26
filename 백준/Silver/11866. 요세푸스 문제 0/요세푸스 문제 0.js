const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = n.split(' ').map(Number);
let q = new Array(N).fill(1).map((x, i) => x + i);

let result = [];
let index = K - 1;

while (q.length > 0) {
  index %= q.length;
  result.push(q.splice(index, 1))

  index += (K - 1)
}
console.log('<' + result.join(', ') + '>');