function solution(s, skip, index) {
    let alp = [...'abcdefghijklmnopqrstuvwxyz'].filter(c => !skip.includes(c));
    return [...s].map(v => alp[(alp.indexOf(v) + index) % alp.length]).join('');
}