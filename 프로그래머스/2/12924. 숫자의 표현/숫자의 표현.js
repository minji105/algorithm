function solution(n) {
    let count = 1;
    let start = 1, end = 1;
    let sum = 1;
    
    while (start <= n / 2) {
        if (sum < n) {
            end++;
            sum += end;
        } else if (sum > n) {
            sum -= start;
            start++;
        } else {
            count++;
            sum -= start;
            start++;
        }
    }
    
    return count;
    
    /* 
    // 시간 초과
    const len = Math.ceil(n / 2);
    let count = 1;
    
    for (let i = 1; i < len; i++) {
        let sum = i;
        for (let j = i + 1; j <= len; j++){
            sum += j;
            if (sum === n) {
                count ++;
                break;
            } else if (sum > n) 
                break;
        }
    }
    
    return count; */
}