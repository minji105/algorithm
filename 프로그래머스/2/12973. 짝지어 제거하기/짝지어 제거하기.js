function solution(s)
{
    s = s.split('');
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        }
    }
    
    return stack.length ? 0 : 1;
    
    /*
    while(s.length > 0) {
        const org = s;
        s = s.replace(/(.)\1/g, '');
        
        if (s === org) return 0;
    }

    return 1;
    */
}