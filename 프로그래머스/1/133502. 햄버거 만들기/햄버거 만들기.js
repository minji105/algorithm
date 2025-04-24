function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    ingredient.forEach(v => {
        stack.push(v);
        let len = stack.length;
        
        if (len >= 4 && 
            stack[len - 4] === 1 &&
            stack[len - 3] === 2 &&
            stack[len - 2] === 3 &&
            stack[len - 1] === 1
           ) {
            stack.splice(-4, 4);
            count++;
        }
    })
    return count;
}
                       
