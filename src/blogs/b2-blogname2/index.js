import {useEffect} from 'react';
import './index.css';
import 'highlight.js/styles/base16/3024.css';
import hljs from 'highlight.js';
const markdown = `
    const variable = 'hello';

    function getProfile(id: string): {
      name: string; address: string, photo: string
    } {
      return {
        name: 'ben', address: "ben's house", photo: "/ben.png"
      };
    }
    import execjs
import requests
import json

DEBUG=1
# BV="BV1FV4y157Zx"
# p=13
# bili_video_link=f"https://www.bilibili.com/video/{BV}{'' if p<1 else f'?p={p}'}"
bili_video_link="https://www.bilibili.com/video/BV1bg4y137R6"
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
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div className="conta">
            <link rel="stylesheet" href="..\..\..\"></link>
            <h1>blog2</h1>
            <pre>
                <code className="language-html">
                    const a=123 let class= b={2}
                </code>
            </pre>

            <pre>
                <code className="language-python">{markdown}</code>
            </pre>
            <div className='hello'>123</div>
        </div>
    );
}
