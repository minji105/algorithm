function solution(n) {
    let binArr = ('0' + n.toString(2)).split('').reverse();
    const one = binArr.filter(v => v === '1').length;
    
    while (1) {
        let index = 0;
        
        while (1) {
            if (binArr[index] === '0') {
                binArr[index] = '1';
                break;
            } else {
                binArr[index] = '0';
                index++;
            }
            if (index === binArr.length) {
                binArr.push('1');
                break;
            }
        }
        
        if (binArr.filter(v => v === '1').length === one) break;
    }
    
    return parseInt(binArr.reverse().join(''), 2);
}