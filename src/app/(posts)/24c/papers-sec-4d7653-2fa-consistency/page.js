import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/papers-sec-4d7653-2fa-consistency/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P noMarginBottom>论文链接：</X.P>
            <X.Uli>@A Systematic Study of the Consistency of Two-Factor Authentication User Journeys on Top-Ranked Websites[https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_s362_paper.pdf]@</X.Uli>
            <X.Uli>@arxiv Extended Version[https://arxiv.org/pdf/2210.09373]@</X.Uli>
        </>
    );
}
