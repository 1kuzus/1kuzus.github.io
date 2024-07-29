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
                <X.P>@用户旅程[https://en.wikipedia.org/wiki/User_journey]@是用户与某物（通常是软件）交互时的体验，或为实现某个目的需要经历的操作过程。</X.P>
            </X.HighlightBlock>
            <X.H1>Abstract</X.H1>
            <X.H1>6.Comparison Factors</X.H1>
            <X.P>`22`个比较因子。</X.P>
            <X.H2>Factors for Discovery</X.H2>
            <X.Table
                fromJSX={[
                    ['名称', '满足', '部分满足', '不满足'],
                    ['Promotion. 宣传性', '网站在创建账户或登录后\\n立刻清晰地引导2FA流程', '以不那么显眼的方式，\\n例如footer中的链接提供2FA支持', '需要用户自己发现2FA设置'],
                    ['Non-Optional. 非可选性', '2FA设置是强制性的，否则\\n无法创建账户或创建后无法访问完整功能', '/', '2FA设置是可选的'],
                    ['Common-Naming-and-Location.\\n命名和位置的常规性', '2FA设置的名称和位置较为常规', '名称和位置有一个不常规', '名称和位置都不常规'],
                ]}
            />
            <X.H2>Factors for Education</X.H2>
            <X.Table
                fromJSX={[
                    ['名称', '满足', '部分满足', '不满足'],
                    ['Descriptive-Notification. 描述性通知', '网站在用户确认启用2FA前，\\n简要地描述什么是2FA，\\n或为什么2FA对用户重要。', '在用户启用2FA后提供描述，\\n但此时用户仍然可以放弃设置', '没有提供对2FA的描述'],
                    ['Additional-Information. 额外信息', '网站提供更详细的关于2FA的说明，\\n例如一个`"了解更多"`链接', '/', '没有额外信息，或链接损坏'],
                ]}
            />
            <X.H2>Factors for Setup</X.H2>
            <X.Table
                fromJSX={[
                    ['名称', '满足', '部分满足', '不满足'],
                    ['Option-Specific-Information.\\n选项详细信息', '网站提供对所有支持的\\n2FA选项的详细信息。', '/', '没有详细的信息但直接开始设置步骤。\\n例如，直接让用户扫描二维码或\\n使用安全密钥，但没有做进一步的解释'],
                    ['Step-Wise-Instructions.\\n循序渐进的指示', '设置2FA时网站提供详细引导', '/', '没有详细引导'],
                    ['Multiselection. 多选', '网站允许用户设置多种2FA选项', '网站提供多种2FA选项，\\n但只允许用户设置一种', '只有一种2FA选项'],
                    ['Grouped-Setting. 集中的设置位置\\n（“多选”至少为`部分满足`）', '用户有一个单一的设置位置\\n来管理他们所有的2FA选项', '/', '和2FA相关的设置项较为分散'],
                    ['No-Enforced-Options. 无强制选项\\n（“多选”至少为`部分满足`）', '用户可以自主选择2FA选项', '/', '例如，用户必须先配置短信验证，\\n然后才能配置其他选项'],
                    ['Selectable-Primary-Option. \\n可以设置主选项\\n（“多选”应为`满足`）', '可以设置主选项', '/', '不支持用户自主选择的主选项'],
                    ['Settings-Changed-Verification. \\n设置变更需认证', '更改2FA设置时用户需要身份认证', '/', '更改2FA设置时用户不需要身份认证'],
                    ['Settings-Changed-Notification. \\n设置变更有通知', '更改2FA设置后用户会收到通过\\n其他渠道的通知，如电子邮件', '/', '更改2FA设置后无通知'],
                    ['Confirm-Successful-Setup. \\n确认成功设置', '网站需要用户确认2FA验证\\n才能成功完成设置，\\n并提供清晰的消息提示', '需要确认但缺失消息', '不需要确认'],
                    ['Informed-2FA-Recovery-Options. \\n专用恢复选项', '网站提供专用恢复选项，\\n并解释为什么这是重要的', '提供此功能，但没有\\n告知用户其重要性', '不提供专用恢复选项'],
                    ['Enforced-2FA-Recovery-Setup. \\n强制设置恢复选项\\n（“专用恢复选项”至少为`部分满足`）', '设置2FA恢复选项是设置\\n2FA过程所必需的', '不是必需，\\n但网站建议用户设置', '由用户自行决定，网站并没有建议'],
                ]}
            />
            <X.H2>Factors for Usage</X.H2>
            <X.Table
                fromJSX={[
                    ['名称', '满足', '部分满足', '不满足'],
                    ['Device-Remembrance. 设备记忆', '网站自动设置设备记忆', '由用户自行决定选择退出，\\n如未选中的复选框被描述为\\n“在此设备上再次询问我”', '由用户自行决定选择加入，\\n如未选中的复选框被描述为\\n“信任此设备”'],
                    ['No-Preselected-Option. 无预选选项\\n（“多选”应为`满足`，\\n“可以设置主选项”应为`不满足`）', '网站在登录时显示所有已配置的2FA选项', '/', '存在对用户不透明的预选'],
                ]}
            />
            <X.H2>Factors for Deactivation</X.H2>
            <X.Table
                fromJSX={[
                    ['名称', '满足', '部分满足', '不满足'],
                    ['Informed-Deactivation. 可停用', '可以停用2FA选项，\\n并且网站会解释这样做的潜在风险', '可以停用2FA选项，\\n但没有进一步的解释或警告', '不允许停用2FA'],
                    ['Deactivation-Verification. 停用需认证\\n（“可停用”至少为`部分满足`）', '停用2FA时用户需要身份认证', '/', '停用2FA时用户不需要身份认证'],
                    ['Deactivation-Notification. 停用有通知\\n（“可停用”至少为`部分满足`）', '停用2FA后用户会收到通过\\n其他渠道的通知，如电子邮件', '/', '停用2FA后无通知'],
                    ['Communicate-Successful-Deactivation.\\n提示成功停用\\n（“可停用”至少为`部分满足`）', '成功停用UI会有清晰的消息提示', '/', '没有相应提示'],
                ]}
            />
        </>
    );
}
