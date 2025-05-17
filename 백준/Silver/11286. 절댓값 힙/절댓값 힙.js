const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

class MinHeap {
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

      if (Math.abs(parent) < Math.abs(inserted) ||
        (Math.abs(parent) === Math.abs(inserted) && parent < inserted)
      ) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = inserted;
  }

  extractMin() {
    if (this.heap.length === 0) return 0;

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }

    return min;
  }

  sinkDown(index) {
    const len = this.heap.length;
    const value = this.heap[index];

    while (1) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let swap = null;

      if (leftIndex < len && (
        Math.abs(this.heap[leftIndex]) < Math.abs(value) ||
        (Math.abs(this.heap[leftIndex]) === Math.abs(value) && this.heap[leftIndex] < value)
      ))
        swap = leftIndex;

      if (rightIndex < len && (
        swap === null ? (
          Math.abs(this.heap[rightIndex]) < Math.abs(value) ||
          (Math.abs(this.heap[rightIndex]) === Math.abs(value) && this.heap[rightIndex] < value)
        ) : (
          Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[swap]) ||
          (Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[swap]) && this.heap[rightIndex] < this.heap[swap])
        )))
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
const heap = new MinHeap();
let result = [];

for (let i = 1; i <= N; i++) {
  const x = input[i];
  if (x === 0) {
    result.push(heap.extractMin());
  } else {
    heap.insert(x);
  }
}

console.log(result.join('\n'));