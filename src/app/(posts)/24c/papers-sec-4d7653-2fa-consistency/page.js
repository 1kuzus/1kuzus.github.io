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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>笔记</X.H3>
                <X.H3>认证因素 Authentication Factor</X.H3>
                <X.P noMarginBottom>一般来说有三种：</X.P>
                <X.Uli>知识因素/秘密信息`(knowledge factors)`：原则上仅个人知道的信息，典型的如密码</X.Uli>
                <X.Uli>物品因素/个人财产`(possession factors)`：持有的实体物品，如身份证、卡、U盘等</X.Uli>
                <X.Uli>遗传因素/生理特征`(inherence factors)`：个人生理特征，如指纹、虹膜、人脸等</X.Uli>
                <X.H3>User Journey</X.H3>
                <X.P>@用户旅程[https://en.wikipedia.org/wiki/User_journey]@是用户与某物（通常是软件）交互时的体验。</X.P>
            </X.HighlightBlock>
            <X.H1>摘要</X.H1>
        </>
    );
}
