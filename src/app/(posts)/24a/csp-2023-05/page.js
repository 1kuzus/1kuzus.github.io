import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/csp-2023-05/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>T1 重复局面</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <unordered_map>
                using namespace std;
                int n;
                unordered_map<string,int> m;
                int main()
                {
                    cin>>n;
                    for(int i=0;i<n;i++)
                    {
                        string s;
                        for(int j=0;j<8;j++)
                        {
                            string si;
                            cin>>si;
                            s+=si;
                        }
                        m[s]++;
                        cout<<m[s]<<endl;
                    }
                    return 0;
                }
                /*
                in:
                8
                ********
                ******pk
                *****r*p
                p*pQ****
                ********
                **b*B*PP
                ****qP**
                **R***K*
                ********
                ******pk
                *****r*p
                p*pQ****
                *b******
                ****B*PP
                ****qP**
                **R***K*
                ********
                ******pk
                *****r*p
                p*p*****
                *b**Q***
                ****B*PP
                ****qP**
                **R***K*
                ******k*
                ******p*
                *****r*p
                p*p*****
                *b**Q***
                ****B*PP
                ****qP**
                **R***K*
                ******k*
                ******p*
                *****r*p
                p*pQ****
                *b******
                ****B*PP
                ****qP**
                **R***K*
                ********
                ******pk
                *****r*p
                p*pQ****
                *b******
                ****B*PP
                ****qP**
                **R***K*
                ********
                ******pk
                *****r*p
                p*p*****
                *b**Q***
                ****B*PP
                ****qP**
                **R***K*
                ********
                ******pk
                ******rp
                p*p*****
                *b**Q***
                ****B*PP
                ****qP**
                **R***K*

                out:
                1
                1
                1
                1
                1
                2
                2
                1 
                */
                `}
            />
            <X.H1>T2 矩阵运算</X.H1>
            <X.P>矩阵乘积有结合律，不同的结合方式结果相同，但中间过程的时间复杂度不同。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #define LL long long
                using namespace std;
                int n,d;
                vector<LL> T(vector<LL> A,int m,int n)
                {
                    vector<LL> ans(n*m);
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<m;j++)
                        {
                            ans[i*m+j]=A[j*n+i];
                        }
                    }
                    return ans;
                }
                vector<LL> dot(vector<LL> A,vector<LL> W,int m/*列数*/)
                {
                    for(int i=0;i<W.size();i++)
                    {
                        for(int j=0;j<m;j++)
                        {
                            A[i*m+j]*=W[i];
                        }
                    }
                    return A;
                }
                vector<LL> matmul(vector<LL> A,vector<LL> B,int m,int n,int p)
                {
                    vector<LL> ans(m*p);
                    for(int i=0;i<m;i++)
                    {
                        for(int j=0;j<p;j++)
                        {
                            for(int k=0;k<n;k++)
                            {
                                ans[i*p+j]+=A[i*n+k]*B[k*p+j];
                            }
                        }
                    }
                    //复杂度 m*p*n 
                    return ans;
                }
                int main()
                {
                    cin>>n>>d;
                    vector<LL> Q(n*d),K(n*d),V(n*d),W(n);
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<d;j++)
                        {
                            cin>>Q[i*d+j];
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<d;j++)
                        {
                            cin>>K[i*d+j];
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<d;j++)
                        {
                            cin>>V[i*d+j];
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        cin>>W[i];
                    }
                    //下面的代码完全按照题给出的矩阵相乘顺序，但需要计算出n*n矩阵，会被卡掉 
                    //vector<LL> QK(n*n),WQK(n*n),WQKV(n*d);
                    //QK=matmul(Q,T(K,n,d),n,d,n);
                    //WQK=dot(QK,W,n);
                    //WQKV=matmul(WQK,V,n,n,d);
                
                    //对顺序调整如下，先计算K*V 
                    vector<LL> KV(d*d),QKV(n*d),WQKV(n*d);
                    KV=matmul(T(K,n,d),V,d,n,d);
                    QKV=matmul(Q,KV,n,d,d);
                    WQKV=dot(QKV,W,d);
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<d;j++)
                        {
                            cout<<WQKV[i*d+j]<<' ';
                        }
                        cout<<endl;
                    }
                    return 0;
                }
                /*
                in:
                3 2
                1 2
                3 4
                5 6
                10 10
                -20 -20
                30 30
                6 5
                4 3
                2 1
                4 0 -5
                
                out:
                480 240
                0 0
                -2200 -1100
                */
                `}
            />
            <X.H1>T3 解压缩</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                using namespace std;
                int n,p;
                string s,cmp,raw;
                int readByte()
                {
                    p+=2;
                    return (cmp[p-1]<58?cmp[p-1]-48:cmp[p-1]-87)
                          +((cmp[p-2]<58?cmp[p-2]-48:cmp[p-2]-87)<<4);
                } 
                int readHead()
                {
                    int len_raw=0;
                    for(int i=0,b=readByte();;i++,b=readByte())
                    {
                        len_raw+=(b&127)*(1<<i*7);
                        if(!(b>>7)) break;
                    }
                    return len_raw;
                }
                void ref(int o,int l)
                {
                    string s_ref;
                    if(o>l) s_ref=raw.substr(raw.size()-o*2,l*2);
                    else
                    {
                        for(;l>o;l-=o)
                        {
                            s_ref+=raw.substr(raw.size()-o*2,o*2);
                        }
                        s_ref+=raw.substr(raw.size()-o*2,l*2);
                    }
                    raw+=s_ref;
                    return;
                } 
                void readBody()
                {
                    while(p<cmp.size())
                    {
                        int b=readByte();
                        //字面量 
                        if((b&3)==0)
                        {
                            int len_lit=b>>2;
                            if(len_lit>59)
                            {
                                int num_bytes=len_lit-59;
                                len_lit=0;
                                for(int i=0;i<num_bytes;i++)
                                {
                                    len_lit+=readByte()*(1<<i*8);
                                }
                            }
                            len_lit++;
                            raw+=cmp.substr(p,len_lit*2);
                            p+=len_lit*2;
                        }
                        //短回溯 
                        else if((b&3)==1)
                        {
                            int l=((b>>2)&7)+4;
                            int o=((b>>5)<<8)+readByte();
                            ref(o,l);
                        }
                        //长回溯 
                        else if((b&3)==2)
                        {
                            int l=(b>>2)+1;
                            int o=readByte()+readByte()*256;
                            ref(o,l);
                        }
                    }
                    return;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    cin.tie(0);
                    cin>>n;
                    for(int i=0;i<(n-1)/8+1;i++)
                    {
                        cin>>s;
                        cmp+=s;
                    }
                    int len_raw=readHead();
                    readBody();
                    int i=0;
                    for(;i+16<raw.size();i+=16)
                    {
                        cout<<raw.substr(i,16)<<endl;
                    }
                    cout<<raw.substr(i)<<endl;
                    return 0;
                }
                /*
                in:
                81
                8001240102030405
                060708090af03c00
                0102030405060708
                090a0b0c0d0e0f01
                0203040506070809
                0a0b0c0d0e0f0102
                030405060708090a
                0b0c0d0e0f010203
                0405060708090a0b
                0c0d0e0fc603000d
                78
                
                out:
                0102030405060708
                090a000102030405
                060708090a0b0c0d
                0e0f010203040506
                0708090a0b0c0d0e
                0f01020304050607
                08090a0b0c0d0e0f
                0102030405060708
                090a0b0c0d0e0f0d
                0e0f0d0e0f0d0e0f
                0d0e0f0d0e0f0d0e
                0f0d0e0f0d0e0f0d
                0e0f0d0e0f0d0e0f
                0d0e0f0d0e0f0d0e
                0f0d0e0f0d0e0f0d
                0e02030405060708
                */
                `}
            />
            <X.H1>T4 电力网络</X.H1>
            <X.P>思路受@CSDN - Pujx的题解[https://blog.csdn.net/qq_45123552/article/details/136783152]@启发。</X.P>
            <X.P>
                80分TLE被卡了好久。在暴力枚举的时候要尽可能优化单次的求解过程，最后我在剩余小于等于`6`个节点的时候重新建一张邻接矩阵图，再跑枚举，勉强`800ms`通过。
            </X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cstring> 
                #include <vector>
                #include <map>
                #define N 10005
                #define INF 2147483647
                #define MAX_NUM_REST_NODES 6
                using namespace std;
                int n,m,k;
                int pow(int x,int n)
                {
                    int ans=1;
                    while(n)
                    {
                        if(n%2) ans*=x;
                        x*=x;
                        n>>=1;
                    }
                    return ans;
                }
                struct NODE{
                    int deg;
                    int nval[10];
                }nodes[N];
                bool exist[N];//节点是否存在（有删除操作）
                int num_rest_nodes,rest_nodes[MAX_NUM_REST_NODES];//最终剩余的节点数，根据题意知道不会大于6 
                struct EDGE{
                    int to;
                    int eval[10][10];
                };
                vector<EDGE> g[N];
                EDGE rest_g[MAX_NUM_REST_NODES][MAX_NUM_REST_NODES];
                bool rest_connect[MAX_NUM_REST_NODES][MAX_NUM_REST_NODES];
                void add(int u,int v,vector<int> eval)
                {
                    EDGE e;
                    e.to=v;
                    for(int i=0;i<k*k;i++)
                    {
                        e.eval[i/k][i%k]=eval[i];
                    }
                    g[u].push_back(e);
                    return;
                }
                bool merge()
                {
                    bool success=false;
                    for(int u=0;u<n;u++)
                    {
                        if(!exist[u]) continue;
                        if(nodes[u].deg==1)
                        {
                            success=true;
                            EDGE e=g[u][0];
                            for(int i=0;!exist[e.to];i++,e=g[u][i]);
                            int v=e.to;
                            for(int i=0;i<k;i++)
                            {
                                int min_cost=INF;
                                for(int j=0;j<k;j++)
                                {
                                    min_cost=min(min_cost,e.eval[j][i]+nodes[u].nval[j]);
                                }
                                nodes[v].nval[i]+=min_cost;
                            }
                            nodes[v].deg--;
                            exist[u]=false;
                        }
                        else if(nodes[u].deg==2)
                        {
                            success=true;
                            int t=0;
                            EDGE e1=g[u][t];
                            for(;!exist[e1.to];t++,e1=g[u][t]);
                            EDGE e2=g[u][++t];
                            for(;!exist[e2.to];t++,e2=g[u][t]);
                            int v1=e1.to,v2=e2.to;
                            //v1(i1) <--e1-- u(j) --e2--> v2(i2)
                            vector<int> eval_min_v1v2(k*k),eval_min_v2v1(k*k);
                            for(int i1=0;i1<k;i1++)
                            {
                                for(int i2=0;i2<k;i2++)
                                {
                                    int min_cost=INF;
                                    for(int j=0;j<k;j++)
                                    {
                                        min_cost=min(min_cost,e1.eval[j][i1]+e2.eval[j][i2]+nodes[u].nval[j]);
                                    }
                                    eval_min_v1v2[i1*k+i2]=min_cost;
                                    eval_min_v2v1[i2*k+i1]=min_cost;
                                }
                            }
                            bool no_v1v2=true;//v1v2之间原本没有边相连 
                            for(auto e:g[v1])
                            {
                                if(e.to==v2) no_v1v2=false;
                            }
                            if(no_v1v2)
                            {
                                add(v1,v2,eval_min_v1v2);
                                add(v2,v1,eval_min_v2v1);
                            }
                            else
                            {
                                for(auto &e:g[v1])
                                {
                                    if(e.to==v2)
                                    {
                                        for(int i=0;i<k*k;i++)
                                        {
                                            e.eval[i/k][i%k]+=eval_min_v1v2[i];
                                        }
                                        break; 
                                    }
                                }
                                for(auto &e:g[v2])
                                {
                                    if(e.to==v1)
                                    {
                                        for(int i=0;i<k*k;i++)
                                        {
                                            e.eval[i/k][i%k]+=eval_min_v2v1[i];
                                        }
                                        break; 
                                    }
                                }
                                nodes[v1].deg--;
                                nodes[v2].deg--;
                            }
                            exist[u]=false;
                        }
                    }
                    return success;
                }
                int getChoice(int bit,int choices)
                {
                    for(int i=0;i<bit;i++) choices/=k;
                    return choices%k;
                }
                void enumCost(int choices,int &min_cost)
                {
                    int cost=0;
                    map<int,int> mp;
                    for(int i=0;i<num_rest_nodes;i++)
                    {
                        mp[rest_nodes[i]]=getChoice(i,choices);
                    }
                    for(int i=0;i<num_rest_nodes;i++)
                    {
                        int u=rest_nodes[i];
                        cost+=nodes[u].nval[mp[u]];
                        for(int j=i+1;j<num_rest_nodes;j++)
                        {
                            int v=rest_nodes[j];
                            if(rest_connect[i][j])
                            {
                                cost+=rest_g[i][j].eval[mp[u]][mp[v]];
                            }
                        }
                    }
                    if(cost<min_cost) min_cost=cost;
                    return;
                }
                int work()
                {
                    int min_cost=INF;
                    for(int i=0;i<n;i++)
                    {
                        if(exist[i])
                        {
                            rest_nodes[num_rest_nodes++]=i;
                        }
                    }
                    for(int i=0;i<num_rest_nodes;i++)
                    {
                        int u=rest_nodes[i];
                        for(auto e:g[u])
                        {
                            int v=e.to;
                            if(exist[v])
                            {
                                int j=0;
                                while(rest_nodes[j]!=v)j++;
                                rest_g[i][j]=e;
                                rest_connect[i][j]=true;
                            }
                        }
                    }
                    for(int s=0;s<pow(k,num_rest_nodes);s++)
                    {
                        enumCost(s,min_cost);
                    }
                    return min_cost;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    cin>>n>>m>>k;
                    for(int i=0;i<n;i++)
                    {
                        for(int j=0;j<k;j++)
                        {
                            cin>>nodes[i].nval[j];
                        }
                        exist[i]=true; 
                    }
                    for(int i=0;i<m;i++)
                    {
                        int u,v;
                        vector<int> eval_uv(k*k),eval_vu(k*k);
                        cin>>u>>v;
                        for(int j=0;j<k*k;j++)
                        {
                            int val;
                            cin>>val;
                            eval_uv[(j/k)*k+j%k]=val;
                            eval_vu[(j%k)*k+j/k]=val;
                        }
                        nodes[u].deg++;
                        nodes[v].deg++;
                        add(u,v,eval_uv);
                        add(v,u,eval_vu);
                    }
                    while(merge());
                    cout<<work()<<endl;
                    return 0;
                } 
                /*
                in:
                2 1 2
                1 2
                3 4
                0 1 1 2 3 4
                
                out:
                5
                */
                `}
            />
        </>
    );
}
