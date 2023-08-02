import {useEffect} from 'react';
import './index.css';
import 'highlight.js/styles/base16/3024.css';
import hljs from 'highlight.js';
import B from '../../component/B';

export default function Testblog() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div className="conta">
            <link rel="stylesheet" href="..\..\..\"></link>
            <h1>blog2</h1>
            <pre>
                <code className="language-html">const a=123 let class= b={2}</code>
            </pre>

            <div className="hello">123</div>
            <B.Title>hello</B.Title>
        </div>
    );
}
