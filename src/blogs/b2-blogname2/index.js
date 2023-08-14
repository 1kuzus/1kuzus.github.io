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
            <X.P>
                `在严格模`式中，为了帮助你找到`意外`的副作用，\`React()`将会调用两次你的渲染函数。不过这仅限于开发环境，并不会影响生产环境。
                如果你的渲染函数是`纯函数`（也应该是），这应该不会影响你的组件逻辑。其中一个调用的结果将被忽略。
                在严格模式中，为了帮助你找到意外的副作用，React将会调用两次你的渲染函数。不过这仅限于开发环境，并不会影响生产环境。如果你的渲染函数是纯函数（也应该是），这应该不会影响你的组件逻辑。其中一个调用的结果将被忽略。
            </X.P>
            <X.P>
                在严格模式中，为了帮助你找到意外的副作用，React将会调用两次你的渲染函数。不过这仅限于开发环境，并不会影响生产环境。如果你的渲染函数是纯函数（也应该是），这应该不会影响你的组件逻辑。其中一个调用的结果将被忽略。
            </X.P>
            <X.P>
                该 `Form` 组件 将 `ref` 传递至 `MyInput`。`MyInput` 组件将该 `ref`` 转发 至{'`<input>`'}{' '}
                浏览器标签。因此，Form 组件可以访问该 {'`<input>`'} DOM 节点并对其调用 `focus()。
                <X.P>123</X.P>
            </X.P>
            <X.P>{'{}'}1</X.P>
            <X.Highlight></X.Highlight>
            <h1>blog2testtest</h1>
            <pre>
                <code className="language-html">const a=123 let class= b={2}</code>
            </pre>

            <div className="hello">123</div>
        </div>
    );
}
