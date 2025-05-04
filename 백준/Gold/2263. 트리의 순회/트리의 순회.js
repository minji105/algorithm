const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const inorder = input[1].trim().split(' ').map(Number);
const postorder = input[2].trim().split(' ').map(Number);

const index = new Array(n + 1).fill(0);
inorder.forEach((v, i) => index[v] = i);

let preorder = [];

const findPreorder = (inStart, inEnd, postStart, postEnd) => {
  if (inStart > inEnd || postStart > postEnd) return;

  // 루트
  const root = postorder[postEnd];
  preorder.push(root);

  // 루트 기준으로 중위순회에서 서브트리 나눔
  const rootIndex = index[root];
  const leftSize = rootIndex - inStart;

  findPreorder(inStart, rootIndex - 1, postStart, postStart + leftSize - 1) // 왼쪽 서브트리
  findPreorder(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1)  // 오른쪽 서브트리
}

findPreorder(0, n - 1, 0, n - 1);

console.log(preorder.join(' '));