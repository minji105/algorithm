const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const visited = new Array(N + 1).fill(false);
const tree = Array.from({ length: N + 1 }, () => []);
const result = new Array(N + 1).fill(0);

for (let i = 1; i < input.length; i++) {
  const [n1, n2] = input[i].split(' ').map(Number);

  tree[n1].push(n2);
  tree[n2].push(n1);
}

const DFS = (node) => {
  visited[node] = true;

  for (let next of tree[node]) {
    if (!visited[next]) {
      result[next] = node;
      DFS(next);
    }
  }
}

DFS(1);

let output = '';
for (let i = 2; i <= N; i++) {
  output += result[i] + '\n';
}
console.log(output);
