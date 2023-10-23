import {useLayoutEffect, useRef} from 'react';
import Prism from 'prismjs';
import './CodeBlock.css';

export default function CodeBlock(props) {
    const elementRef = useRef();
    const {language, code} = props;

    let lines = code.split('\n').map((line) => line.trimRight());
    if (!lines[0]) lines = lines.slice(1);
    const indent = lines[0].length - lines[0].trimStart().length;
    lines = lines.map((line) => line.slice(indent));

    useLayoutEffect(() => {
        Prism.highlightElement(elementRef.current);
    }, [code]);

    return (
        <div className="x-codeblock">
            <pre>
                <code className={language && `lang-${language}`} ref={elementRef}>
                    {lines.join('\n')}
                </code>
            </pre>
        </div>
    );
}

