import java.io.*;
import java.util.*;

public class Main {
    static class Node {
        int value;
        ArrayList<Integer> neighbors;

        Node(int value) {
            this.value = value;
            this.neighbors = new ArrayList<>();
        }

        void addNeighbors(int neighbor) {
            this.neighbors.add(neighbor);
            Collections.sort(this.neighbors);
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuffer sb = new StringBuffer();

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());

        Node[] nodes = new Node[N + 1];
        for (int i = 0; i <= N; i++) {
            nodes[i] = new Node(i);
        }

        boolean[] visitedB = new boolean[N + 1];
        boolean[] visitedD = new boolean[N + 1];

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            nodes[a].addNeighbors(b);
            nodes[b].addNeighbors(a);
        }

        sb.append(dfs(nodes[V], nodes, visitedD)).append('\n').append(bfs(nodes[V], nodes, visitedB));

        bw.write(sb.toString());

        bw.flush();
        br.close();
        bw.close();
    }

    private static StringBuilder bfs(Node start, Node[] nodes, boolean[] visited) {
        StringBuilder sb = new StringBuilder();

        Queue<Node> q = new LinkedList<>();

        q.offer(start);
        visited[start.value] = true;
        // sb.append(start.value).append(' ');

        while (!q.isEmpty()) {
            Node nodeIndex = q.poll();
            sb.append(nodeIndex.value).append(' ');

            for (int neighbor : nodeIndex.neighbors) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    // sb.append(neighbor).append(' ');
                    q.offer(nodes[neighbor]);
                }
            }
        }

        return sb;
    }

    private static StringBuilder dfs(Node start, Node[] nodes, boolean[] visited) {
        StringBuilder sb = new StringBuilder();

        Stack<Node> s = new Stack<>();

        s.push(start);

        while (!s.isEmpty()) {
            Node nodeIndex = s.pop();

            if (!visited[nodeIndex.value]) {
                visited[nodeIndex.value] = true;
                sb.append(nodeIndex.value).append(' ');

                for (int i = nodeIndex.neighbors.size() - 1; i >= 0; i--) {
                    int neighbor = nodeIndex.neighbors.get(i);
                    if (!visited[neighbor]) {
                        s.push(nodes[neighbor]);
                    }
                }
            }
        }

        return sb;
    }
}