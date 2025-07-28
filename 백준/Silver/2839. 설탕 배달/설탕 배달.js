const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let T = Number(input);
let count = 0;

while (T > 0) {
  if (T % 5 === 0) {
    count += T / 5;
    T = 0;
    break;
  }
  count += 1;
  T -= 3;
}

console.log(T === 0 ? count : -1);