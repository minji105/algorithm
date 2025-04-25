const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n.shift();
const answer = n.map(v => v / 1).sort((a, b) => a - b);
answer.forEach(v => console.log(v))