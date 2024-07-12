import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/csp-2018-03/';
export const {metadata} = metas[path];

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>T1 跳一跳</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                using namespace std;
                int cur,score;
                int d=2;//下一次如果cur=2(跳到中心)，加的分数 
                int main()
                {
                    while(1)
                    {
                        cin>>cur;
                        if(!cur) break;
                        if(cur==1)
                        {
                            score+=1;
                            d=2;
                        }
                        else if(cur==2)
                        {
                            score+=d;
                            d+=2;
                        } 
                    }
                    cout<<score<<endl;
                    return 0;
                } 
                /*
                in:
                1 1 2 2 2 1 1 2 2 0

                out:
                22
                */
                `}
            />
            <X.H1>T2 碰撞的小球</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cstring>
                using namespace std;
                int n,l,t;
                int a[105][2];//a[i][0]表示当前位置，a[i][1]表示当前速度(从1计数)
                int visit[1005];//记录坐标对应的小球编号
                int main()
                {
                    cin>>n>>l>>t;
                    for(int i=1;i<=n;i++)
                    {
                        cin>>a[i][0];
                        a[i][1]=1;
                    }
                    for(int i=0;i<t;i++)
                    {
                        for(int j=1;j<=n;j++)
                        {
                            a[j][0]+=a[j][1];
                            //触碰边界 
                            if(a[j][0]==l) a[j][1]=-1;
                            else if(a[j][0]==0) a[j][1]=1;
                        }
                        //判断小球碰撞
                        //如果有一个整数坐标上存在两个小球，就发生碰撞了 
                        memset(visit,0,sizeof(visit));
                        for(int j=1;j<=n;j++)
                        {
                            if(!visit[a[j][0]])
                            {
                                visit[a[j][0]]=j;
                            }
                            else
                            {
                                //检测到碰撞了，发生碰撞的球编号是j和visit[a[j][0]] 
                                a[j][1]=-a[j][1];
                                a[visit[a[j][0]]][1]=-a[visit[a[j][0]]][1];
                            }
                        }
                    }
                    for(int i=1;i<=n;i++)
                    {
                        cout<<a[i][0]<<' ';
                    }
                    return 0;
                }
                /*
                in:
                3 10 5
                4 6 8

                out:
                7 9 9

                in:
                10 22 30
                14 12 16 6 10 2 8 20 18 4

                out:
                6 6 8 2 4 0 4 12 10 2
                */
                `}
            />
            <X.H1>T3 URL映射</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                int n,m;
                string pi,ri,qi;
                vector<string> p,r,q;//规则和名字 
                //输入一个字符串，并按斜杠拆分成字符串数组 
                vector<string> splitSlash(string str)
                {
                    vector<string> parts; 
                    string part;
                    for(int i=1;i<str.length();i++)//跳过第一位'/' 
                    {
                        if(str[i]=='/') parts.push_back(part),part="";
                        else part+=str[i];
                    }
                    if(part.length()) parts.push_back(part);//最后一位不是'/'的情况 
                    return parts;
                }
                bool isInt(string str)
                {
                    bool ok=true;
                    for(auto ch:str) ok&=('0'<=ch&&ch<='9'); 
                    return ok;
                }
                bool isValid(string str)
                {
                    bool ok=true;
                    for(auto ch:str) ok&=
                        ('0'<=ch&&ch<='9')||
                        ('a'<=ch&&ch<='z')||
                        ('A'<=ch&&ch<='Z')||
                        ch=='-'||ch=='_'||ch=='.'||ch=='/';
                    return ok;
                }
                bool isStr(string str)
                {
                    return isValid(str)&&str.find('/')==-1;
                }
                //删除字符串前导0 
                string trimZero(string str)
                {
                    int i=0;
                    for(auto ch:str)
                    {
                        if(ch=='0') i++;
                        else break;
                    }
                    if(i==str.length()) return "0";//如果全是0，保留一个0 
                    return str.substr(i);
                }
                //查询q是否匹配规则p，如果成果就返回r和参数 
                vector<string> checkMatch(string q,string p,string r)
                {
                    vector<string> q_parts=splitSlash(q);
                    vector<string> p_parts=splitSlash(p);
                    vector<string> ans;
                    if(!isValid(q)) return ans;//查询路径q不合法 
                    if(q[q.length()-1]=='/'^p[p.length()-1]=='/') return ans;//规则路径p和查询路径q最后一位，如果一个是'/'另一个不是'/'，认为一定不匹配 
                    if(p_parts.size()>q_parts.size()) return ans;//规则路径p深度大于查询路径q，显然不匹配 
                    bool hasPath=false;//规则中存在<path> 
                    int i;
                    for(i=0;i<p_parts.size();i++)
                    {
                        bool ok=true;
                        if(p_parts[i]=="<int>")
                        {
                            if(isInt(q_parts[i]))
                            {
                                ans.push_back(trimZero(q_parts[i]));
                            }
                            else ok=false;
                        }
                        else if(p_parts[i]=="<str>")
                        {
                            if(isStr(q_parts[i]))
                            {
                                ans.push_back(q_parts[i]);
                            }
                            else ok=false;
                        }
                        else if(p_parts[i]=="<path>")
                        {
                            string rest;
                            for(int j=i;j<q_parts.size();j++)
                            {
                                rest+=q_parts[j];
                                //特殊处理最后一位的'/' 
                                if(j!=q_parts.size()-1)
                                {
                                    rest+="/";
                                }
                                else if(q[q.length()-1]=='/')
                                {
                                    rest+="/";
                                }
                            }
                            ans.push_back(rest);
                            hasPath=true;
                        }
                        else
                        {
                            ok=(q_parts[i]==p_parts[i]);
                        }
                        if(!ok)
                        {
                            ans.clear();
                            return ans;
                        }
                    }
                    //如果规则不含<path>，则不允许规则路径p深度不等于查询路径q
                    if(!hasPath&&p_parts.size()!=q_parts.size())
                    {
                        ans.clear();
                        return ans;
                    }
                    ans.emplace(ans.begin(),r);
                    return ans;
                }
                int main()
                {
                    cin>>n>>m;
                    for(int i=0;i<n;i++)
                    {
                        cin>>pi>>ri;
                        p.push_back(pi);
                        r.push_back(ri);
                    }
                    
                    for(int i=0;i<m;i++)
                    {
                        cin>>qi;
                        q.push_back(qi);
                    }
                    for(auto qi:q)
                    {
                        bool hasMatch=false;
                        for(int j=0;j<n;j++)
                        {
                            vector<string> ans=checkMatch(qi,p[j],r[j]);
                            if(ans.size())
                            {
                                hasMatch=true;
                                for(auto s:ans)
                                {
                                    cout<<s<<' ';
                                }
                                cout<<endl;
                                break;
                            }
                        }
                        if(!hasMatch) cout<<"404\n";
                    }
                    return 0;
                }
                /*
                in:
                5 4
                /articles/2003/ special_case_2003
                /articles/<int>/ year_archive
                /articles/<int>/<int>/ month_archive
                /articles/<int>/<int>/<str>/ article_detail
                /static/<path> static_serve
                /articles/2004/
                /articles/1985/09/aloha/
                /articles/hello/
                /static/js/jquery.js

                out:
                year_archive 2004
                article_detail 1985 9 aloha
                404
                static_serve js/jquery.js

                in:
                5 3
                /a/<int>/ a_int_slash
                /a/<int> a_int
                /a/<str> a_str
                /b/<str> b_str
                /b/<int> b_int
                /a/000
                /a/000/
                /b/000

                out:
                a_int 0
                a_int_slash 0
                b_str 000
                */
                `}
            />
            <X.H1>T4 棋局评估</X.H1>
            <X.P>`Minimax`搜索问题。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <map>
                using namespace std;
                int n;
                map<string,int> m;
                int max(int x,int y){return x>y?x:y;}
                int min(int x,int y){return x<y?x:y;}
                //判断一个状态是否是终止状态，返回评估得分；如果不是终止状态返回100 
                int getScore(string state)
                {
                    int ans=100,cnt_0=0;
                    for(auto i:state) cnt_0+=i=='0';
                    for(auto ch:"12")
                    {
                        if(
                            (state[0]==ch&&state[1]==ch&&state[2]==ch)||
                            (state[3]==ch&&state[4]==ch&&state[5]==ch)||
                            (state[6]==ch&&state[7]==ch&&state[8]==ch)||
                            (state[0]==ch&&state[3]==ch&&state[6]==ch)||
                            (state[1]==ch&&state[4]==ch&&state[7]==ch)||
                            (state[2]==ch&&state[5]==ch&&state[8]==ch)||
                            (state[0]==ch&&state[4]==ch&&state[8]==ch)||
                            (state[2]==ch&&state[4]==ch&&state[6]==ch)
                        )
                        {
                            ans=(cnt_0+1)*(ch=='1'?1:-1);
                        }
                    }
                    if(ans==100&&cnt_0==0) return 0;//没有胜方也没有空格，说明棋盘下满，是平局 
                    else return ans;
                }
                int generateTree_dfs(string state,bool isAlice)
                {
                    int score=getScore(state);
                    if(score!=100)
                    {
                        m[state]=score;
                        return score;
                    }
                    for(int i=0;i<state.length();i++)
                    {
                        if(state[i]=='0')
                        {
                            string new_state=state;
                            if(isAlice)
                            {
                                new_state[i]='1';
                                //下一步是Bob走，一开始假定Alice必胜，通过DFS逐渐找到Bob的最优解，降低Alice最大期望得分 
                                m[new_state]=100;
                                m[state]=max(m[state],generateTree_dfs(new_state,false));
                            }
                            else
                            {
                                new_state[i]='2';
                                //同理... 
                                m[new_state]=-100;
                                m[state]=min(m[state],generateTree_dfs(new_state,true));
                            }
                        }
                    }
                    return m[state];
                }
                void generateTree(string init_state)
                {
                    m[init_state]=-100;
                    generateTree_dfs(init_state,true);
                    return;
                }
                int main()
                {
                    generateTree("000000000");
                    cin>>n;
                    for(int i=0;i<n;i++)
                    {
                        char ch; 
                        string state;
                        for(int j=0;j<9;j++)
                        {
                            cin>>ch;
                            state+=ch;
                        }
                        cout<<m[state]<<endl;
                    }
                    return 0;
                }
                /*
                in:
                3
                1 2 1
                2 1 2
                0 0 0
                2 1 1
                0 2 1
                0 0 2
                0 0 0
                0 0 0
                0 0 0

                out:
                3
                -4
                0
                */
                `}
            />
        </>
    );
}
