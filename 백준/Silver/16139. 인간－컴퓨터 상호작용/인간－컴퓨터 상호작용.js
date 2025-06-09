const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0];
const q = input[1] / 1;
const prefix = Array.from({ length: 26 }, () => Array(S.length + 1).fill(0));

for (let i = 0; i < S.length; i++) {
  const char = S.charCodeAt(i) - 97;

  for (let j = 0; j < 26; j++) {
    prefix[j][i + 1] = prefix[j][i] + (j === char ? 1 : 0);
  }
}

const result = [];

for (let i = 0; i < q; i++) {
  const [alp, l, r] = input[i + 2].split(' ').map((v, i) => i == 0 ? v : Number(v));
  const char = alp.charCodeAt() - 97;
  result.push(prefix[char][r + 1] - prefix[char][l]);
}

console.log(result.join('\n'));