const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0] / 1;
const line = input[1].split(' ').map(Number);
const stack = [];
let order = 1;

for (let i = 0; i < N; i++) {
  if (line[i] === order) {
    order++;

    while (stack.length > 0) {
      if (stack[stack.length - 1] === order) {
        stack.pop();
        order++;
      }
      else break;
    }
  } else {
    stack.push(line[i]);

    while (stack.length > 0) {
      if (stack[stack.length - 1] === order) {
        stack.pop();
        order++;
      }
      else break;
    }
  }
}

while (stack.length > 0) {
  if (stack.pop() !== order) {
    console.log('Sad');
    return;
  }
  order++;
}

console.log('Nice');