import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/csp-2022-06/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>T1 归一化处理</X.H1>
            <X.P>用了一下方差的变形：</X.P>
            <X.Formula text="D(x)=E(x^2)-[E(x)]^2" />
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cmath>
                using namespace std;
                int n,a[1005];
                double avg,avg_sq;
                int main()
                {
                    cin>>n;
                    for(int i=0;i<n;i++)
                    {
                        cin>>a[i];
                        avg+=a[i];
                        avg_sq+=a[i]*a[i];
                    }
                    avg/=n,avg_sq/=n;
                    for(int i=0;i<n;i++)
                    {
                        cout<<(a[i]-avg)/sqrt(avg_sq-avg*avg)<<endl;
                    }
                    return 0;
                }
                /*
                in:
                7
                -4 293 0 -22 12 654 1000

                out:
                -0.7485510379073613
                0.04504284674812264
                -0.7378629047806881
                -0.7966476369773906
                -0.7057985054006686
                1.0096468614303775
                1.9341703768876082
                */
                `}
            />
            <X.H1>T2 寻宝！大冒险！</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <unordered_set>
                using namespace std;
                int n,l,s,ans;
                int t[1005][2];//树的坐标
                int g[55][55];//藏宝图
                unordered_set<long long> st;//用一个long long存储坐标x*(1e9+1)+y 
                bool check(int x,int y)
                {
                    for(int i=0;i<=s;i++)
                    {
                        for(int j=0;j<=s;j++)
                        {
                            long long p=(1e9L+1)*(x+i)+y+j;
                            //绿化图坐标(x+i,y+j)与藏宝图上坐标(i,j)不对应，匹配失败 
                            if((st.find(p)!=st.end())^g[s-i][j])
                            {
                                return false;
                            }
                        }
                    }
                    return true;
                }
                int main()
                {
                    cin>>n>>l>>s;
                    for(int i=0;i<n;i++)
                    {
                        cin>>t[i][0]>>t[i][1];
                        long long p=(1e9L+1)*t[i][0]+t[i][1];
                        st.insert(p);
                    }
                    for(int i=0;i<=s;i++)
                    {
                        for(int j=0;j<=s;j++)
                        {
                            cin>>g[i][j]; 
                        }
                    }
                    for(int i=0;i<n;i++)
                    {
                        int x=t[i][0],y=t[i][1];
                        if(x+s<=l&&y+s<=l)
                        {
                            ans+=check(x,y);
                        }
                    }
                    cout<<ans<<endl;
                    return 0;
                }
                /*
                in:
                5 100 2
                0 0
                1 1
                2 2
                3 3
                4 4
                0 0 1
                0 1 0
                1 0 0

                out:
                3
                */
                `}
            />
            <X.H1>T3 角色授权</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <unordered_set>
                #include <unordered_map>
                #define N 505
                using namespace std;
                int n,m,q;
                string s;
                struct USER{
                    string username;
                    int ng;
                    unordered_set<string> gset;
                };
                struct ROLE{
                    string rolename;
                    int nv,no,nn;//操作、资源种类、资源名称 
                    unordered_set<string> vset,oset,nset;
                    bool vadmin,oadmin;//允许的操作/资源是否含有"*" 
                }role[N];
                struct RBAC{
                    string rolename;
                    int ns;
                    unordered_set<string> sset_user;
                    unordered_set<string> sset_group;
                }rbac[N];//role-based access control
                struct QUERY{
                    USER user;
                    string v,o,n;
                };
                unordered_map<string,int> rolemap;//角色名--id 
                //判断一个角色能否对某个资源执行某个操作
                bool check(int &roleid,string &qv,string &qo,string &qn)
                {
                    bool ok=true;
                    ROLE &r=role[roleid];
                    ok&=r.vadmin||r.vset.find(qv)!=r.vset.end();
                    if(!ok) return false;
                    ok&=r.oadmin||r.oset.find(qo)!=r.oset.end();
                    if(!ok) return false;
                    if(r.nn==0) return true;
                    ok&=r.nset.find(qn)!=r.nset.end();
                    return ok;
                }
                bool query(QUERY &q)
                {
                    for(int i=0;i<m;i++)
                    {
                        RBAC &ac=rbac[i];
                        int roleid=rolemap[ac.rolename];
                        if(ac.sset_user.find(q.user.username)==ac.sset_user.end())//q.user.username不在ac.sset_user中 
                        {
                            bool ok=false;
                            for(auto &elem:ac.sset_group)
                            {
                                if(q.user.gset.find(elem)!=ac.sset_group.end())
                                {
                                    ok=true;
                                    break;
                                }
                            }
                            if(!ok) continue;//且q.user.gset与ac.sset_group没有交集，就跳过对这个角色检查 
                        }
                        if(check(roleid,q.v,q.o,q.n)) return true;
                    }
                    return false;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    cin>>n>>m>>q;
                    for(int i=0;i<n;i++)
                    {
                        cin>>role[i].rolename;
                        rolemap[role[i].rolename]=i;
                        cin>>role[i].nv;
                        for(int j=0;j<role[i].nv;j++)
                        {
                            cin>>s;
                            role[i].vset.emplace(s);
                            if(s=="*") role[i].vadmin=true;
                        }
                        cin>>role[i].no;
                        for(int j=0;j<role[i].no;j++)
                        {
                            cin>>s;
                            role[i].oset.emplace(s);
                            if(s=="*") role[i].oadmin=true;
                        }
                        cin>>role[i].nn;
                        for(int j=0;j<role[i].nn;j++)
                        {
                            cin>>s;
                            role[i].nset.emplace(s);
                        }
                    }
                    for(int i=0;i<m;i++)
                    {
                        cin>>rbac[i].rolename;
                        cin>>rbac[i].ns;
                        for(int j=0;j<rbac[i].ns;j++)
                        {
                            char typ;
                            cin>>typ>>s;
                            if(typ=='u')
                            {
                                rbac[i].sset_user.emplace(s);
                            }
                            else
                            {
                                rbac[i].sset_group.emplace(s);
                            }
                        }
                    }
                    for(int i=0;i<q;i++)
                    {
                        QUERY q; 
                        cin>>q.user.username;
                        cin>>q.user.ng;
                        for(int j=0;j<q.user.ng;j++)
                        {
                            cin>>s;
                            q.user.gset.emplace(s);
                        }
                        cin>>q.v>>q.o>>q.n;
                        cout<<query(q)<<endl;
                    }
                    return 0;
                }
                /*
                in:
                1 2 3
                op 1 open 1 door 0
                op 1 g sre
                op 1 u xiaop
                xiaoc 2 sre ops open door room302
                xiaop 1 ops open door room501
                xiaoc 2 sre ops remove door room302

                out:
                1
                1
                0
                */
                `}
            />
            <X.H1>T5 PS无限版</X.H1>
            <X.P noMarginBottom>线段树题，此题需要注意两点：</X.P>
            <X.Oli>因为涉及到查询平方和</X.Oli>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cmath>
                #include <iomanip>
                #define N 500005
                using namespace std;
                int n,m;
                int lc(int f){return f<<1;}//左子 
                int rc(int f){return f<<1|1;}//右子

                struct POS{
                    double x,y;
                    friend POS operator +(POS a,POS b)
                    {
                        POS ans;
                        ans.x=a.x+b.x;
                        ans.y=a.y+b.y;
                        return ans;
                    }
                }a[N];

                struct TAGVAL{
                    double mat[6];//省略了齐次坐标的第三行[0 0 1] 
                }const I{1,0,0,0,1,0};

                TAGVAL T(double dx,double dy){return TAGVAL{1,0,dx,0,1,dy};}//平移 
                TAGVAL R(double t){return TAGVAL{cos(t),-sin(t),0,sin(t),cos(t),0};}//绕原点旋转 
                TAGVAL S(double k){return TAGVAL{k,0,0,0,k,0};}//绕原点缩放 

                struct NODE{
                    POS sum;//和(x,y) 
                    POS sqs;//平方和(x**2,y**2) 
                    double xys;//交叉项和xy
                    bool flag;//是否打了tag 
                    TAGVAL tag;
                }tree[4*N];

                //matmul 矩阵乘 
                TAGVAL mm(TAGVAL A,TAGVAL B)
                {
                    TAGVAL result;
                    for(int i=0;i<6;i++)
                    {
                        result.mat[i]=A.mat[i/3*3]*B.mat[i%3]+A.mat[i/3*3+1]*B.mat[i%3+3];
                    }
                    result.mat[2]+=A.mat[2];
                    result.mat[5]+=A.mat[5];
                    return result;
                }

                //对向量p应用仿射变换M，变为Mp 
                POS affine(POS p,double a,double b,double c,double d,double e,double g)
                {
                    //M=[a b c
                    //   d e g      (f变量名被占用了)
                    //   0 0 1]     (省略了齐次坐标的第三行)
                    return POS{a*p.x+b*p.y+c,d*p.x+e*p.y+g};
                }

                //合并tgv至 <管辖[l,r]区间的f节点> 的tag值，同时更新树上值 
                void mergetag(int l,int r,int f,TAGVAL tgv)
                {
                    //原本TAG(M1)，父亲分发下TAG(M2)
                    //现在TAG(M2*M1)
                    int len=r-l+1;
                    POS sum=tree[f].sum,sqs=tree[f].sqs;
                    double xys=tree[f].xys;
                    double a=tgv.mat[0],b=tgv.mat[1],c=tgv.mat[2],d=tgv.mat[3],e=tgv.mat[4],g=tgv.mat[5];
                    tree[f].sum=affine(sum,a,b,c*len,d,e,g*len);
                    tree[f].sqs=affine(sqs,a*a,b*b,c*c*len+2*a*b*xys,d*d,e*e,g*g*len+2*d*e*xys)
                               +affine(sum,2*a*c,2*b*c,0,2*d*g,2*e*g,0);
                    tree[f].xys=a*d*sqs.x+b*e*sqs.y+c*g*len+(a*e+b*d)*xys+(a*g+c*d)*sum.x+(b*g+c*e)*sum.y;
                    tree[f].tag=mm(tgv,tree[f].tag);//M2*M1
                    tree[f].flag=true;
                    return;
                }

                //用子节点更新 <f节点>
                void pushup(int f)
                {
                    tree[f].sum=tree[lc(f)].sum+tree[rc(f)].sum;
                    tree[f].sqs=tree[lc(f)].sqs+tree[rc(f)].sqs;
                    tree[f].xys=tree[lc(f)].xys+tree[rc(f)].xys;
                    return;
                }

                //将 <管辖[l,r]区间的f节点> 的tag值下发至子节点 
                void pushdown(int l,int r,int f)
                {
                    if(l==r) return;
                    int mid=l+(r-l)/2;
                    mergetag(l,mid,lc(f),tree[f].tag);
                    mergetag(mid+1,r,rc(f),tree[f].tag);
                    tree[f].tag=I;
                    tree[f].flag=false;
                    return;
                }

                //在tree[f]建立一个管辖[l,r]的节点 
                void build(int l,int r,int f)
                {
                    tree[f].flag=false;
                    tree[f].tag=I;
                    if(l==r)
                    {
                        tree[f].sum=a[l];
                        tree[f].sqs=POS{a[l].x*a[l].x,a[l].y*a[l].y};
                        tree[f].xys=a[l].x*a[l].y;
                        return;
                    }
                    int mid=l+(r-l)/2;
                    build(l,mid,lc(f));
                    build(mid+1,r,rc(f));
                    pushup(f);
                    return;
                }

                //将tgv合并至区间[ql,qr]的tag值，当前在管辖[l,r]区间的f节点 
                void update(int ql,int qr,int l,int r,int f,TAGVAL tgv)
                {
                    //当前区间是查询区间的子集，修改 
                    if(ql<=l&&r<=qr)
                    {
                        mergetag(l,r,f,tgv);
                        return;
                    }
                    int mid=l+(r-l)/2;
                    if(tree[f].flag) pushdown(l,r,f);//访问到有标记的节点就下放 
                    if(ql<=mid) update(ql,qr,l,mid,lc(f),tgv);
                    if(qr>mid) update(ql,qr,mid+1,r,rc(f),tgv);
                    pushup(f);
                    return;
                }

                //求区间[ql,qr]的和，当前在管辖[l,r]区间的f节点 
                POS getsum(int ql,int qr,int l,int r,int f)
                {
                    //当前区间是查询区间的子集，返回 
                    if(ql<=l&&r<=qr) return tree[f].sum;
                    int mid=l+(r-l)/2;
                    if(tree[f].flag) pushdown(l,r,f);//访问到有标记的节点就下放
                    POS ans={0,0};
                    if(ql<=mid) ans=ans+getsum(ql,qr,l,mid,lc(f)); 
                    if(qr>mid) ans=ans+getsum(ql,qr,mid+1,r,rc(f));
                    return ans;
                }

                //求区间[ql,qr]的平方和，当前在管辖[l,r]区间的f节点 
                POS getsqs(int ql,int qr,int l,int r,int f)
                {
                    //当前区间是查询区间的子集，返回 
                    if(ql<=l&&r<=qr) return tree[f].sqs;
                    int mid=l+(r-l)/2;
                    if(tree[f].flag) pushdown(l,r,f);//访问到有标记的节点就下放
                    POS ans={0,0};
                    if(ql<=mid) ans=ans+getsqs(ql,qr,l,mid,lc(f)); 
                    if(qr>mid) ans=ans+getsqs(ql,qr,mid+1,r,rc(f));
                    return ans;
                }

                int main()
                {
                    ios::sync_with_stdio(false);
                    cin>>n>>m;
                    cout.precision(4);
                    cout.setf(ios::fixed);
                    for(int i=0;i<n;i++)
                    {
                        cin>>a[i+1].x>>a[i+1].y;
                    }
                    build(1,n,1);
                    for(int i=0;i<m;i++)
                    {
                        int q;
                        double l,r,a,b,theta,k,y0;
                        cin>>q>>l>>r;
                        if(q==1)
                        {
                            cin>>a>>b;
                            update(l,r,1,n,1,T(a,b));
                        }
                        else if(q==2)
                        {
                            cin>>a>>b>>theta;
                            TAGVAL tgv=I;
                            tgv=mm(T(-a,-b),tgv);
                            tgv=mm(R(theta),tgv);//旋转 
                            tgv=mm(T(a,b),tgv);
                            update(l,r,1,n,1,tgv);
                        }
                        else if(q==3)
                        {
                            cin>>a>>b>>k;
                            TAGVAL tgv=I;
                            tgv=mm(T(-a,-b),tgv);
                            tgv=mm(S(k),tgv);//缩放 
                            tgv=mm(T(a,b),tgv);
                            update(l,r,1,n,1,tgv);
                        }
                        else if(q==4)
                        {
                            cin>>theta>>y0;
                            double t=tan(theta);
                            TAGVAL tgv={
                                1-t*t, 2*t,  -2*y0*t,
                                2*t,   t*t-1, 2*y0,
                            };
                            tgv=mm(S(1/(1+t*t)),tgv);
                            update(l,r,1,n,1,tgv);
                        }
                        else if(q==5)
                        {
                            cin>>theta>>y0;
                            double t=tan(theta);
                            TAGVAL tgv={
                                1, t,  -y0*t,
                                t, t*t, y0
                            };
                            tgv=mm(S(1/(1+t*t)),tgv);
                            update(l,r,1,n,1,tgv);
                        }
                        else if(q==6)
                        {
                            POS sum=getsum(l,r,1,n,1);
                            cout<<sum.x/(r-l+1)<<' '<<sum.y/(r-l+1)<<'\n';
                        }
                        else if(q==7)
                        {
                            cin>>a>>b;
                            POS sum=getsum(l,r,1,n,1);
                            POS sqs=getsqs(l,r,1,n,1);
                            double ans=sqs.x+sqs.y-2*a*sum.x-2*b*sum.y+(a*a+b*b)*(r-l+1);
                            cout<<ans<<'\n';
                        }
                    }
                    return 0;
                }
                /*
                in:
                10 20
                26.389153 -31.339463
                -98.664509 -58.061567
                16.023894 14.489272
                -67.840842 -74.793309
                19.790708 -87.062719
                31.541964 88.441505
                -75.918013 24.526470
                57.288832 -39.033977
                38.274184 -67.446883
                -90.906424 -73.528612
                3 4 4 32.938694 -6.774595 1.000221
                1 2 6 69.965610 -39.563795
                4 3 10 -1.399075 38.282976
                4 6 7 -1.016301 61.080461
                7 9 10 76.549276 22.856189
                7 3 7 -96.501727 5.585970
                6 8 9
                4 2 8 1.215917 -90.918350
                7 4 8 55.948842 38.373278
                1 5 9 -83.845362 -6.619437
                5 6 9 -1.202044 -90.146760
                7 1 4 -81.574047 -56.555229
                3 1 5 75.690820 60.620104 0.980271
                4 5 9 1.512746 89.531420
                5 2 5 0.071305 79.784122
                6 2 4
                1 3 6 90.288492 72.829660
                6 4 4
                7 1 10 -51.991614 -6.732535
                5 5 6 0.087950 71.164056

                out:
                21029.678359
                120220.146461
                -14.172376 -63.985055
                95006.134951
                52111.910474
                2.849235 79.987632
                35.040886 148.667661
                302347.683678
                */
                `}
            />
        </>
    );
}
