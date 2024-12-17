import X from 'src/component/X';
import Confetto from './imm';

export default function Post() {
    return (
        <>
            <X.H1>Click Me!</X.H1>
            <Confetto>
                <X.HighlightBlock>
                    <X.Image src="cheer.gif" />
                </X.HighlightBlock>
            </Confetto>
            <X.H1>关于</X.H1>
            <X.P>敬请期待！</X.P>
        </>
    );
}
