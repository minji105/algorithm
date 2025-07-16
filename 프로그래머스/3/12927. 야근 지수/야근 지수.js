class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(v) {
        this.heap.push(v);
        
        let i = this.heap.length - 1;
        
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    
    pop() {
        const max = this.heap[0];
        
        if (this.heap.length > 0) {
            this.heap[0] = this.heap.pop();
            
            let i = 0;
            let len = this.heap.length;
            
            while (1) {
                let left = i * 2 + 1;
                let right = i * 2 + 2;
                let max = i;
                
                if (left < len && this.heap[left] > this.heap[max]) {
                    max = left;
                }
                if (right < len && this.heap[right] > this.heap[max]) {
                    max = right;
                }
                
                if (max === i) break;
                [this.heap[max], this.heap[i]] = [this.heap[i], this.heap[max]];
                i = max;
            }
        }
        
        return max;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

function solution(n, works) {
    const heap = new MaxHeap();
    
    for (const work of works) {
        heap.push(work);
    }
    
    while (n-- > 0 && !heap.isEmpty()) {
        let max = heap.pop();
        
        if (max > 0) {
            heap.push(--max);
        }
    }
    
    return heap.heap.reduce((a, c) => a + c ** 2, 0);
}