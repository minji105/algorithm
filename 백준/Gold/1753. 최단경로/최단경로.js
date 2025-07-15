const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const start = Number(input[1]);

let distance = Array(N + 1).fill(Infinity);
distance[start] = 0;

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b, cost] = input[i + 2].split(' ').map(Number);
  graph[a].push([b, cost]);
}

//console.log(distance);
//console.log(graph);

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
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][1] <= this.heap[index][1]) break;

      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _bubbleDown() {
    let index = 0;
    const len = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < len && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }

      if (right < len && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
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

distance = distance.map(v => v === Infinity ? 'INF' : v);
console.log(distance.slice(1).join('\n'));