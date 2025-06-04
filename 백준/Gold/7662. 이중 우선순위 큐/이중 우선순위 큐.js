const readline = require("readline");

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
  sinkDown(i) {
    const len = this.heap.length;
    const value = this.heap[i];

    while (1) {
      let leftIndex = i * 2 + 1;
      let rightIndex = i * 2 + 2;
      let swap = null;

      if (leftIndex < len && this.heap[leftIndex] < value) {
        swap = leftIndex;
      }
      if (rightIndex < len && this.heap[rightIndex] < (swap === null ? value : this.heap[leftIndex])) {
        swap = rightIndex;
      }

      if (swap === null) break;

      this.heap[i] = this.heap[swap];
      i = swap;
    }
    this.heap[i] = value;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

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
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }

    return max;
  }
  sinkDown(i) {
    const len = this.heap.length;
    const value = this.heap[i];

    while (1) {
      let leftIndex = i * 2 + 1;
      let rightIndex = i * 2 + 2;
      let swap = null;

      if (leftIndex < len && this.heap[leftIndex] > value) {
        swap = leftIndex;
      }
      if (rightIndex < len && this.heap[rightIndex] > (swap === null ? value : this.heap[leftIndex])) {
        swap = rightIndex;
      }

      if (swap === null) break;

      this.heap[i] = this.heap[swap];
      i = swap;
    }
    this.heap[i] = value;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

function cleanHeap(heap, map, isMin) {
  while (heap.size() > 0) {
    const top = heap.peek();
    if (map[top] && map[top] > 0) break;
    isMin ? heap.extractMin() : heap.extractMax();
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T = null;
let k = 0;
let state = 'readT';

let minHeap, maxHeap, map;
let commandCount = 0;
let output = [];

rl.on('line', (line) => {
  if (state === 'readT') {
    T = Number(line.trim());
    state = 'readK';
  } else if (state === 'readK') {
    k = Number(line.trim());
    minHeap = new MinHeap();
    maxHeap = new MaxHeap();
    map = {};
    commandCount = 0;
    state = 'processCommands';
  } else if (state === 'processCommands') {
    const [op, n] = line.trim().split(' ');
    const num = Number(n);

    if (op === 'I') {
      minHeap.insert(num);
      maxHeap.insert(num);
      map[num] = (map[num] || 0) + 1;
    } else {
      if (num === -1) {
        cleanHeap(minHeap, map, true);
        if (minHeap.size()) {
          const minVal = minHeap.extractMin();
          map[minVal]--;
        }
      } else {
        cleanHeap(maxHeap, map, false);
        if (maxHeap.size()) {
          const maxVal = maxHeap.extractMax();
          map[maxVal]--;
        }
      }
    }

    commandCount++;
    if (commandCount === k) {
      cleanHeap(minHeap, map, true);
      cleanHeap(maxHeap, map, false);

      if (minHeap.size() === 0 || maxHeap.size() === 0) {
        output.push('EMPTY');
      } else {
        output.push(`${maxHeap.peek()} ${minHeap.peek()}`);
      }

      T--;
      if (T === 0) {
        console.log(output.join('\n'));
        rl.close();
      } else {
        state = 'readK';
      }
    }
  }
});