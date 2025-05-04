const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const tree = [];

for (let i = 0; i < N; i++) {
  const [parent, left, right] = input[i + 1].trim().split(' ');
  const toIndex = v => (v === '.' ? -1 : v.charCodeAt(0) - 65);
  tree[toIndex(parent)] = [toIndex(left), toIndex(right)];
}

//[
//  [ 1, 2 ],
//  [ 3, -1 ],
//  [ 4, 5 ],
//  [ -1, -1 ],
//  [ -1, 6 ],
//  [ -1, -1 ],
//  [ -1, -1 ]
//]

let result = '';

// 전위
const preorder = (node) => {
  if (node === -1) return;

  result += String.fromCharCode(node + 65);
  preorder(tree[node][0]);
  preorder(tree[node][1]);
}

// 중위
const inorder = (node) => {
  if (node === -1) return;

  inorder(tree[node][0]);
  result += String.fromCharCode(node + 65);
  inorder(tree[node][1]);
}

// 후위
const postorder = (node) => {
  if (node === -1) return;

  postorder(tree[node][0]);
  postorder(tree[node][1]);
  result += String.fromCharCode(node + 65);
}

preorder(0);
result+='\n';
inorder(0);
result+='\n';
postorder(0);
result+='\n';

console.log(result);