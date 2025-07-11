const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [str, bomb] = input;
const bombLen = bomb.length;
const stack = [];

for (const c of str) {
  stack.push(c);

  if (stack.length >= bombLen && c === bomb[bombLen - 1]) {
    let isMatch = true;

    for (let i = 1; i < bombLen; i++) {
      if (stack[stack.length - i - 1] !== bomb[bombLen - i - 1]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      stack.length -= bombLen;
    }
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');