import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/csp-2020-09/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>T1 称检测点查询</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <algorithm>
                using namespace std;
                int n,x,y;
                struct POS {
                    int id,x,y;
                }p[205];
                bool cmp(POS p1,POS p2)
                {
                    int d1=(p1.x-x)*(p1.x-x)+(p1.y-y)*(p1.y-y);
                    int d2=(p2.x-x)*(p2.x-x)+(p2.y-y)*(p2.y-y);
                    if(d1==d2) return p1.id<p2.id;
                    return d1<d2;
                }
                int main()
                {
                    cin>>n>>x>>y;
                    for(int i=0;i<n;i++)
                    {
                        cin>>p[i].x>>p[i].y;
                        p[i].id=i+1;
                    }
                    sort(p,p+n,cmp);
                    for(int i=0;i<3;i++)
                    {
                        cout<<p[i].id<<endl;
                    }
                    return 0;
                }
                /*
                in:
                5 0 1
                -1 0
                0 0
                1 0
                0 2
                -1 2

                out:
                2
                4
                1
                */
                `}
            />
            <X.H1>T2 风险人群筛查</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <algorithm>
                using namespace std;
                int n,k,t,xl,yd,xr,yu;
                int ans_pass,ans_in;//经过和逗留人数 
                int cnt_in[25],max_cnt_in[25];//每个人的逗留时长 
                int max(int x,int y) {return x>y?x:y;}
                //在高危区域内 
                bool inArea(int x,int y)
                {
                    return xl<=x&&x<=xr&&yd<=y&&y<=yu;
                }
                int main()
                {
                    cin>>n>>k>>t>>xl>>yd>>xr>>yu;
                    for(int i=0;i<n;i++)
                    {
                        bool pass=false;
                        for(int j=0;j<t;j++)
                        {
                            int x,y;
                            cin>>x>>y;
                            if(inArea(x,y)) pass=true,cnt_in[i]++;
                            else
                            {
                                max_cnt_in[i]=max(max_cnt_in[i],cnt_in[i]);
                                cnt_in[i]=0;
                            }
                        }
                        max_cnt_in[i]=max(max_cnt_in[i],cnt_in[i]);
                        ans_pass+=pass;
                    }
                    for(int i=0;i<n;i++)
                    {
                        if(max_cnt_in[i]>=k) ans_in++;
                    }
                    cout<<ans_pass<<endl;
                    cout<<ans_in<<endl;
                    return 0;
                }
                /*
                in:
                5 2 6 20 40 100 80
                100 80 100 80 100 80 100 80 100 80 100 80
                60 50 60 46 60 42 60 38 60 34 60 30
                10 60 14 62 18 66 22 74 26 86 30 100
                90 31 94 35 98 39 102 43 106 47 110 51
                0 20 4 20 8 20 12 20 16 20 20 20

                out:
                3
                2
                */
                `}
            />
            <X.H1>T3 点亮数字人生</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #include <queue>
                using namespace std;
                int Q,m,n,s; 
                struct INPUTNODE{
                    vector<int> output_to;//输出到的节点的编号 
                    int val;//输入信号值 
                }; 
                struct NODE{
                    string func;
                    vector<int> output_to;//输出到的节点的编号 
                    vector<int> inputs;//输入值的集合 
                    int in_degree;//剩余入度 
                    int val;//器件的输出值 
                };
                int calc(string func,vector<int> inputs)
                {
                    int val=inputs[0];
                    if(func=="NOT")
                    {
                        val=!val;
                    }
                    else if(func=="AND")
                    {
                        for(int i=1;i<inputs.size();i++) val&=inputs[i];
                    }
                    else if(func=="OR")
                    {
                        for(int i=1;i<inputs.size();i++) val|=inputs[i];
                    }
                    else if(func=="XOR")
                    {
                        for(int i=1;i<inputs.size();i++) val^=inputs[i];
                    }
                    else if(func=="NAND")
                    {
                        for(int i=1;i<inputs.size();i++) val&=inputs[i];
                        val=!val;
                    }
                    else if(func=="NOR")
                    {
                        for(int i=1;i<inputs.size();i++) val|=inputs[i];
                        val=!val;
                    }
                    return val;
                }
                bool work(vector<INPUTNODE> inputs,vector<NODE> nodes,vector<int> query)
                {
                    //处理输入信号 
                    for(auto input_node:inputs)
                    {
                        for(auto output_id:input_node.output_to)
                        {
                            nodes[output_id].in_degree--;
                            nodes[output_id].inputs.emplace_back(input_node.val);
                        }
                    }
                    //拓扑排序，队列中为剩余入度为0的器件编号 
                    queue<int> q;
                    for(int i=0;i<nodes.size();i++)
                    {
                        if(nodes[i].in_degree==0) q.push(i);
                    }
                    //记录出队次数，如果这个cnt最后与器件数量不相同，就说明有逻辑环 
                    int cnt=0;
                    while(!q.empty())
                    {
                        int id=q.front();
                        q.pop();
                        cnt++;
                        nodes[id].val=calc(nodes[id].func,nodes[id].inputs);
                        for(auto output_id:nodes[id].output_to)
                        {
                            //处理当前器件的输出 
                            nodes[output_id].in_degree--;
                            nodes[output_id].inputs.emplace_back(nodes[id].val);
                            //如果某个器件所需的全部输入已经集齐，也就是剩余入度为0了，就可以加入队列 
                            if(nodes[output_id].in_degree==0)
                            {
                                q.push(output_id);
                            }
                        }
                    }
                    if(cnt<n) return false;//有环 
                    for(int i=0;i<query.size();i++)
                    {
                        cout<<nodes[query[i]].val<<' ';
                    }
                    cout<<endl;
                    return true;
                }
                int main()
                {
                    cin>>Q;
                    while(Q--)
                    {
                        cin>>m>>n;
                        vector<INPUTNODE> inputs(m);//输入信号 
                        vector<NODE> nodes(n);//器件 
                        for(int i=0;i<n;i++)
                        {
                            int k;
                            string func;
                            cin>>func>>k;
                            nodes[i].in_degree+=k;
                            nodes[i].func=func;
                            for(int j=0;j<k;j++)
                            {
                                string pin;//输入引脚 
                                cin>>pin; 
                                int id=stoi(pin.substr(1))-1; 
                                if(pin[0]=='I')
                                {
                                    inputs[id].output_to.emplace_back(i);
                                }
                                else if(pin[0]=='O')
                                {
                                    nodes[id].output_to.emplace_back(i);
                                }
                            }
                        }
                        cin>>s;
                        //保存s次运行的输入和查询 
                        vector<vector<int>> all_inputs_val;
                        vector<vector<int>> all_query;
                        for(int i=0;i<s;i++)
                        {
                            vector<int> inputs_val(m);
                            for(int j=0;j<m;j++)
                            {
                                cin>>inputs_val[j];
                            }
                            all_inputs_val.emplace_back(inputs_val);
                        }
                        for(int i=0;i<s;i++)
                        {
                            int n_query;
                            cin>>n_query;
                            vector<int> query(n_query);
                            for(int j=0;j<n_query;j++)
                            {
                                cin>>query[j];
                                query[j]--;//从0计数 
                            }
                            all_query.emplace_back(query);
                        }
                        for(int i=0;i<s;i++)
                        {
                            //初始化输入信号 
                            for(int j=0;j<all_inputs_val[i].size();j++)
                            {
                                inputs[j].val=all_inputs_val[i][j];
                            }
                            vector<int> query=all_query[i];
                            if(!work(inputs,nodes,query))
                            {
                                cout<<"LOOP"<<endl;
                                break;
                            }
                        }
                    }
                    return 0;
                }
                /*
                in:
                1
                3 5
                XOR 2 I1 I2
                XOR 2 O1 I3
                AND 2 O1 I3
                AND 2 I1 I2
                OR 2 O3 O4
                4
                0 1 1
                1 0 1
                1 1 1
                0 0 0
                2 5 2
                2 5 2
                2 5 2
                2 5 2

                out:
                1 0
                1 0
                1 1
                0 0
                */
                `}
            />
            <X.H1>T4 星际旅行</X.H1>
            <X.P>
                注意判断两点所连线段会不会经过黑洞时，即使黑洞中心到直线距离小于半径，也有可能是线段的延长线经过了黑洞，但线段本身并没有。
            </X.P>
            <X.P>
                此外，一开始交的时候最后一个点TLE了，最后是把比较花时间的计算距离操作先算了一遍保存到数组里，后面直接拿来用。
            </X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cmath>
                using namespace std;
                int n,m,r;
                int c[105];//黑洞中心 
                int p[2005][105];
                double d[2005][2005],d_o[2005]; 
                double ans[2005];
                const double PI=2*asin(1);
                //p1点到p2点的距离 
                double getdis(int *p1,int *p2)
                {
                    double ans=0;
                    for(int i=0;i<n;i++)
                    {
                        ans+=(*(p1+i)-*(p2+i))*(*(p1+i)-*(p2+i));
                    }
                    return sqrt(ans);
                }
                //三角形面积 
                double s(double a,double b,double c)
                {
                    double d=(a+b+c)/2;//海伦-秦九韶公式的p 
                    return sqrt(d*(d-a)*(d-b)*(d-c));
                }
                //求角度，对边长c，两邻边为a和b 
                double theta(double a,double b,double c)
                {
                    double sin_theta=2*s(a,b,c)/(a*b);
                    if(sin_theta>1) sin_theta=1;
                    if(c*c<a*a+b*b)
                    {
                        return asin(sin_theta);
                    }
                    else
                    {
                        return PI-asin(sin_theta);
                    }
                    return asin(sin_theta); 
                }
                //计算pi和pj之间的最短曲线距离 
                double calc(int i,int j) 
                {
                    double dij=d[i][j];
                    double dio=d_o[i];
                    double djo=d_o[j];
                    double h=2*s(dij,dio,djo)/dij;//黑洞中心到直线pipj的距离 
                    //连线不经过黑洞 
                    if(h>r||theta(dij,djo,dio)>PI/2||theta(dij,dio,djo)>PI/2)
                    {
                        return dij;
                    }
                    //连线经过黑洞
                    else
                    {
                        double li=sqrt(dio*dio-r*r);
                        double lj=sqrt(djo*djo-r*r);
                        double t=theta(dio,djo,dij)-theta(dio,r,li)-theta(djo,r,lj);
                        return li+lj+t*r;
                    } 
                }
                int main()
                {
                    scanf("%d%d%d",&n,&m,&r);
                    for(int i=0;i<n;i++)
                    {
                        scanf("%d",&c[i]);
                    }
                    for(int i=0;i<m;i++)
                    {
                        for(int j=0;j<n;j++)
                        {
                            scanf("%d",&p[i][j]);
                        }
                    }
                    //算直线距离比较花时间，先提前预处理好 
                    for(int i=0;i<m;i++)
                    {
                        d_o[i]=getdis(p[i],c);
                        for(int j=i+1;j<m;j++)
                        {
                            d[i][j]=d[j][i]=getdis(p[i],p[j]);
                        }
                    }
                    for(int i=0;i<m;i++)
                    {
                        for(int j=i+1;j<m;j++)
                        {
                            double dis=calc(i,j);
                            ans[i]+=dis;
                            ans[j]+=dis;
                        }
                    }
                    for(int i=0;i<m;i++)
                    {
                        printf("%.12lf\n",ans[i]);
                    }
                    return 0;
                }
                /*
                in:
                2 3
                2
                3 1
                5 1
                1 3
                3 -2

                out:
                8.83711594354348
                10.83711594354348
                9.39104657990738

                in:
                3 8
                1
                0 0 0
                0 0 1
                0 1 0
                1 0 0
                1 1 1
                -1 -1 0
                -1 0 -1
                0 -1 -1
                -1 -1 -1

                out:
                14.12797001266400
                14.12797001266400
                14.12797001266400
                17.90086240651788
                13.95502966750398
                13.95502966750398
                13.95502966750398
                14.99490548122857
                */
                `}
            />
        </>
    );
}
