function solution(n)
{
    return String(n).split('').reduce((a, c) => a + c/1, 0);
}