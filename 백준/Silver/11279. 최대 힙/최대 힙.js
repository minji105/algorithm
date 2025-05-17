const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(v) {
    this.heap.push(v);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const inserted = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent >= inserted) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = inserted;
  }

  extractMax() {
    if (this.heap.length === 0) return 0;

    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }

    return max;
  }

  sinkDown(index) {
    const len = this.heap.length;
    const value = this.heap[index];

    while (1) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let swap = null;

      if (leftIndex < len && this.heap[leftIndex] > value)
        swap = leftIndex;

      if (rightIndex < len && this.heap[rightIndex] > (swap === null ? value : this.heap[swap]))
        swap = rightIndex;

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = value;
  }

  size() {
    return this.heap.length;
  }
}

const N = input[0];
const heap = new MaxHeap();
let result = [];

for (let i = 1; i <= N; i++) {
  const x = input[i];
  if (x === 0) {
    result.push(heap.extractMax());
  } else {
    heap.insert(x);
  }
}

console.log(result.join('\n'));