function solution(n) {
    const countOne = (num) => {
        return num.toString(2).split('1').length - 1;
    }
    
    const one = countOne(n);
    let result = n + 1;
    
    while (countOne(result) !== one) {
        result++;
    }
    
    return result;
}