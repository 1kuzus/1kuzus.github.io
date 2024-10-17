import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24b/mst-and-sp/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>汇总</X.H1>
            <X.Table
                fromText={`
                求解问题|算法名称|时间复杂度
                最小生成树|Kruskal|$E\\log E$
                最小生成树|Prim（朴素）|$V^2$
                最小生成树|Prim（优先队列）|$E\\log E$
                单源最短路|Bellman-Ford|$VE$
                单源最短路|Dijkstra（优先队列）|$E\\log E$
                全源最短路|Floyd|$V^3$
                全源最短路|Johnson|$VE\\log E$
                `}
            />
            <X.Uli>本文用$V$表示顶点数，$E$表示边数。</X.Uli>
            <X.Uli>
                <X.P>有的文章写优先队列实现的Dijkstra算法时间复杂度为$E\log V$，可以作如下理解：</X.P>
                <X.Oli>数学角度，最坏情况对于稠密图仍有$E$接近$V^2$，$O(E\log E)=O(E\log V^2)=O(2E\log V)=O(E\log V)$。</X.Oli>
                <X.Oli>编程实现角度，对于本文给出的代码，优先队列中存在节点编号相同，但$d$值不同的元素；也就是说使用STL的优先队列会有*节点编号重复*的元素，队列的长度可能达到$E$级别，因此单次操作也是$O(\log E)$的。如果优先队列使用其他实现方式，将元素总数维护在$V$级别，对松弛操作修改已有节点，而不是插入新节点，此时单次操作时间复杂度就是$O(\log V)$。</X.Oli>
            </X.Uli>
            <X.Uli>对于Prim算法时间复杂度的争论是类似的。</X.Uli>
            <X.H1>最小生成树</X.H1>
            <X.P>最小生成树部分会分别给出可以提交到以下两道题目的代码：</X.P>
            <X.Uli>@洛谷 - P3366【模板】最小生成树[https://www.luogu.com.cn/problem/P3366]@</X.Uli>
            <X.Uli>@力扣 - 1584.连接所有点的最小费用[https://leetcode.cn/problems/min-cost-to-connect-all-points/description/]@</X.Uli>
            <X.H2>Kruskal</X.H2>
            <X.P>Kruskal算法将所有边按权值排序，然后从小到大考虑将边加入最小生成树，如果这条边加入后会形成环，就舍弃之。使用并查集判断是否会成环。</X.P>
            <X.P>洛谷AC/`342ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <algorithm>
                #define N 5005
                #define M 200005
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
            <X.P>力扣AC/`315ms`，代码如下：</X.P>
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
                        int n=points.size();
                        for(int i=0;i<n;i++)
                        {
                            f[i]=i;//初始化并查集
                            for(int j=i+1;j<n;j++)
                            {
                                int w=abs(points[i][0]-points[j][0])+abs(points[i][1]-points[j][1]);
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
            <X.H2>Prim（朴素）</X.H2>
            <X.P>Prim算法维护一个集合$T$，开始时$T$包含一个起点，结束时包含所有顶点。Prim算法的每一步在连接$T$和$T$之外的点的边中选择一条最短的边，将其加入最小生成树，并将这条边连接的另一个顶点加入$T$中，然后更新其他点到$T$的距离。</X.P>
            <X.P>洛谷AC/`812ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #define N 5005
                #define INF 2147483647
                using namespace std;
                int n,m,ans,cnt,d[N];
                bool vis[N];//顶点是否在集合T中，把0作为起点
                int g[N][N];

                int main()
                {
                    cin>>n>>m;
                    for(int i=1;i<n;i++) d[i]=INF;
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<n;j++)
                        {
                            if(i!=j) g[i][j]=INF;
                        }
                    }
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        if(w<g[u-1][v-1])//可能有重边
                        {
                            g[u-1][v-1]=w;
                            g[v-1][u-1]=w;
                        }
                    }
                    for(int t=0;t<n;t++)
                    {
                        //选择不在T中的顶点中，d[u]最小的顶点u
                        int u=0,minval=INF;
                        for(int i=0;i<n;i++)
                        {
                            if(vis[i]) continue;
                            if(d[i]<minval)	minval=d[i],u=i;
                        }
                        if(minval==INF) break;//说明不连通
                        vis[u]=true;
                        cnt++;
                        ans+=minval;
                        for(int v=0;v<n;v++)
                        {
                            if(vis[v]) continue;
                            if(g[u][v]<d[v]) d[v]=g[u][v];
                        }
                    }
                    //题目让判断图不连通的情况，因此检查得到的边数是否为顶点数-1
                    if(cnt==n) cout<<ans<<endl;
                    else cout<<"orz"<<endl;
                    return 0;
                }
                `}
            />
            <X.P>力扣AC/`44ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 1005
                #define INF 2147483647
                class Solution {
                public:
                    int ans,cnt,d[N];
                    bool vis[N];
                    int g[N][N];

                    int minCostConnectPoints(vector<vector<int>>& points) {
                        int n=points.size();
                        for(int i=1;i<n;i++) d[i]=INF;
                        for(int i=0;i<n;i++)
                        {
                            for(int j=0;j<n;j++)
                            {
                                if(i!=j) g[i][j]=INF;
                            }
                        }
                        for(int i=0;i<n;i++)
                        {
                            for(int j=i+1;j<n;j++)
                            {
                                int w=abs(points[i][0]-points[j][0])+abs(points[i][1]-points[j][1]);
                                g[i][j]=w;
                                g[j][i]=w;
                            }
                        }
                        for(int t=0;t<n;t++)
                        {
                            int u=0,minval=INF;
                            for(int i=0;i<n;i++)
                            {
                                if(vis[i]) continue;
                                if(d[i]<minval)	minval=d[i],u=i;
                            }
                            vis[u]=true;
                            cnt++;
                            ans+=minval;
                            for(int v=0;v<n;v++)
                            {
                                if(vis[v]) continue;
                                if(g[u][v]<d[v]) d[v]=g[u][v];
                            }
                        }
                        return ans;
                    }
                };
                `}
            />
            <X.H2>Prim（优先队列）</X.H2>
            <X.P>洛谷AC/`346ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <queue>
                #define N 5005
                #define INF 2147483647
                using namespace std;
                int n,m,ans,cnt,d[N];
                bool vis[N];//顶点是否在集合T中，把0作为起点
                struct EDGE{
                    int to,w;
                };
                vector<EDGE> g[N];
                void addEdge(int u,int v,int w)
                {
                    g[u].emplace_back((EDGE){v,w});
                    return;
                }
                struct NODE{
                    int id,d;
                    friend bool operator <(NODE a,NODE b)
                    {
                        return a.d>b.d;
                    }
                };
                priority_queue<NODE> q;

                int main()
                {
                    cin>>n>>m;
                    for(int i=1;i<n;i++) d[i]=INF;
                    q.push((NODE){0,0});
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        addEdge(u-1,v-1,w);
                        addEdge(v-1,u-1,w);
                    }
                    while(!q.empty())
                    {
                        int u=q.top().id;
                        q.pop();
                        if(vis[u]) continue;
                        vis[u]=true;
                        cnt++;
                        ans+=d[u];
                        for(auto e:g[u])
                        {
                            int v=e.to;
                            if(d[v]>e.w)
                            {
                                d[v]=e.w;
                                q.push((NODE){v,d[v]});
                            }
                        }
                    }
                    //题目让判断图不连通的情况，因此检查得到的边数是否为顶点数-1
                    if(cnt==n) cout<<ans<<endl;
                    else cout<<"orz"<<endl;
                    return 0;
                }
                `}
            />
            <X.P>力扣AC/`113ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 1005
                #define INF 2147483647
                class Solution {
                public:
                    int ans,cnt,d[N];
                    bool vis[N];
                    struct EDGE{
                        int to,w;
                    };
                    vector<EDGE> g[N];
                    void addEdge(int u,int v,int w)
                    {
                        g[u].emplace_back((EDGE){v,w});
                        return;
                    }
                    struct NODE{
                        int id,d;
                        friend bool operator <(NODE a,NODE b)
                        {
                            return a.d>b.d;
                        }
                    };
                    priority_queue<NODE> q;

                    int minCostConnectPoints(vector<vector<int>>& points) {
                        int n=points.size();
                        for(int i=1;i<n;i++) d[i]=INF;
                        q.push((NODE){0,0});
                        for(int i=0;i<n;i++)
                        {
                            for(int j=i+1;j<n;j++)
                            {
                                int w=abs(points[i][0]-points[j][0])+abs(points[i][1]-points[j][1]);
                                addEdge(i,j,w);
                                addEdge(j,i,w);
                            }
                        }
                        while(!q.empty())
                        {
                            int u=q.top().id;
                            q.pop();
                            if(vis[u]) continue;
                            vis[u]=true;
                            cnt++;
                            ans+=d[u];
                            for(auto e:g[u])
                            {
                                int v=e.to;
                                if(d[v]>e.w)
                                {
                                    d[v]=e.w;
                                    q.push((NODE){v,d[v]});
                                }
                            }
                        }
                        return ans;
                    }
                };
                `}
            />
            <X.H2>分析</X.H2>
            <X.P>洛谷题目的数据范围$N \leq 5000, M \leq 2 \times 10^5$，算是一张稀疏图，因此优先队列优化的Prim效率更优；力扣题目是一张完全图，此时朴素Prim反而效率更高。</X.P>
            <X.H1>单源最短路</X.H1>
            <X.P>单源最短路部分会给出可以提交到以下两道题目的代码（两道题目只是数据不同，代码是一样的）：</X.P>
            <X.Uli>@洛谷 - P3371【模板】单源最短路径（弱化版）[https://www.luogu.com.cn/problem/P3371]@</X.Uli>
            <X.Uli>@洛谷 - P4779【模板】单源最短路径（标准版）[https://www.luogu.com.cn/problem/P4779]@</X.Uli>
            <X.P>对于Bellman-Ford算法，会给出判负环测试题目的代码：</X.P>
            <X.Uli>@洛谷 - P3385【模板】负环[https://www.luogu.com.cn/problem/P3385]@</X.Uli>
            <X.H2>Bellman-Ford</X.H2>
            <X.P>Bellman-Ford算法思想非常简单，由于源点到任意点的最短路径最多包含$V-1$条边，因此对所有边进行$V-1$次松弛操作，一定能得到最短路。$V-1$次循环后，如果还能存在能继续松弛的边，则说明存在负环。</X.P>
            <X.P>洛谷弱化版通过`7`/`10`，标准版通过`0`/`6`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #define N 100005
                #define INF 2147483647
                using namespace std;
                int n,m,s,d[N];
                struct EDGE{
                    int to,w;
                };
                vector<EDGE> g[N];
                void addEdge(int u,int v,int w)
                {
                    g[u].emplace_back((EDGE){v,w});
                    return;
                }

                int main()
                {
                    cin>>n>>m>>s;
                    for(int i=0;i<n;i++) d[i]=INF;
                    d[s-1]=0;
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        addEdge(u-1,v-1,w);
                    }
                    //每次循环都对全图所有边进行一次松弛操作，一共执行n-1次循环
                    for(int t=0;t<n-1;t++)
                    {
                        //下面两重循环遍历了m条边
                        for(int u=0;u<n;u++)
                        {
                            for(EDGE e:g[u])
                            {
                                int v=e.to;
                                if(d[v]-e.w>d[u])//注意加法可能溢出
                                {
                                    d[v]=d[u]+e.w;
                                }
                            }
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        cout<<d[i]<<' ';
                    }
                    cout<<endl;
                    return 0;
                }
                `}
            />
            <X.H2>Bellman-Ford（判负环）</X.H2>
            <X.P>洛谷AC/`703ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #define N 2005
                #define INF 1000000009
                using namespace std;
                int T,n,m,d[N];
                struct EDGE{
                    int to,w;
                };
                vector<EDGE> g[N];
                void addEdge(int u,int v,int w)
                {
                    g[u].emplace_back((EDGE){v,w});
                    return;
                }

                int main()
                {
                    cin>>T;
                    while(T--)
                    {
                        cin>>n>>m;
                        for(int i=0;i<n;i++) g[i].clear();
                        for(int i=0;i<n;i++) d[i]=INF;
                        d[0]=0;
                        for(int i=0;i<m;i++)
                        {
                            int u,v,w;
                            cin>>u>>v>>w;
                            addEdge(u-1,v-1,w);
                            if(w>=0) addEdge(v-1,u-1,w);//题目要求
                        }
                        //每次循环都对全图所有边进行一次松弛操作，一共执行n-1次循环
                        for(int i=0;i<n-1;i++)
                        {
                            //下面两重循环遍历了m条边
                            for(int u=0;u<n;u++)
                            {
                                for(EDGE e:g[u])
                                {
                                    int v=e.to;
                                    if(d[v]>d[u]+e.w)
                                    {
                                        d[v]=d[u]+e.w;
                                    }
                                }
                            }
                        }
                        bool flag=false;
                        for(int u=0;u<n;u++)
                        {
                            //题目要求判断是否存在从顶点1出发能到达的负环，因此d值过大的顶点视为不与1联通
                            if(d[u]>1e8) continue;
                            for(EDGE e:g[u])
                            {
                                int v=e.to;
                                //如果n-1轮松弛后，仍然有可以松弛的边，说明有负环
                                if(d[v]-e.w>d[u])
                                {
                                    flag=true;
                                }
                            }
                        }
                        cout<<(flag?"YES":"NO")<<endl;
                    }
                    return 0;
                }
                `}
            />
            <X.H2>Dijkstra（优先队列）</X.H2>
            <X.P>Dijkstra算法从源点开始，每次选择最短路估计距离最小的点进行松弛操作，并把这个点标记为已访问，直到所有点都被标记。</X.P>
            <X.P>注意Dijkstra维护的$d$与Prim维护的$d$的含义不同，Prim维护的是$T$之外的点到$T$的最短距离，$d$值一定是一条边的长度；而Dijkstra维护的是源点到顶点的“最短路径估计”，$d$值是一条路径的长度。</X.P>
            <X.P>洛谷弱化版AC/`963ms`，标准版AC/`667ms`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #include <queue>
                #define N 100005
                #define INF 2147483647
                using namespace std;
                int n,m,s,d[N];
                bool vis[N];
                struct EDGE{
                    int to,w;
                };
                vector<EDGE> g[N];
                void addEdge(int u,int v,int w)
                {
                    g[u].emplace_back((EDGE){v,w});
                    return;
                }
                struct NODE{
                    int id,d;
                    friend bool operator <(NODE a,NODE b)
                    {
                        return a.d>b.d;
                    }
                };
                priority_queue<NODE> q;

                int main()
                {
                    cin>>n>>m>>s;
                    for(int i=0;i<n;i++) d[i]=INF;
                    d[s-1]=0;
                    q.push((NODE){s-1,0});
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        addEdge(u-1,v-1,w);
                    }
                    while(!q.empty())
                    {
                        int u=q.top().id;
                        q.pop();
                        if(vis[u]) continue;
                        vis[u]=true;
                        for(auto e:g[u])
                        {
                            int v=e.to;
                            if(d[v]-e.w>d[u])
                            {
                                d[v]=d[u]+e.w;
                                q.push((NODE){v,d[v]});
                            }
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        cout<<d[i]<<' ';
                    }
                    cout<<endl;
                    return 0;
                }
                `}
            />
            <X.H1>全源最短路</X.H1>
            <X.P>全源最短路部分会给出可以提交到以下题目的代码：</X.P>
            <X.Uli>@洛谷 - P5905【模板】全源最短路[https://www.luogu.com.cn/problem/P5905]@</X.Uli>
            <X.H2>Floyd</X.H2>
            <X.P>Floyd算法维护图`g[i][j]`，最外层用`k`次循环更新，每次循环`g[i][j]`的含义是：\n从`i`到`j`，所有中间结点取自`1`~`k`的最短路。</X.P>
            <X.P>洛谷通过`7`/`12`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #define N 3005
                #define INF 1000000009
                using namespace std;
                int n,m;
                int g[N][N];

                int main()
                {
                    cin>>n>>m;
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<n;j++)
                        {
                            if(i!=j) g[i][j]=INF;
                        }
                    }
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        if(w<g[u-1][v-1]) g[u-1][v-1]=w;//可能存在重边
                    }
                    //每个循环k，g[i][j]表示从i到j，所有中间结点取自集合{0,1,...,k-1}的最短路
                    for(int k=0;k<n;k++)
                    {
                        for(int i=0;i<n;i++)
                        {
                            for(int j=0;j<n;j++)
                            {
                                if(g[i][j]>g[i][k]+g[k][j])
                                {
                                    g[i][j]=g[i][k]+g[k][j];
                                }
                            }
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        long long ans=0;
                        for(int j=0;j<n;j++)
                        {
                            int dis=g[i][j]>1e8?1e9:g[i][j];//题目要求不连通按1e9计算
                            ans+=(long long)(j+1)*dis;
                        }
                        cout<<ans<<endl;
                    }
                    return 0;
                }
                `}
            />
            <X.H2>Johnson</X.H2>
            <X.P>一个朴素的想法是对每个顶点都运行一次Dijkstra算法，但Dijkstra算法不能处理负权边。Johnson算法的思想是先把所有边权变为非负，然后就可以放心使用Dijkstra算法了。Johnson算法首先构造一个虚拟顶点，这个虚拟顶点通过一条权值为$0$的边与所有其他顶点都相连。然后，使用Bellman-Ford算法求出虚拟顶点到其他所有顶点的最短距离，这个距离称为“势函数”$h$，可以理解为取虚拟顶点为“零势能面”，其余顶点的势能就是虚拟顶点到其的最短路。</X.P>
            <X.P>接下来对每条边进行操作：对于连接节点$u$和$v$，权重为$w$的边，更新其权重为$w'=w+h(u)-h(v)$。然后对每个顶点运行一次Dijkstra算法。</X.P>
            <X.HighlightBlock>
                <X.P>严格的来说“势函数”应为$-h$。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="blue">
                <X.Uli>
                    <X.P>为什么新的$w'$可以保证非负？</X.P>
                    <X.P>由于势函数$h$的含义是最短路，考虑最短路的三角不等式，一定有$h(u)+w \geq h(v)$，移项即有$w' \geq 0$。</X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>为什么不能给每条边加上一个大正数来保证边权为正？</X.P>
                    <X.P>这样操作会导致对最短路的影响取决于*最短路经过的边数*。原图中经过较多边的最短路，可能会因为相比其他路径增长的更多，变为非最短路，导致结果错误。</X.P>
                </X.Uli>
            </X.HighlightBlock>
            <X.P>洛谷AC/`1.39s`，代码如下：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #include <queue>
                #define N 3005
                #define INF 1000000009
                using namespace std;
                int n,m;
                int h[N];//势函数
                struct EDGE{
                    int to,w;//边的终点和边权
                };
                vector<EDGE> g[N];
                void addEdge(int u,int v,int w)
                {
                    g[u].emplace_back((EDGE){v,w});
                    return;
                }
                struct NODE{
                    int id,d;
                    friend bool operator <(NODE a,NODE b)
                    {
                        return a.d>b.d;
                    }
                };

                bool BellmanFord()//求出势函数，同时返回是否存在负环
                {
                    //注意在这里n是加入了虚拟节点之后的
                    for(int t=0;t<n;t++)
                    {
                        for(int u=0;u<=n;u++)
                        {
                            for(auto e:g[u])
                            {
                                int v=e.to;
                                if(h[v]-e.w>h[u])
                                {
                                    h[v]=h[u]+e.w;
                                }
                            }
                        }
                    }
                    for(int u=0;u<=n;u++)
                    {
                        for(auto e:g[u])
                        {
                            int v=e.to;
                            if(h[v]-e.w>h[u])
                            {
                                return true;
                            }
                        }
                    }
                    return false;
                }

                long long Dijkstra(int s)
                {
                    priority_queue<NODE> q;
                    int d[N]={};
                    bool vis[N]={};
                    for(int i=0;i<n;i++) d[i]=INF;
                    d[s]=0;
                    q.push((NODE){s,0});
                    while(!q.empty())
                    {
                        int u=q.top().id;
                        q.pop();
                        if(vis[u]) continue;
                        vis[u]=true;
                        for(auto e:g[u])
                        {
                            int v=e.to;
                            if(d[v]-e.w>d[u])
                            {
                                d[v]=d[u]+e.w;
                                q.push((NODE){v,d[v]});
                            }
                        }
                    }
                    long long ans=0;
                    for(int i=0;i<n;i++)
                    {
                        int dis=d[i]+h[i]-h[s];
                        if(dis>1e8) dis=1e9;//题目要求不连通按1e9计算
                        ans+=(long long)(i+1)*dis;
                    }
                    return ans;
                }

                int main()
                {
                    cin>>n>>m;
                    for(int i=0;i<m;i++)
                    {
                        int u,v,w;
                        cin>>u>>v>>w;
                        addEdge(u-1,v-1,w);
                    }
                    //构造一个虚拟顶点n，其到所有顶点距离为0
                    for(int i=0;i<n;i++)
                    {
                        addEdge(n,i,0);
                    }
                    //一次BellmanFord求出势函数，并判断负环
                    for(int i=0;i<n;i++) h[i]=INF;
                    if(BellmanFord())
                    {
                        cout<<-1<<endl;
                        return 0;
                    }
                    //调整边权为非负，然后跑n次Dijkstra
                    for(int u=0;u<n;u++)
                    {
                        for(auto &e:g[u])
                        {
                            int v=e.to;
                            e.w=e.w+h[u]-h[v];
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        cout<<Dijkstra(i)<<endl;
                    }
                    return 0;
                }
                `}
            />
        </>
    );
}
