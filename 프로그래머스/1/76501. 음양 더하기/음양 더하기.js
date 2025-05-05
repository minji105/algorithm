function solution(absolutes, signs) {
    return absolutes.map((v, i) => signs[i] ? v : -1 * v)
                    .reduce((a, c) => a + c, 0);
}