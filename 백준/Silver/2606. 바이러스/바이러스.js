const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input[0] / 1;
const M = input[1] / 1;

const visited = Array(N + 1).fill(false);
visited[1] = true;

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;

const bfs = (start) => {
  for (const next of graph[start]) {
    if (!visited[next]) {
      count++;
      visited[next] = true;
      bfs(next);
    }
  }
};

bfs(1);
console.log(count);