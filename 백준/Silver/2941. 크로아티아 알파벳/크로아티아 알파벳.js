const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

console.log(n.replaceAll(/(c=|c-|dz=|d-|lj|nj|s=|z=)/g, '1').length);