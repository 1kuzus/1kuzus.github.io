import {useEffect} from 'react';
import './index.css';
import hljs from 'highlight.js';
import X from '../../component/X';
const markdown = `
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
`;
export default function Testblog() {
    return (
        <X.BlogWrapper>
            <X.CodeBlock>
                {`
                return (
                    <p
                        className={\`x-p\${highlightBackground ? ' highlight-p highlight-background-' + highlightBackground : ''}\`}
                        dangerouslySetInnerHTML={{__html: htmlContent}}
                    ></p>
                );
                `}
            </X.CodeBlock>
            <X.CodeBlock>
                {`
                #这是python代码
                def f():
                if(4)
                return x;
                `}
            </X.CodeBlock>
            {/* <pre>
                <code className="language-html">const a=123 let class= b={2}</code>
            </pre>*/}
            {/* <pre><code className="language-python">{markdown}</code></pre>  */}
            <pre>
                <code className="language-python">
                    {`
                #这是python代码
                def f():
                if(4)
                return x;
                `}
                </code>
            </pre>
            <pre>
                <code className="language-pyth1on">
                    {`
                #这是python代码
                def f():
                if(4)
                return x;
                `}
                </code>
            </pre>
            {/* <pre><code className="language-python">{`
                // import requests
                // import json

                // DEBUG=1
                // # BV="BV1FV4y41157Zx"
                // # p=13
                // # bili_video_link=f"https://www.bilibili.com/video/{BV}{'' if p<1 else f'?p={p}'}"
                // bili_video_link="https://www.bilibili.com/video/BV1bg4y51212R6"
                // if DEBUG:
                //     print(bili_video_link)

                // with open("./tool.js","r") as f:
                //     jscode=f.read()
                // tool_js=execjs.compile(jscode)

                // #获得两个加密参数
                // enc_link=tool_js.eval(f"getEncLink('{bili_video_link}')")
                // accept_patch=tool_js.eval(f"getAcceptPatch('{bili_video_link}')")

                // with requests.Session() as session:
                //     session.get("https://bilibili.iiilab.com/")
                //     resp=session.post(url="https://bilibili.iiilab.com/media",
                //                     cookies={"lab0626":"1"},
                //                     json={"link":enc_link},
                //                     headers={
                //                         "Accept-Patch":accept_patch,
                //                         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
                //                     })
                //     if DEBUG:
                //         print(resp.text)

                // if resp.status_code==200:
                //     result_data=resp.json()["data"]
                //     dec_data=tool_js.eval(f"getDecData('{result_data}')")
                //     dec_data=json.loads(dec_data)
                //     if DEBUG:
                //         print(dec_data)
                //     print("title",dec_data["text"])
                //     print("url",dec_data["medias"][0]["resource_url"])
                //     print("cover",dec_data["medias"][0]["preview_url"])
            `}</code></pre> */}
        </X.BlogWrapper>
    );
}
