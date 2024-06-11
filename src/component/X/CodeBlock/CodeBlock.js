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
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup-templating';
import './CodeBlock.css';

export default function CodeBlock(props) {
    const {language, code, highlightLines, diffRemovedLines, diffAddedLines} = props;
    //处理代码行，处理空白，统一缩进
    let lines = code.split('\n').map((line) => line.trimRight());
    if (!lines[0]) lines = lines.slice(1);
    const indent = lines[0].length - lines[0].trimStart().length;
    lines = lines.map((line) => line.slice(indent));
    //将普通高亮、diff增加、diff删除合并为三元组[start:number,end:number,type:'n'|'r'|'a']
    const processLines = (ls, t) =>
        ls
            ? ls.split(',').map((i) => (i.includes('-') ? [i.split('-')[0] - 1, +i.split('-')[1], t] : [i - 1, +i, t]))
            : [];
    const allStartEnd = [
        ...processLines(highlightLines, 'n'),
        ...processLines(diffRemovedLines, 'r'),
        ...processLines(diffAddedLines, 'a'),
    ];
    allStartEnd.sort((a, b) => a[0] - b[0]);
    //检验区间是否重叠
    for (let i = 0; i < allStartEnd.length - 1; i++) {
        if (allStartEnd[i][1] > allStartEnd[i + 1][0])
            throw new Error(
                '[in X.Codeblock]: highlight lines range overlap: ' +
                    allStartEnd[i].slice(0, 2) +
                    ' and ' +
                    allStartEnd[i + 1].slice(0, 2)
            );
    }
    //渲染背景
    const colorMap = {
        n: 'var(--bg-transparent-golden)',
        r: 'var(--bg-transparent-red)',
        a: 'var(--bg-transparent-green)',
    };
    const backgroundStyle =
        'linear-gradient(180deg' +
        allStartEnd
            .map(
                ([start, end, type]) =>
                    `, transparent ${start * 24}px, ` +
                    `${colorMap[type]} ${start * 24}px ${end * 24}px, ` +
                    `transparent ${end * 24}px`
            )
            .join('') +
        ')';
    const highlightedCode = Prism.highlight(lines.join('\n'), Prism.languages[language], language);
    return (
        <div className="x-codeblock">
            {/* <div className="x-codeblock-header">123</div> */}
            <pre
                style={{
                    background: allStartEnd.length ? backgroundStyle : null,
                    // paddingLeft: n 'em',
                }}
            >
                <code dangerouslySetInnerHTML={{__html: highlightedCode}} />
                {/*
                todo: support +/- and line number
                 <div>
                    1322
                    <br />
                    1323
                    {placeholder}
                </div> */}
            </pre>
        </div>
    );
}

//todo: font-family: Menlo,DejaVu Sans Mono,Liberation Mono,Consolas,Ubuntu Mono,Courier New,andale mono,lucida console,monospace;
