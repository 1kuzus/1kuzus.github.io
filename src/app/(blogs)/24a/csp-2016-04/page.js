import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/csp-2016-04/';
export const {metadata} = metas[path];

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>T1 折点计数</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream> 
                using namespace std;
                int n,a[1005];
                int ans;//折点数量 
                int main()
                {
                    cin>>n;
                    for(int i=0;i<n;i++)
                    {
                        cin>>a[i];
                    }
                    if(n>2)
                    {
                        for(int i=2;i<n;i++)
                        {
                            ans+=(a[i]>a[i-1])^(a[i-1]>a[i-2]);
                        }
                    }
                    cout<<ans<<endl; 
                    return 0;
                }
                /*
                in:
                7
                5 4 1 2 3 6 4

                out:
                2
                */
                `}
            />
            <X.H1>T2 俄罗斯方块</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                using namespace std;
                int map[15][10];//方格图 
                int blk[4][4];//下落的方块 
                int offsetj;//板块图案最左边开始的时候是在方格图的哪一列
                //测试下落offseti行时是否合法 
                bool check(int offseti)
                {
                    for(int i=0;i<4;i++)
                        for(int j=0;j<4;j++)
                        {
                            int mapi=i+offseti,mapj=j+offsetj-1;
                            if(blk[i][j]&&(map[mapi][mapj]||mapi>=15))
                                return false;
                        }
                    return true;
                }
                int main()
                {
                    for(int i=0;i<15;i++)
                        for(int j=0;j<10;j++)
                            cin>>map[i][j];
                    for(int i=0;i<4;i++)
                        for(int j=0;j<4;j++)
                            cin>>blk[i][j];
                    cin>>offsetj;
                    int final_offseti=0;
                    for(int offseti=0;offseti<20;offseti++)
                    {
                        if(!check(offseti))
                        {
                            final_offseti=offseti-1;
                            break;
                        }
                    }
                    for(int i=0;i<4;i++)
                    for(int j=0;j<4;j++)
                    {
                        int mapi=i+final_offseti,mapj=j+offsetj-1;
                        if(blk[i][j])
                            map[mapi][mapj]=1;
                    }
                    for(int i=0;i<15;i++)
                    {
                        for(int j=0;j<10;j++)
                            cout<<map[i][j]<<' ';
                        cout<<endl;
                    }
                    return 0;
                }
                /*
                in:
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 1 0 0
                0 0 0 0 0 0 1 0 0 0
                0 0 0 0 0 0 1 0 0 0
                1 1 1 0 0 0 1 1 1 1
                0 0 0 0 1 0 0 0 0 0
                0 0 0 0
                0 1 1 1
                0 0 0 1
                0 0 0 0
                3

                out:
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 0 0 0
                0 0 0 0 0 0 0 1 0 0
                0 0 0 0 0 0 1 0 0 0
                0 0 0 0 0 0 1 0 0 0
                1 1 1 1 1 1 1 1 1 1
                0 0 0 0 1 1 0 0 0 0
                */
                `}
            />
            <X.H1>T3 路径解析</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                #include <stack>
                using namespace std;
                int p;
                string home;//home dir
                string dirs[15];
                //joinSlash合并多个斜线 
                string joinSlash(string str)
                {
                    string ans=str.substr(0,1);
                    char prev=str[0];
                    for(int i=1;i<str.length();i++)
                    {
                        if(str[i]=='/'&&prev=='/') continue;
                        ans+=str[i];
                        prev=str[i];
                    } 
                    return ans;
                }
                //splitSlash输入一个字符串，并按斜杠拆分成字符串数组 
                vector<string> splitSlash(string str)
                {
                    vector<string> parts; 
                    string part;
                    for(int i=1;i<str.length();i++)//跳过第一位'/' 
                    {
                        if(str[i]=='/') parts.push_back(part),part="";
                        else part+=str[i];
                    } 
                    return parts;
                }
                //parseDots处理.和.. 
                string parseDots(string str)
                {
                    string ans;
                    vector<string> str_parts=splitSlash(str);
                    stack<string> ans_parts;//最终组成答案的路径栈，.会被忽略，..会和上一级目录抵消 
                    for(auto part:str_parts)
                    {
                        if(part==".") continue;
                        else if(part==".."&&!ans_parts.empty())ans_parts.pop(); 
                        else if(part=="..") continue;//根目录的上一级目录是它本身
                        else ans_parts.push(part);
                    }
                    while(!ans_parts.empty())
                    {
                        string part=ans_parts.top();
                        ans_parts.pop();
                        ans="/"+part+ans;
                    }
                    //如果结果是空，说明是根目录 
                    return ans.length()?ans:"/";
                } 
                int main()
                {
                    cin>>p>>home;
                    getchar();
                    home=joinSlash(home+"/");//不确定输入的格式，对当前目录合并一次斜线，并保证当前目录以'/'结尾 
                    for(int i=0;i<p;i++)
                    {
                        getline(cin,dirs[i]);
                    }
                    for(int i=0;i<p;i++)
                    {
                        //若路径为空字符串，则正规化操作的结果是当前目录
                        if(!dirs[i].length())
                        {
                            cout<<parseDots(joinSlash(home))<<endl;
                            continue;
                        }

                        //1.合并斜线 
                        string str=joinSlash(dirs[i]+"/");//保证输入路径以'/'结尾，方便split函数处理 

                        //2.得到最终的绝对路径，但是不处理.和.. 
                        bool isAbsPath=(str[0]=='/');//是否为绝对路径 
                        if(!isAbsPath) str=home+str;

                        //3.处理.和.. 
                        str=parseDots(str);

                        cout<<str<<endl;
                    }
                    return 0;
                }
                /*
                in:
                7
                /d2/d3////
                /d2/d4/f1
                ../d4/f1
                /d1/./f1
                /d1///f1
                /d1/
                ///
                /d1/../../d2

                out:
                /d2/d4/f1
                /d2/d4/f1
                /d1/f1
                /d1/f1
                /d1
                /
                /d2

                in:
                4
                /
                ../.././dir1/

                /../.././dir1/
                /dir2////../file3

                out:
                /dir1
                /
                /dir1
                /file3
                */
                `}
            />
            <X.H1>T4 游戏</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <cstring>
                #include <queue>
                using namespace std;
                int n,m,t;
                int dir[5]={0,1,0,-1,0};//相邻两个元素组成一对上/右/下/左方向 
                int safe[105][105][2];
                inline bool isSafe(int i,int j,int step)
                {
                    return
                        safe[i][j][0]==safe[i][j][1]&&safe[i][j][0]==0||
                        !(safe[i][j][0]<=step&&step<=safe[i][j][1]);
                }
                struct POS{
                    int i,j,step;//走到这个地方需要的步数 
                };
                queue<POS> q;
                int max_step;//维护已经出队的最大step值 
                int visit[105][105];//使得对于同一step值，BFS过程加入队列的元素互不相同 
                int main()
                {
                    cin>>n>>m>>t;
                    for(int i=0;i<t;i++)
                    {
                        //第r行第c列的方格在第a个时刻到第b个时刻之间是危险的，包括a和b，游戏开始时的时刻为0
                        int r,c,a,b;
                        cin>>r>>c>>a>>b;
                        safe[r-1][c-1][0]=a,safe[r-1][c-1][1]=b;
                    }
                    q.push((POS){0,0,0});
                    while(!q.empty())
                    {
                        POS cur=q.front();
                        q.pop();
                        //终止条件 
                        if(cur.i==n-1&&cur.j==m-1)
                        {
                            cout<<cur.step<<endl;
                            break;
                        }
                        //当max_step与队首元素的step不一致时(cur.step==max_step+1)，说明所有step<=max_step的状态都考虑完了 
                        //此时应该重置visit，并更新max_step为cur.step
                        if(max_step!=cur.step)
                        {
                            max_step=cur.step;
                            memset(visit,0,sizeof(visit));
                        }
                        for(int i=0;i<4;i++)
                        {
                            int di=dir[i],dj=dir[i+1];
                            int new_i=cur.i+di,new_j=cur.j+dj;
                            if(0<=new_i&&new_i<n&&0<=new_j&&new_j<m)
                            {
                                if(!visit[new_i][new_j]&&isSafe(new_i,new_j,cur.step+1))
                                {
                                    visit[new_i][new_j]=1;
                                    q.push((POS){new_i,new_j,cur.step+1});
                                }
                            }
                        }
                    }
                    return 0;
                }
                /*
                in:
                3 3 3
                2 1 1 1
                1 3 2 10
                2 2 2 10

                out:
                6
                */
                `}
            />
        </>
    );
}
