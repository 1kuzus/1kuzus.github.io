import {assert} from 'src/utils/utils';
import './HighlightBlock.css';

export default function HighlightBlock(props) {
    const {children, background = 'golden'} = props;
    assert(
        ['golden', 'red', 'gray', 'blue', 'green'].includes(background),
        'unsupported highlight background: ' + background,
    );
    return <div className={`x-highlightblock highlight-background-${background}`}>{children}</div>;
}
