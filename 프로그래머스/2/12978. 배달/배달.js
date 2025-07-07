function solution(N, road, K) {
    const distance = Array(N + 1).fill(Infinity);
    distance[1] = 0;
    
    const graph = Array.from({ length: N + 1 }, () => []);
    
    // 양방향
    for (const [a, b, cost] of road) {
        graph[a].push([b, cost]);
        graph[b].push([a, cost]);
    }
    console.log(graph);
    
    const dijkstra = (index, sum) => {
        for (const [next, cost] of graph[index]) {
            const total = sum + cost;
            
            if (total < distance[next]) {
                distance[next] = total;
                dijkstra(next, total);
            }
        }
    }
    dijkstra(1, 0);
    
    return distance.filter(v => v <= K).length;
}