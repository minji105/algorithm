const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0];
const q = input[1] / 1;
const charMap = {};

for (let i in S) {
  const char = S[i];
  charMap[char] = [...(charMap[char] ?? []), Number(i)]
}

for (let i = 0; i < q; i++) {
  const [alp, l, r] = input[i + 2].split(' ').map((v, i) => i ? Number(v) : v);
  const alpIndex = charMap[alp] ?? [];

  console.log(alpIndex.filter(i => i >= l && i <= r).length);
}