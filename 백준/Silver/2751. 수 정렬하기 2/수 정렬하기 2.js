const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(n.slice(1).map(v => v / 1).sort((a, b) => a - b).join('\n'));