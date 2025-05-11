function solution(prices) {
    const len = prices.length;
    prices[len - 1] = 0;
    
    // 인덱스 0부터 len-1까지 하나씩 선택
    // for 인덱스+1 부터 마지막까지 순회 -> count 증가. 인덱스 값보다 작은 수가 나오면 count 리턴
    for (let index = 0; index < len - 1; index++) {
        let count = 0;
        
        for (let k = index + 1; k < len; k++) {
            count++;
            if (prices[index] > prices[k]) {
                break;
            }
        }
        prices[index] = count;
    }
    
    return prices;
}