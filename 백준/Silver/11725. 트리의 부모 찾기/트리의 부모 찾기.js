const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0] / 1;
const visited = new Array(N + 1).fill(false);
const tree = Array.from({ length: N + 1 }, () => [])
const result = new Array(N - 1).fill(0);

for (let i = 1; i < input.length; i++) {
  const [n1, n2] = input[i].split(' ').map(Number);

  tree[n1].push(n2);
  tree[n2].push(n1);
}

const DFS = (num) => {
  visited[num] = true;

  for (let i of tree[num]) {
    if (!visited[i]) {
      result[i - 2] = num;
      DFS(i);
    }
  }
}

DFS(1);

console.log(result.join('\n'));
