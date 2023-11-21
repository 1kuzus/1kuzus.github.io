import X from '@/component/X';
import './index.css';

function Version() {
    return (
        <X.HighlightBlock>
            <X.FlexRow>
                <X.Image src={require('./cheer.gif')} width="150" />
                <div id="b0001-version-text">Version 0.1</div>
                <X.Image src={require('./dance.gif')} width="126" />
            </X.FlexRow>
        </X.HighlightBlock>
    );
}

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>更新日志</X.Title>
            <Version />
        </X.BlogWrapper>
    );
}
