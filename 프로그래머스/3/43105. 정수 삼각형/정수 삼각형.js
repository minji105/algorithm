function solution(triangle) {
    const dp = [...triangle];
    
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] += dp[i - 1][0];
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j] || 0);
        }
    }
    
    console.log(dp)
    return Math.max(...dp[dp.length - 1])
}