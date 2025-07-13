const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const [start, end] = input[input.length - 1].split(' ').map(Number);

const distance = Array(N + 1).fill(Infinity);
distance[start] = 0;

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b, cost] = input[i + 2].split(' ').map(Number);
  graph[a].push([b, cost]);
}

class MinHeap {
  constructor () {
    this.heap = [];
  }

  push([node, cost]) {
    this.heap.push([node, cost]);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }

  _bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.heap[parent][1] <= this.heap[i][1]) break;

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _bubbleDown() {
    let i = 0;
    const len = this.heap.length;

    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (left < len && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }

      if (right < len && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const heap = new MinHeap();
heap.push([start, 0]);

while (!heap.isEmpty()) {
  const [cur, curCost] = heap.pop();

  if (curCost > distance[cur]) continue;

  for (const [next, cost] of graph[cur]) {
    const total = curCost + cost;

    if (total < distance[next]) {
      distance[next] = total;
      heap.push([next, total]);
    }
  }
}

console.log(distance[end]);