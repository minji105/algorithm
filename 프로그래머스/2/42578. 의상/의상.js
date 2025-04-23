function solution(input) {
    let clothes = {};
    
    for (let i of input) {
        clothes[i[1]] = clothes[i[1]] ? clothes[i[1]] + 1 : 1;
    }

    return Object.values(clothes).reduce((a, c) => (c + 1) * a, 1) - 1;
}