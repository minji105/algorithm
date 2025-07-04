import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());

        while (T-- > 0) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            int M = Integer.parseInt(st.nextToken());

            ArrayList<Integer>[] planes = new ArrayList[N + 1];
            for (int i = 0; i <= N; i++) {
                planes[i] = new ArrayList<>();
            }

            boolean[] visited = new boolean[N + 1];

            for (int i = 0; i < M; i++) {
                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                planes[a].add(b);
                planes[b].add(a); // 양방향 연결
            }

            bw.write(String.valueOf(bfs(1, planes, visited)) + '\n');
        }

        bw.flush();
        br.close();
        bw.close();
    }

    private static int bfs(int start, ArrayList<Integer>[] planes, boolean[] visited) {
        int count = 0;

        Queue<Integer> q = new LinkedList<Integer>();

        q.offer(start);
        visited[start] = true;

        while (!q.isEmpty()) {
            int nodeIndex = q.poll();

            for (int i = 0; i < planes[nodeIndex].size(); i++) {
                int temp = planes[nodeIndex].get(i);

                if (!visited[temp]) {
                    visited[temp] = true;
                    count++;
                    q.offer(temp);
                }
            }
        }

        return count;
    }
}