import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup-templating';
import './CodeBlock.css';

export default function CodeBlock(props) {
    const {language, code, highlightLines} = props;
    //处理代码行，处理空白，统一缩进
    let lines = code.split('\n').map((line) => line.trimRight());
    if (!lines[0]) lines = lines.slice(1);
    const indent = lines[0].length - lines[0].trimStart().length;
    lines = lines.map((line) => line.slice(indent));
    //处理高亮行，此处默认line-height=24px
    const highlightStartEnd = highlightLines
        ? highlightLines
              .split(',')
              .map((i) => (i.includes('-') ? [i.split('-')[0] - 1, +i.split('-')[1]] : [i - 1, +i]))
        : [];
    const backgroundStyle =
        'linear-gradient(180deg' +
        highlightStartEnd
            .map(
                ([start, end]) =>
                    `, transparent ${start * 24}px, ` +
                    `var(--bg-transparent-golden) ${start * 24}px ${end * 24}px, ` +
                    `transparent ${end * 24}px`
            )
            .join('') +
        ')';
    const highlightedCode = Prism.highlight(lines.join('\n'), Prism.languages[language], language);
    return (
        <div className="x-codeblock">
            <pre
                style={{
                    background: highlightLines ? backgroundStyle : null,
                }}
            >
                <code dangerouslySetInnerHTML={{__html: highlightedCode}} />
            </pre>
        </div>
    );
}

//todo: font-family: Menlo,DejaVu Sans Mono,Liberation Mono,Consolas,Ubuntu Mono,Courier New,andale mono,lucida console,monospace;
