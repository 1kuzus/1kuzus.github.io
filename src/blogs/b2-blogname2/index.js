import {useEffect} from 'react';
import './index.css';
import 'highlight.js/styles/base16/3024.css';
import hljs from 'highlight.js';
import X from '../../component/X';

export default function Testblog() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div className="conta">
            <X.Title>汉字36pxbt你好hello</X.Title>
            <X.H1>汉字36pxbt你好hello</X.H1>
            <X.H2>汉字36pxbt你好hello</X.H2>
            <X.H3>汉字36pxbt你好hello</X.H3>
            <X.Highlight>
                这是一行文本
                我想要另一行文本
            </X.Highlight>
            <div>普通的 文本哈哈哈我哈哈哈普通的文本普通平静的，文本！！！</div>
            <link rel="stylesheet" href="..\..\..\"></link>
            <h1>blog2</h1>
            <pre>
                <code className="language-html">const a=123 let class= b={2}</code>
            </pre>

            <div className="hello">123</div>
        </div>
    );
}
