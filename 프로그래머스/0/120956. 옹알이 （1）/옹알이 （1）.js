function solution(babbling) {
    const canSpeak = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    for (let word of babbling) {
        for (let sound of canSpeak) {       
            word = word.split(sound).join(' ');
        }
        if (word.trim() === "") result++;
    }
    
    return result;
}