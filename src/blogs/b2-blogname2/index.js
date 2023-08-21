import X from '../../component/X';
import './index.css';

export default function Testblog() {
    return (
        <X.BlogWrapper>
            <X.Title>测试Blog</X.Title>
            <X.H1>一级标题</X.H1>
            <X.H2>二级标题</X.H2>
            <X.P>
                这里是一句普通的文本，你可以使用`\`\``符号包裹内容从而实现`像这样`的高亮效果。你可能会怀疑`\``这个符号是如何展示在屏幕上的。\n答案是使用`\\\``。
                同理打出`\\`需要在实际编写`blog html`时写`\\\\`。\n `单独一行的高亮块`\n
                这是一个指向@`百度`[https://www.baidu.com]@的超链接，格式为`\@百度[https://www.baidu.com]\@`。同理需要使用`\\\@`打出`\@`符号。
            </X.P>
            <X.H2>在 class 组件中声明 ref</X.H2>
            <X.P>
                要在@class组件[https://react.docschina.org/reference/react/Component]@中声明
                一个ref，请调用`createRef`并将其结果分配给`class`字段。\n 如果你现在将`{'ref={this.inputRef}'}`传递
                给JSX中的`{'<input>'}`，React将把input的DOM节点赋值给`this.inputRef.current`。
            </X.P>
            <X.P highlightBackground="golden">
                这里是一句普通的文本，你可以使用`\`\``符号包裹内容从而实现`像这样`的高亮效果。你可能会怀疑`\``这个符号是如何展示在屏幕上的。\n答案是使用`\\\``。
                同理打出`\\`需要在实际编写`blog html`时写`\\\\`。\n `单独一行的高亮块`\n
                这是一个指向@`百度`[https://www.baidu.com]@的超链接，格式为`\@百度[https://www.baidu.com]\@`。同理需要使用`\\\@`打出`\@`符号。
            </X.P>
            <X.P>
                当*橘子和苹果*一起成群结队地在田野里玩耍，阳光洒在他们身上，照得他们*光芒四射*。小兔子从旁边跳过，欢快地蹦蹦跳跳，像是在为他们的游戏加入了一份欢乐。
                不远处，一朵朵绚丽多彩的花朵竞相绽放，为这个美丽的场景增添了一抹生机与色彩。在这个宁静的时刻，大自然似乎也在为这些生命欢呼，诉说着生命的美好与活力。\n
                这段话里的加粗效果是用`\*`打出来的。
            </X.P>
            <X.P highlightBackground="red">
                我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
            </X.P>
            <X.CodeBlock language="python" code={`      with open("./tool.js","r") as f:`} />
            <X.CodeBlock language="python" code={`      
                with open("./tool.js","r")      
                                        
                as f:`} />
            <X.CodeBlock
                language="python"
                code={`
                import requests
                import json

                DEBUG=1
                bili_video_link="https://www.bilibili.com/video/BV1bg4y51212R6"
                if DEBUG:
                    print(bili_video_link)

                with open("./tool.js","r") as f:
                    jscode=f.read()
                tool_js=execjs.compile(jscode)

                #获得两个加密参数
                enc_link=tool_js.eval(f"getEncLink('{bili_video_link}')")
                accept_patch=tool_js.eval(f"getAcceptPatch('{bili_video_link}')")

                with requests.Session() as session:
                    session.get("https://bilibili.iiilab.com/")
                    resp=session.post(url="https://bilibili.iiilab.com/media",
                                    cookies={"lab0626":"1"},
                                    json={"link":enc_link},
                                    headers={
                                        "Accept-Patch":accept_patch,
                                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
                                    })
                    if DEBUG:
                        print(resp.text)

                if resp.status_code==200:
                    result_data=resp.json()["data"]
                    dec_data=tool_js.eval(f"getDecData('{result_data}')")
                    dec_data=json.loads(dec_data)
                    if DEBUG:
                        print(dec_data)
                    print("title",dec_data["text"])
                    print("url",dec_data["medias"][0]["resource_url"])
                    print("cover",dec_data["medias"][0]["preview_url"])
                `}
            />
            <X.CodeBlock
                language="css"
                code={`
                @font-face {
                    font-family: Chunkfive;
                    src: url('Chunkfive.otf');
                }

                body,
                .usertext {
                    color: #f0f0f0;
                    background: #600;
                    font-family: Chunkfive, sans;
                    --heading-1: 30px/32px Helvetica, sans-serif;
                }

                @import url(print.css);
                @media print {
                    a[href^='http']::after {
                        content: attr(href);
                    }
                }
                `}
            />
            <X.CodeBlock
                language="html"
                code={`
                <div id="header">
                    <img id="header-logo" src={LogoIcon} onClick={() => navigate('/')} />
                    <button onClick={() => setIsDarkMode(!isDarkMode)}>go to {isDarkMode ? 'light' : 'dark'}</button>
                    <a href="https://github.com/1kuzus" target="_blank">
                        <div id="header-github-bg">
                            <img id="header-github" src={GithubIcon} />
                        </div>
                    </a>
                </div>
                `}
            />
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <stdlib.h>
                #include <ctime>
                using namespace std;
                int n=12,a[1000]={19,1,13,5,6,13,17,3,2,4,19,5};

                int getrand(int l,int r)
                {
                    return rand()%(r-l+1)+l;
                }

                void swap(int i,int j)
                {
                    int tmp=a[i];
                    a[i]=a[j];
                    a[j]=tmp;
                    return;
                }

                int Partition(int l,int r)
                {
                    //swap(getrand(l,r),r);//随机化 
                    int x=a[r];//选最后一项作为主元
                    int lp=l,rp=l;
                    for(;rp<r;rp++)
                    {
                        if(a[rp]<x)
                        {
                            swap(lp,rp);
                            lp++;
                        }
                    }
                    swap(lp,r);
                    return lp;
                }

                void QuickSort(int l,int r)
                {
                    if(l<r)
                    {
                        int m=Partition(l,r);
                        QuickSort(l,m-1);
                        QuickSort(m+1,r);
                    }
                    else return; 
                }

                int main()
                {
                    srand(time(0));
                    QuickSort(0,n-1);
                    for(int i=0;i<n;i++)
                    {
                        cout<<a[i]<<" ";
                    }
                    cout<<endl;
                    return 0;
                }
                `}
            />
            <X.CodeBlock
                language="c"
                code={`
                #include <iostream>
                #include <stdlib.h>
                #include <ctime>
                using namespace std;
                int n=12,a[1000]={19,1,13,5,6,13,17,3,2,4,19,5};

                int getrand(int l,int r)
                {
                    return rand()%(r-l+1)+l;
                }

                void swap(int i,int j)
                {
                    int tmp=a[i];
                    a[i]=a[j];
                    a[j]=tmp;
                    return;
                }

                int Partition(int l,int r)
                {
                    //swap(getrand(l,r),r);//随机化 
                    int x=a[r];//选最后一项作为主元
                    int lp=l,rp=l;
                    for(;rp<r;rp++)
                    {
                        if(a[rp]<x)
                        {
                            swap(lp,rp);
                            lp++;
                        }
                    }
                    swap(lp,r);
                    return lp;
                }

                void QuickSort(int l,int r)
                {
                    if(l<r)
                    {
                        int m=Partition(l,r);
                        QuickSort(l,m-1);
                        QuickSort(m+1,r);
                    }
                    else return; 
                }

                int main()
                {
                    srand(time(0));
                    QuickSort(0,n-1);
                    for(int i=0;i<n;i++)
                    {
                        cout<<a[i]<<" ";
                    }
                    cout<<endl;
                    return 0;
                }
                `}
            />
        </X.BlogWrapper>
    );
}
