function solution(answers) {
    const arr = [
        [[1, 2, 3, 4, 5], 0, 1],
        [[2, 1, 2, 3, 2, 4, 2, 5], 0, 2],
        [[3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 0, 3]
    ];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === arr[0][0][i % arr[0][0].length]) arr[0][1]++;
        if (answers[i] === arr[1][0][i % arr[1][0].length]) arr[1][1]++;
        if (answers[i] === arr[2][0][i % arr[2][0].length]) arr[2][1]++;
    }
    
    arr.sort((a, b) => b[1] - a[1]);
    return arr.filter(x => x[1] === arr[0][1]).map(x => x[2]);
}