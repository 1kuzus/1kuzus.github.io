import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>T1 坐标变换（其一）</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                using namespace std;
                int n,m,dx,dy;
                int dxi,dyi,x,y;
                int main()
                {
                    cin>>n>>m;
                    for(int i=0;i<n;i++)
                    {
                        cin>>dxi>>dyi;
                        dx+=dxi,dy+=dyi;
                    }
                    for(int i=0;i<m;i++)
                    {
                        cin>>x>>y;
                        cout<<x+dx<<' '<<y+dy<<endl;
                    }
                    return 0;
                }
                /*
                in:
                3 2
                10 10
                0 0
                10 -20
                1 -1
                0 0

                out:
                21 -11
                20 -10
                */
                `}
            />
            <X.H1>T2 坐标变换（其二）</X.H1>
            <X.P>维护前缀和、前缀积。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cmath>
                using namespace std;
                int n,m,opt;
                double vi;
                double k[100005]={1},theta[100005];
                int main()
                {
                    cin>>n>>m;
                    for(int i=1;i<=n;i++)
                    {
                        cin>>opt>>vi;
                        //拉伸
                        if(opt==1)
                        {
                            k[i]=k[i-1]*vi;
                            theta[i]=theta[i-1];
                        }
                        //旋转
                        else
                        {
                            k[i]=k[i-1];
                            theta[i]=theta[i-1]+vi;
                        }
                    }
                    for(int i=0;i<m;i++)
                    {
                        int qi,qj,x,y;
                        cin>>qi>>qj>>x>>y;
                        double kij=k[qj]/k[qi-1];
                        double thetaij=theta[qj]-theta[qi-1];
                        double new_x=x*cos(thetaij)-y*sin(thetaij);
                        double new_y=x*sin(thetaij)+y*cos(thetaij);
                        new_x*=kij;
                        new_y*=kij;
                        printf("%.6lf %.6lf\n",new_x,new_y);
                    }
                    return 0;
                }
                /*
                in:
                10 5
                2 0.59
                2 4.956
                1 0.997
                1 1.364
                1 1.242
                1 0.82
                2 2.824
                1 0.716
                2 0.178
                2 4.094
                1 6 -953188 -946637
                1 9 969538 848081
                4 7 -114758 522223
                1 9 -535079 601597
                8 8 159430 -511187

                out:
                -1858706.758 -83259.993
                -1261428.46 201113.678
                -75099.123 -738950.159
                -119179.897 -789457.532
                114151.88 -366009.892
                */
                `}
            />
            <X.H1>T3 梯度求解</X.H1>
            <X.P>可以就把后缀表达式原封不动的存在一颗树上，然后对每个节点记录前向传播值，前向传播过程和接下来求梯度都可以递归实现。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #include <stack>
                #define MOD 1000000007
                using namespace std;
                struct POLYNODE{
                    int type;//0:运算符 1:xi 2:常数
                    int c;//常数值
                    int xid;//xi的i
                    string opt;//运算符
                    int val;//前向传播节点值
                    POLYNODE *lchild,*rchild;
                };
                int n,m,xid;
                string poly;
                vector<string> split(string str,string sep)
                {
                    vector<string> res;
                    int p=0;
                    for(int i=str.find(sep);i!=-1;p=i+=sep.length(),i=str.find(sep,i))
                        res.push_back(str.substr(p,i-p));
                    res.push_back(str.substr(p,str.size()-p));
                    return res;
                }
                POLYNODE *makePolyTree()
                {
                    vector<string> parts=split(poly," ");
                    stack<POLYNODE*> s;
                    for(auto p:parts)
                    {
                        POLYNODE *node=new(POLYNODE);
                        //运算符
                        if(p=="+"||p=="-"||p=="*")
                        {
                            POLYNODE *lc,*rc;
                            lc=s.top(),s.pop();
                            rc=s.top(),s.pop();
                            node->type=0;
                            node->opt=p;
                            node->lchild=lc;
                            node->rchild=rc;
                            s.push(node);
                        }
                        //xi
                        else if(p[0]=='x')
                        {
                            node->type=1;
                            node->xid=stoi(p.substr(1));
                            s.push(node);
                        }
                        //常数
                        else
                        {
                            node->type=2;
                            node->c=stoi(p);
                            s.push(node);
                        }
                    }
                    return s.top();
                }
                void forward(POLYNODE *root,vector<int> a)
                {
                    if(root->type==1)
                    {
                        root->val=a[root->xid-1];
                    }
                    else if(root->type==2)
                    {
                        root->val=root->c;
                    }
                    else
                    {
                        POLYNODE *lc=root->lchild,*rc=root->rchild;
                        forward(lc,a);
                        forward(rc,a);
                        if(root->opt=="+")
                        {
                            root->val=(lc->val+rc->val)%MOD;
                        }
                        else if(root->opt=="-")
                        {
                            root->val=(rc->val-lc->val)%MOD;
                        }
                        else if(root->opt=="*")
                        {
                            root->val=((long long)lc->val*rc->val)%MOD;
                        }
                    }
                    return;
                }
                int grad(POLYNODE *root,int xid)
                {
                    if(root->type==1)
                    {
                        return (root->xid==xid)?1:0;
                    }
                    else if(root->type==2)
                    {
                        return 0;
                    }
                    else
                    {
                        POLYNODE *lc=root->lchild,*rc=root->rchild;
                        if(root->opt=="+")
                        {
                            return (grad(lc,xid)+grad(rc,xid))%MOD;
                        }
                        else if(root->opt=="-")
                        {
                            return (grad(rc,xid)-grad(lc,xid))%MOD;
                        }
                        else if(root->opt=="*")
                        {
                            long long lgrad=grad(lc,xid);
                            long long rgrad=grad(rc,xid);
                            return (lgrad*rc->val+rgrad*lc->val)%MOD;
                        }
                    }
                }
                int main()
                {
                    cin>>n>>m;
                    getline(cin,poly);//读回车
                    getline(cin,poly);
                    POLYNODE *root=makePolyTree();

                    for(int i=0;i<m;i++)
                    {
                        cin>>xid;
                        vector<int> a(n);
                        for(int j=0;j<n;j++)
                        {
                            cin>>a[j];
                        }
                        forward(root,a);
                        cout<<(grad(root,xid)+MOD)%MOD<<endl;
                    }
                    return 0;
                }
                /*
                in:
                2 2
                x1 x1 x1 * x2 + *
                1 2 3
                2 3 4

                out:
                15
                3

                in:
                3 5
                x2 x2 * x2 * 0 + -100000 -100000 * x2 * -
                3 100000 100000 100000
                2 0 0 0
                2 0 -1 0
                2 0 1 0
                2 0 100000 0

                out:
                0
                70
                73
                73
                999999867
                */
                `}
            />
            <X.H1>T4 阴阳龙</X.H1>
            <X.P>看到员工数量级是比较小的，想到去维护行、列、正反对角线四个方向上的员工位置，利用C++ STL的`map`存储，键值对为`(pos_val,id)`，其中这个`pos_val`在竖直方向是员工的`y`坐标，其他方向是`x`坐标（其实两条对角线方向上取哪个都行），`id`是员工的编号。</X.P>
            <X.P>`map`提供了`lower_bound`和`upper_bound`函数，可以二分找到第一个键值*大于等于*和*大于*给定键的元素；如果想找到第一个键值*小于*给定键的元素，可以在判断`lower_bound`返回的不指向容器首部后，再移到前一个位置（`it--`）。</X.P>
            <X.P>在每个方向上我们都需要若干个这样的`map`，具体地说，我们需要`n`个存储垂直方向的、`m`个存储水平方向的、`2`*`n+m-1`个存储两条对角线方向的。提前开好的话占空间比较大，考虑用`unordered_map`存储这些`map`。以对角线方向为例，可以用`x+y`和`y-x`作为定位到具体`map`的键，我们并不需要这些键是有序的，所以用`unordered_map`就可以了。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #include <map>
                #include <unordered_map>
                /*
                    3     2     1
                     \\    |    /
                      \\   |   /
                       \\  |  /
                        \\ | /
                _________\\|/_________0
                */
                using namespace std;
                int n,m,p,q,k;
                long long ans;
                int pos[100005][2];
                int cos[8]={1,1,0,-1,-1,-1,0,1};
                int sin[8]={0,1,1,1,0,-1,-1,-1};
                vector<int> changes;//需要变换的员工的id
                unordered_map<int,map<int,int>> dirs[4];
                void addPos(int x,int y,int id)
                {
                    dirs[0][y]  [x]=id;
                    dirs[1][y-x][x]=id;
                    dirs[2][x]  [y]=id;
                    dirs[3][y+x][x]=id;
                    return;
                }
                void deletePos(int x,int y)
                {
                    dirs[0][y]  .erase(x);
                    dirs[1][y-x].erase(x);
                    dirs[2][x]  .erase(y);
                    dirs[3][y+x].erase(x);
                    return;
                }
                pair<int,int> nextPos(int x,int y,int u,int v,int t)
                {
                    int dx=x-u,dy=y-v;
                    int new_dx=dx*cos[t]-dy*sin[t],new_dy=dx*sin[t]+dy*cos[t];
                    //非90度整数倍方向旋转非90度整数倍角单独修正
                    if(t%2&&dx&&dy) new_dx/=2,new_dy/=2;
                    return make_pair(u+new_dx,v+new_dy);
                }
                //检查一个新找到的员工能不能更新k
                void checkDirectionUpdate(map<int,int>::iterator it,int pos_val)
                {
                    if(abs(it->first-pos_val)==k)
                    {
                        changes.push_back(it->second);
                    }
                    else if(abs(it->first-pos_val)<k)
                    {
                        changes.clear();
                        k=abs(it->first-pos_val);
                        changes.push_back(it->second);
                    }
                    return;
                }
                //检查四个方向上能不能找到员工
                void checkDirection(int dir_id,int locator,int pos_val)
                {
                    if(dirs[dir_id].find(locator)!=dirs[dir_id].end())
                    {
                        auto it=dirs[dir_id][locator].upper_bound(pos_val);
                        if(it!=dirs[dir_id][locator].end())
                        {
                            checkDirectionUpdate(it,pos_val);
                        }
                        it=dirs[dir_id][locator].lower_bound(pos_val);
                        if(it!=dirs[dir_id][locator].begin())
                        {
                            it--;
                            checkDirectionUpdate(it,pos_val);
                        }
                    }
                    return;
                }
                void work(int u,int v,int t)
                {
                    k=2147483647;
                    changes.clear();
                    checkDirection(0,v  ,u);
                    checkDirection(1,v-u,u);
                    checkDirection(2,u  ,v);
                    checkDirection(3,v+u,u);
                    //k不能大于到(u,v)到边界的位置
                    if(k<=min(min(u-1,n-u),min(v-1,m-v)))
                    {
                        for(auto id:changes)
                        {
                            int old_x=pos[id][0],old_y=pos[id][1];
                            deletePos(old_x,old_y);
                        }
                        for(auto id:changes)
                        {
                            int old_x=pos[id][0],old_y=pos[id][1];
                            int new_x,new_y;
                            tie(new_x,new_y)=nextPos(old_x,old_y,u,v,t);
                            pos[id][0]=new_x,pos[id][1]=new_y;
                            addPos(new_x,new_y,id);
                        }
                    }
                    return;
                }
                int main()
                {
                    cin>>n>>m>>p>>q;
                    for(int id=0;id<p;id++)
                    {
                        int x,y;
                        cin>>x>>y;
                        pos[id][0]=x,pos[id][1]=y;
                        addPos(x,y,id);
                    }
                    for(int i=0;i<q;i++)
                    {
                        int u,v,t;
                        cin>>u>>v>>t;
                        work(u,v,t);
                    }
                    for(int id=0;id<p;id++)
                    {
                        ans^=(long long)(id+1)*pos[id][0]+pos[id][1];
                    }
                    cout<<ans<<endl;
                    return 0;
                }
                /*
                in:
                3 3 9 1
                1 1
                1 2
                1 3
                2 1
                2 2
                2 3
                3 1
                3 2
                3 3
                2 2 1

                out:
                20
                */
                `}
            />
        </>
    );
}
