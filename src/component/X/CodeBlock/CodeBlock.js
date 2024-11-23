import Prism from 'prismjs';
import CopyButton from './CopyButton';
import {assert} from 'src/utils/utils';
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
import 'src/assets/prismjs/prism-asm8086';
import './CodeBlock.css';

const languageNameMap = {
    c: 'C',
    cpp: 'C++',
    jsx: 'JSX',
    tsx: 'TSX',
    php: 'PHP',
    sql: 'SQL',
    java: 'Java',
    perl: 'Perl',
    bash: 'Bash',
    python: 'Python',
    markdown: 'Markdown',
    js: 'JavaScript',
    ts: 'TypeScript',
    text: 'Plain Text',
    html: 'HTML',
    css: 'CSS',
    asm8086: 'ASM8086',
};

export default function CodeBlock(props) {
    const {language, code, highlightLines, diffRemovedLines, diffAddedLines} = props;
    assert(languageNameMap[language], 'unsupported language: ' + language);
    //处理代码行，处理空白，统一缩进
    let lines = code.split('\n').map((line) => line.trimRight());
    if (!lines[0]) lines = lines.slice(1);
    const indent = lines[0].length - lines[0].trimStart().length;
    lines = lines.map((line) => line.slice(indent));
    //将普通高亮、diff增加、diff删除合并为三元组[start:number,end:number,type:'n'|'r'|'a']
    const processLines = (ls, t) =>
        ls
            ? ls.split(',').map((i) => (i.includes('-') ? [i.split('-')[0], +i.split('-')[1] + 1, t] : [i, +i + 1, t]))
            : [];
    const allStartEnd = [
        ...processLines(highlightLines, 'n'),
        ...processLines(diffRemovedLines, 'r'),
        ...processLines(diffAddedLines, 'a'),
    ];
    allStartEnd.sort((a, b) => a[0] - b[0]);
    //检验区间是否重叠
    for (let i = 0; i < allStartEnd.length - 1; i++) {
        assert(
            allStartEnd[i][1] <= allStartEnd[i + 1][0],
            'highlight lines range overlap: ' + allStartEnd[i].slice(0, 2) + ' and ' + allStartEnd[i + 1].slice(0, 2)
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
            <div className="x-codeblock-header">
                <div className="x-codeblock-header-language">{languageNameMap[language]}</div>
                <CopyButton className="x-codeblock-header-copy" text={lines.join('\n')} />
            </div>
            <pre
                style={{
                    background: allStartEnd.length ? backgroundStyle : null,
                }}
            >
                <code dangerouslySetInnerHTML={{__html: highlightedCode}} />
            </pre>
        </div>
    );
}
