const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [str, bomb] = input;
const bombLen = bomb.length;
const stack = [];

for (const c of str) {
  stack.push(c);

  if (stack.length >= bombLen) {
    if (stack.slice(-bombLen).join('') === bomb) {
      stack.length -= bombLen;
    }
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');