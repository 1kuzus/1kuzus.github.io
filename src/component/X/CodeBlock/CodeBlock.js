import {useEffect} from 'react';
// import 'highlight.js/styles/base16/3024.css';
import hljs from 'highlight.js';
// import './BlogWrapper.css';

export default function CodeBlock(props) {
    const {children} = props;
    return (
        <div className="codeblock">
            <pre>
                <code>{children}</code>
            </pre>
        </div>
    );
}
