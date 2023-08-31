import './HighlightBlock.css';

export default function HighlightBlock(props) {
    const {children, bgcolor = 'golden'} = props;
    return <div className={`x-highlightblock${' highlight-background-' + bgcolor}`}>{children}</div>;
}
