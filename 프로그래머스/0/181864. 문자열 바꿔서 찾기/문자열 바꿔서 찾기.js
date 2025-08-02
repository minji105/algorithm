function solution(myString, pat) {
    myString = myString.split('').map(v => v === 'A' ? 'B' : 'A').join('');
    return myString.includes(pat) ? 1 : 0;
}