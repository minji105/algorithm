const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = n[0].split(' ').map(Number);

const prefix = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const line = n[i].split(' ').map(Number);

  for (let j = 1; j <= N; j++) {
    prefix[i][j] = line[j - 1] + prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1];
  }
}

const result = [];

for (let i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = n[N + i + 1].split(' ').map(Number);
  result.push(prefix[x2][y2] - prefix[x1 - 1][y2] - prefix[x2][y1 - 1] + prefix[x1 - 1][y1 - 1]);
}

process.stdout.write(result.join('\n') + '\n');