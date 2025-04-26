const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = n.split(' ').map(Number);
let q = new Array(N).fill(1).map((x, i) => x + i);

let result = [];
let order = 1;

while (q.length > 0) {
  if (order !== K) {
    q.push(q.shift());
    order++;
  }
  else {
    result.push(q.shift());
    order = 1;
  }
}
console.log('<' + result.join(', ') + '>');