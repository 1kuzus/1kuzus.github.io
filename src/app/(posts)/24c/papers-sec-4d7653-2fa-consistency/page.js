import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/papers-sec-4d7653-2fa-consistency/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>论文链接：</X.P>
            <X.Uli>@A Systematic Study of the Consistency of Two-Factor Authentication User Journeys on Top-Ranked Websites[https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_s362_paper.pdf]@</X.Uli>
            <X.Uli>@arxiv Extended Version[https://arxiv.org/pdf/2210.09373]@</X.Uli>
            <X.HighlightBlock bgcolor="blue">
                <X.H3>笔记</X.H3>
                <X.H3>认证因素 Authentication Factor</X.H3>
                <X.P>一般来说有三种：</X.P>
                <X.Uli>知识因素/秘密信息`(knowledge factors)`：原则上仅个人知道的信息，典型的如密码</X.Uli>
                <X.Uli>物品因素/个人财产`(possession factors)`：持有的实体物品，如身份证、卡、U盘等</X.Uli>
                <X.Uli>遗传因素/生理特征`(inherence factors)`：个人生理特征，如指纹、虹膜、人脸等</X.Uli>
                <X.H3>User Journey</X.H3>
                <X.P>@用户旅程[https://en.wikipedia.org/wiki/User_journey]@是用户与某物（通常是软件）交互时的体验，或为实现某个目的需要经历的操作过程。</X.P>
                <X.H3>雅各布定律</X.H3>
                <X.P>雅各布定律是一个描述用户学习的定律：用户往往更喜欢一个与他们所熟悉的其他网站（产品）相似的产品。换句话说，当设计一个新模式时，应该符合广大用户所熟悉的使用习惯，而这个习惯大多来自于用户从大量其他网站（产品）中习得的。</X.P>
            </X.HighlightBlock>
            <X.H1>1.Introduction</X.H1>
            <X.P>双因素认证是现在很流行的加强账户安全的手段，但是2FA相关的UX设计存在不一致性（可以理解为不同网站之间2FA设置、使用流程差异很大），导致用户学习成本较高，降低了2FA的易用性。</X.P>
            <X.P>本文系统地研究了`85`个热门网站上的2FA用户旅程，也就是希望确定这些网站是否始终遵循相同的设计模式和策略。为了做更准确的比较，论文设计了一个包含`22`个比较因子的列表，然后比较得出一般的设计模式，也给出对UX设计有益/有害的模式。</X.P>
            <X.H1>2.Background</X.H1>
            <X.H2>关于2FA</X.H2>
            <X.P>很多网站开启双因素认证，对这篇工作比较重要的是一些网站可能提供多个2FA选项，或者强制用户以一个特定的顺序设置等等。此外2FA一个常见的问题是恢复阶段，例如一个认证设备丢失了；一个常见的策略是使用专用恢复项，例如一次性密码。</X.P>
            <X.H2>关于用户体验</X.H2>
            <X.P>用户体验没有一个明确的定义，但往往代表一个用户与一个产品交互的各个方面。UX设计有三个（互相有重叠的）方面：形式（如UI）、内容（如文本）、行为（如功能），本工作更多关注功能方面。</X.P>
            <X.P>UX设计中的*雅各布定律*表示了功能类似的产品的设计，应当具有尽可能一致的模式，这样才能降低用户学习的成本，这也是本文研究各个网站2FA用户旅程的一致性的核心动机。</X.P>
            <X.H1>3.Related Work</X.H1>
            <X.P>关于2FA的问题大多采用用户调查的形式，焦点是用户对2FA的态度、采用2FA的障碍以及如何提高用户体验。还有一部分研究第二个认证因素的不同选项之间的用户偏好。</X.P>
            <X.P>部分研究对本文有启发的一点是，将2FA的设置和登录分开研究，因为用户经常因为缺乏引导而感到困惑，这些研究大力推荐为用户设置清晰的说明和引导。</X.P>
            <X.P>本文工作的关键区别在于，本文不研究形式、内容或功能的具体变化如何影响2FA的可用性和具体体验，而是首次系统地研究现有流行网站用户体验的*一致性*。论文的核心贡献是衡量各个网站的2FA用户旅程服从雅各布定律的程度。</X.P>
            <X.H1>4.Methodology</X.H1>
            <X.Image src="1.jpg" width="100%" invertInDarkTheme />
            <X.H1>5.Data Set</X.H1>
            <X.P>论文的数据集整理自网站@[https://2fa.directory/]@。</X.P>
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
            <X.H1>7.Results</X.H1>
            <X.H2>网站数据概览</X.H2>
            <X.Image src="2.jpg" width="100%" invertInDarkTheme />
            <X.Image src="3.jpg" width="100%" invertInDarkTheme />
            <X.P>一些发现包括：</X.P>
            <X.Uli>`86%`的网站使用`two-factor`/`two-step`/`multiple-factor`+`authentication`/`verification`作为命名；</X.Uli>
            <X.Uli>`92%`的网站2FA设置在`账户设置`的`安全设置`下；</X.Uli>
            <X.Uli>只有`31`个网站提供设备记忆功能，其中`52%`的网站描述设备记忆为`记住设备或客户端`，`29%`的网站描述设备记忆为`信任设备`，`13%`的网站描述设备记忆为`跳过额外步骤`；</X.Uli>
            <X.Uli>……</X.Uli>
            <X.H2>探索性数据分析</X.H2>
            <X.Uli>网站相似性和因素一致性：使用汉明距离分析，发现平均每个网站在`14`个非条件性因素中有`6`~`7`个因素与其他网站不同，表明这些网站的2FA用户流程在整体上缺乏一致性。</X.Uli>
            <X.Uli>通过聚类分析，研究发现`6`个主要的设计模式（聚类集群），这些集群在用户教育、多重2FA选项的支持以及设备记忆功能的提供上有所不同。</X.Uli>
            <X.Uli>集群与网站排名有一定的统计显著性关联，2FA设计的某些模式在高排名网站中更为常见，而较低排名的网站则更多地落入另一个集群。</X.Uli>
            <X.H2>定性数据分析</X.H2>
            <X.Uli>一致的发现过程：大多数网站不会在用户注册或登录时立即推广2FA，只有少数网站强制要求用户设置2FA。</X.Uli>
            <X.Uli>用户教育的缺乏：大多数网站没有为用户提供足够的2FA信息或分步指导。</X.Uli>
            <X.Uli>2FA设置和配置的混合策略：在2FA选项的提供和配置方面，网站之间存在显著差异，例如是否允许多个2FA选项同时激活。</X.Uli>
            <X.Uli>恢复选项多为可选项：大部分网站提供恢复选项，但只有少数网站强制要求用户设置这些选项。</X.Uli>
            <X.Uli>设备记忆功能的混合策略：超过一半的网站不支持设备记忆功能，而支持该功能的网站在用户选择和逻辑上也存在差异。</X.Uli>
            <X.Uli>一致的停用支持：几乎所有网站都允许停用2FA，但只有少数会提醒用户停用的风险并进行身份验证。</X.Uli>
            <X.H1>8.Discussion And Future Work</X.H1>
            <X.P>略。</X.P>
            <X.H1>9.Conclusion</X.H1>
            <X.P>本文的工作为比较网站上的2FA用户旅程提供了一种方法，并首次对顶级网站上用户旅程的一致性进行了系统研究。这项工作也会为2FA功能开发者提供更通用的UX设计指南。</X.P>
        </>
    );
}
