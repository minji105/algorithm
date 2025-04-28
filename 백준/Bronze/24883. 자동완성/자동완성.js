const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase();

console.log(n === 'n' ? 'Naver D2' : 'Naver Whale');