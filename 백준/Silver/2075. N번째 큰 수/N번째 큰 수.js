const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

      if (parent <= inserted) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = inserted;
  }

  extractMin() {
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
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let swap = null;

      if (leftIndex < len && this.heap[leftIndex] < value)
        swap = leftIndex;

      if (rightIndex < len &&
        this.heap[rightIndex] < (swap === null ? value : this.heap[swap])) {
        swap = rightIndex;
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = value;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

const heap = new MinHeap();
let N = -1;
let n;

rl.on('line', (line) => {
  if (N === -1) {
    N = parseInt(line);
    n = N;
    return;
  }
  line.split(' ').forEach((value) => {
    const num = parseInt(value);
    if (heap.size() < N) {
      heap.insert(num);
    } else if (num > heap.peek()) {
      heap.extractMin();
      heap.insert(num);
    }
  });
  N--;
  if (N === 0) rl.close();
}).on("close", function () {
  console.log(heap.peek());
  process.exit();
});