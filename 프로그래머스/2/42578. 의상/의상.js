function solution(input) {
    let clothes = {};
    
    for(let i = 0; i<input.length; i++) {
        clothes[input[i][1]] = clothes[input[i][1]] ? clothes[input[i][1]] + 1 : 1;
    }

    return Object.values(clothes).reduce((a, c) => (c + 1) * a, 1) - 1;
}