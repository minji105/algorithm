const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [hearNum, _] = n[0].split(' ').map(Number);
const hearSet = new Set(n.slice(1, hearNum + 1));
const seeList = n.slice(hearNum + 1).filter(name => hearSet.has(name)).sort();

console.log(`${seeList.length}\n${seeList.join('\n')}`);
