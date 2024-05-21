import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/mst-and-sp/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1>汇总</X.H1>
            <X.Table>
                <tr>
                    <th>求解问题</th>
                    <th>算法名称</th>
                    <th>时间复杂度</th>
                </tr>
                <tr>
                    <td>最小生成树</td>
                    <td>Kruskal</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
                <tr>
                    <td>最小生成树</td>
                    <td>朴素Prim</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
                <tr>
                    <td>最小生成树</td>
                    <td>堆优化Prim</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
                <tr>
                    <td>单源最短路</td>
                    <td>Bellman-Ford</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
                <tr>
                    <td>单源最短路</td>
                    <td>Dijkstra</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
                <tr>
                    <td>全源最短路</td>
                    <td>Floyd</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
                <tr>
                    <td>全源最短路</td>
                    <td>Johnson</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                </tr>
            </X.Table>
            <X.P noMarginBottom>注：</X.P>
            <X.Uli>本文用$V$表示顶点数，$E$表示边数。</X.Uli>
            <X.H1>最小生成树</X.H1>
            <X.P noMarginBottom>最小生成树部分会分别给出可以提交到以下两道题目的代码：</X.P>
            <X.Uli>@洛谷 - P3366【模板】最小生成树[https://www.luogu.com.cn/problem/P3366]@</X.Uli>
            <X.Uli>
                @力扣 -
                1584.连接所有点的最小费用[https://leetcode.cn/problems/min-cost-to-connect-all-points/description/]@
            </X.Uli>
            <X.H2>Kruskal</X.H2>
            <X.P>
                将所有边按权值排序，然后从小到大考虑将边加入最小生成树，如果这条边加入后会形成环，就舍弃之。使用并查集判断是否会成环。
            </X.P>
            {/* <X.P>测试结果：洛谷通过`2`/`5`；力扣通过`11`/`21`。</X.P>
            <X.P>测试结果：洛谷AC/`342ms`；力扣AC/`136ms`。</X.P> */}
            <X.P>洛谷AC/`342ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 5005
                #define M 200005
                #include <iostream>
                #include <algorithm>
                using namespace std;
                int n,m,ne,ans,cnt;
                struct EDGE{
                    int u,v;
                    int w;
                    friend bool operator <(EDGE a,EDGE b)
                    {
                        return a.w<b.w; 
                    }
                }edge[M];
                void addEdge(int u,int v,int w)
                {
                    edge[ne].u=u;
                    edge[ne].v=v;
                    edge[ne].w=w;
                    ne++;
                    return;
                }

                int f[N];
                int find(int x)
                {
                    return (f[x]==x)?x:(f[x]=find(f[x]));
                }
                void uni(int x,int y)
                {
                    f[find(x)]=find(y);
                    return; 
                }
                bool connected(int x,int y)
                {
                    return find(x)==find(y);
                }

                int main()
                {
                    cin>>n>>m;
                    for(int i=0;i<n;i++) f[i]=i;//初始化并查集 
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        addEdge(u-1,v-1,w);//输入是从1计数的 
                    }
                    sort(edge,edge+m);//对边排序 
                    for(int i=0;i<m;i++)
                    {
                        int u=edge[i].u,v=edge[i].v;
                        if(!connected(u,v))//不成环就加入 
                        {
                            uni(u,v);
                            cnt++;
                            ans+=edge[i].w;//不成环就加入 
                        }
                    }
                    //题目让判断图不连通的情况，因此检查得到的边数是否为顶点数-1 
                    if(cnt==n-1) cout<<ans<<endl;
                    else cout<<"orz"<<endl;
                    return 0;
                }
                `}
            />
            <X.P>力扣AC/`1057ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 1005
                #define M 1000005
                class Solution {
                public:
                    int ne,ans;
                    struct EDGE{
                        int u,v;
                        int w;
                        friend bool operator <(EDGE a,EDGE b)
                        {
                            return a.w<b.w; 
                        }
                    }edge[M];
                    void addEdge(int u,int v,int w)
                    {
                        edge[ne].u=u;
                        edge[ne].v=v;
                        edge[ne].w=w;
                        ne++;
                        return;
                    }

                    int f[N];
                    int find(int x){return (f[x]==x)?x:(f[x]=find(f[x]));}
                    void uni(int x,int y){f[find(x)]=find(y);return;}
                    bool connected(int x,int y){return find(x)==find(y);}

                    int minCostConnectPoints(vector<vector<int>>& points) {
                        for(int i=0;i<points.size();i++)
                        {
                            f[i]=i;//初始化并查集
                            for(int j=i+1;j<points.size();j++)
                            {
                                int w=abs(points[i][0]-points[j][0])+abs(points[i][1]-points[j][1]);
                                cout<<w<<endl;
                                addEdge(i,j,w);
                            }
                        }
                        sort(edge,edge+ne);
                        for(int i=0;i<ne;i++)
                        {
                            int u=edge[i].u,v=edge[i].v;
                            if(!connected(u,v))//不成环就加入 
                            {
                                uni(u,v);
                                ans+=edge[i].w;//不成环就加入 
                            }
                        }
                        return ans;
                    }
                };
                `}
            />
            <X.H2>Prim</X.H2>
            <X.P>
                Prim算法维护一个集合$T$，开始时$T$包含一个起点，结束时包含所有顶点。Prim算法的每一步在连接$T$和$T$之外的点的边中选择一条最短的边，---
                将其加入最小生成树，并将这条边连接的另一个顶点加入$T$中，然后更新其他点到$T$的距离。
            </X.P>
            {/* <X.P>在编程实现时，维护一个数组$d$，$d[i]$表示$i$到集合$T$的最短距离，初始时$d[0]=0$。</X.P> */}
            {/* auto & e */}
            {/* u,v一起出现才用u,否则就用i */}
            <X.P>
                Prim算法的思想和Dijkstra算法很像，不同的是Prim算法是找到一个点加入集合，而Dijkstra算法将点加入集合后还要去松弛其他点。
            </X.P>
            <X.H1>单源最短路</X.H1>
            <X.P noMarginBottom>
                单源最短路部分会给出可以提交到以下两道题目的代码（两道题目只是数据不同，代码是一样的）：
            </X.P>
            <X.Uli>@洛谷 - P3371【模板】单源最短路径（弱化版）[https://www.luogu.com.cn/problem/P3371]@</X.Uli>
            <X.Uli>@洛谷 - P4779【模板】单源最短路径（标准版）[https://www.luogu.com.cn/problem/P4779]@</X.Uli>
            <X.P noMarginBottom>对于Bellman-Ford算法，会给出判负环测试题目的代码：</X.P>
            <X.Uli>@洛谷 - P3385【模板】负环[https://www.luogu.com.cn/problem/P3385]@</X.Uli>
            <X.H2>Bellman-Ford</X.H2>
            <X.P>
                Bellman-Ford算法思想非常简单，由于源点到任意点的最短路径最多包含$V-1$条边，因此对所有边进行$V-1$次松弛操作，一定能得到最短路。---
                $V-1$次循环后，如果还能存在能继续松弛的边，则说明存在负环。
            </X.P>
            <X.H2>Dijkstra</X.H2>
            <X.H1>全源最短路</X.H1>
            <X.P noMarginBottom>全源最短路部分会给出可以提交到以下题目的代码：</X.P>
            <X.Uli>@洛谷 - P5905【模板】全源最短路[https://www.luogu.com.cn/problem/P5905]@</X.Uli>
            <X.H2>Floyd</X.H2>
            <X.P>
                Floyd算法基于动态规划，维护图`g[i][j]`，最外层用`k`次循环更新，每次循环`g[i][j]`的含义是：\n
                从`i`到`j`，所有中间结点取自`1`~`k`的最短路。
            </X.P>
            <X.H2>Johnson</X.H2>
            <X.P>一个朴素的想法是对每个顶点都跑一次Dijkstra算法，但Dijkstra算法不能处理负权边。</X.P>
        </>
    );
}
