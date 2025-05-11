function solution(prices) {
    let stack = [];
    const len = prices.length;
    const result = Array(len).fill(0);
    
    for (let i = 0; i < len; i++) {
        // 현재 가격이 top 시점 가격보다 작으면 pop. 
        // 가격이 떨어지지 않은 기간 저장
        while (prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            result[top] = i - top;
        }
        stack.push(i);
    }
    
    while (stack.length) {
        const top = stack.pop();
        result[top] = len - 1 - top;
    }
    
    return result;
}