const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let tree = {};

for (let i = 1; i <= input[0]; i++) {
  const path = input[i].split('\\');
  let current = tree;

  for (const dir of path) {
    if (!current[dir]) {
      current[dir] = {};  // current.dir = {}
    }
    current = current[dir]; // current -> current.dir
  }
}

const result = [];

const printTree = (node, depth) => {
  const keys = Object.keys(node).sort();
  for (const key of keys) {
    result.push(' '.repeat(depth) + key);
    printTree(node[key], depth + 1);
  }
};

printTree(tree, 0);

console.log(result.join('\n'));