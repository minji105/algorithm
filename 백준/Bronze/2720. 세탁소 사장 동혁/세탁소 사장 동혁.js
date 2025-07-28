const fs = require("fs"); 
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const T = Number(input[0]);
let result = '';

for (let i = 0; i < T; i++) {
  let num = Number(input[i + 1]);

  const quarter = Math.floor(num / 25);
  result += quarter + ' ';
  num -= quarter * 25;

  const dime = Math.floor(num / 10);
  result += dime + ' ';
  num -= dime * 10;

  const nichel = Math.floor(num / 5);
  result += nichel + ' ';
  num -= nichel * 5;

  result += num + ' ';

  result += '\n';
}

console.log(result);