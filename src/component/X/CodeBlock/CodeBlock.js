import './CodeBlock.css';

export default function CodeBlock(props) {
    const {language, code} = props;

    let lines = code.split('\n').map((line) => line.trimRight());
    if (!lines[0]) lines = lines.slice(1);
    const indent = lines[0].length - lines[0].trimStart().length;
    lines = lines.map((line) => line.slice(indent));

    return (
        <div className="x-codeblock">
            <pre>
                <code className={language && `lang-${language}`}>{lines.join('\n')}</code>
            </pre>
        </div>
    );
}
