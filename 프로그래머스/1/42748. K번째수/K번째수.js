function solution(array, commands) {
    return commands.map(v => {
        return array.filter((_, aIndex) => aIndex >= v[0] - 1 && aIndex < v[1])
                    .sort((a, b) => a - b)[v[2] - 1]
    })
}