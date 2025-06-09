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
  while (heap.size()) {
    const top = heap.peek();
    if (map[top]) break;
    isMin ? heap.extractMin() : heap.extractMax();
  }
}

function solution(operations) {
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    const map = {};
    
    for (let i = 0; i < operations.length; i++) {
        const [op, num] = operations[i].split(' ').map((v, i) => i === 1 ? Number(v) : v);

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
    }

    let min = null, max = null;
    
    for (const key in map) {
        if (map[key] > 0) {
            const num = Number(key);
            if (min === null || num < min) min = num;
            if (max === null || num > max) max = num;
        }
    }
    
    return min ? [max, min] : [0, 0];
}

