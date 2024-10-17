import './HighlightBlock.css';

export default function HighlightBlock(props) {
    const {children, background = 'golden'} = props;
    return <div className={`x-highlightblock${' highlight-background-' + background}`}>{children}</div>;
}
