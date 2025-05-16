function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach(v => heap.insert(v));
    
    let count = 0;
    
    while (heap.size() >= 2 && heap.peek() < K) {
        const firstMin = heap.extractMin();
        const secondMin = heap.extractMin();
        
        heap.insert(firstMin + secondMin * 2);
        count++;
    }
    
    return heap.peek() >= K ? count : -1;
}

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
                this.heap[rightIndex] < (swap === null ? value : this.heap[leftIndex])) {
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