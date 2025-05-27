const fs = require("fs");
let N = fs.readFileSync("/dev/stdin").toString().trim() / 1;

const star = Array.from({ length: N }, () => Array(2 * N - 1).fill(' '));

const printStar = (x, y, n) => {
  if (n === 3) {
    star[x][y] = '*';
    star[x + 1][y - 1] = '*';
    star[x + 1][y + 1] = '*';
    for (let i = -2; i <= 2; i++) star[x + 2][y + i] = '*';
    return;
  }

  const half = Math.floor(n / 2);
  printStar(x, y, half);
  printStar(x + half, y - half, half);
  printStar(x + half, y + half, half);
}

printStar(0, N - 1, N)
console.log(star.map(row => row.join('')).join('\n').trimEnd());