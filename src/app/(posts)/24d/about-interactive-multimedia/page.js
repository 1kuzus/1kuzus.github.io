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
            <Confetto>
                <X.HighlightBlock>
                    <X.Image src="cheer.gif" />
                    <X.P>Hello, world!</X.P>
                    <X.P>rm sha256</X.P>
                    <X.P>flexrow pad 8px</X.P>
                </X.HighlightBlock>
            </Confetto>
        </>
    );
}
