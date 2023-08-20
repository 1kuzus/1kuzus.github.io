import './CodeBlock.css';

export default function CodeBlock(props) {
    const {language, code} = props;
    return (
        <div className="x-codeblock">
            <pre>
                <code className={`lang-${language}`}>{code}</code>
            </pre>
        </div>
    );
}
