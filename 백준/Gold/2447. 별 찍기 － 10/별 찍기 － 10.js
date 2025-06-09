const fs = require("fs");
const N = fs.readFileSync("/dev/stdin").toString().trim() / 1;

const printStar = (n) => {
  if (n === 1) return ['*'];

  const stars = printStar(n / 3); 
  const result = [];

  for (let i = 0; i < stars.length; i++) {
    result.push(stars[i].repeat(3));
  }
  for (let i = 0; i < stars.length; i++) {
    result.push(stars[i] + ' '.repeat(n / 3) + stars[i]);
  }
  for (let i = 0; i < stars.length; i++) {
    result.push(stars[i].repeat(3));
  }

  return result;
}

console.log(printStar(N).join('\n'));