const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const tree = Array.from({ length: N + 1 }, () => []);
const parentArr = new Array(N + 1).fill(0);

for (let i = 1; i < input.length; i++) {
  const [n1, n2] = input[i].split(' ').map(Number);

  tree[n1].push(n2);
  tree[n2].push(n1);
}

const DFS = (node) => {
  for(let next of tree[node]) {
    if(parentArr[next]===0) {
      parentArr[next] = node;
      DFS(next);
    }
  }
}

DFS(1);

console.log(parentArr.slice(2).join('\n'));