import X from 'src/component/X';
import metas from 'src/app/_metas';
import Confetto from './imm';

const path = '/24d/about-interactive-multimedia/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
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
