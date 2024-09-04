import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/papers-sec-240824-zxcvbn/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>论文链接：</X.P>
            <X.Uli>@zxcvbn: Low-Budget Password Strength Estimation[https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_wheeler.pdf]@</X.Uli>
            <X.H1>1.Introduction</X.H1>
            <X.P>本文主要提出一个易于实现的密码强度检测器。研究者来自Dropbox。</X.P>
            <X.H1>2.Background and Related Work</X.H1>
            <X.H2>LUDS</X.H2>
            <X.P>一种常见的密码强度估计方案：利用小写字母`(*L*owercase)`、大写字母`(*U*ppercase)`、数字`(*D*igit)`和特殊字符`(*S*ymbol)`的出现次数来评估密码强度，简写为LUDS，这种策略可以追溯到NIST（美国国家标准与技术研究院）的标准。作者认为这种估计方案从根本上就是无效的——`Passw0rd`因为有数字`0`，反而会比`QJqUbPpA`这样明显随机的密码拥有更高的分数；密码中常见的模式，如日期、键盘规律（比如`qwerty`）无法在分数中有体现。</X.P>
            <X.P>NIST的标准（通常叫NIST熵）伪代码见下图：</X.P>
            <X.Image src="1.jpg" width="500px" filterDarkTheme />
            <X.P>前两条都是LUDS规则：根据密码长度和特殊字符加分；尽管第三条（是可选的）考虑了字典攻击，前面的例子`Passw0rd`（假设它没通过字典测试）依然会得到和`QJqUbPpA`（假设它通过了）一样的分数，这是令人困惑的。</X.P>
            <X.H2>密码猜测相关</X.H2>
            <X.P>本文使用的“黄金准则”（原文是`gold standard`，含义类似于Ground Truth，在后面的实验用于验证强度估计的准确性）是利用Ur等人提出的@Password Guessability Service[https://pgs.ece.cmu.edu/]@（论文在@这里[https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-ur.pdf]@）得到的面对四种现代密码猜测攻击中，需要进行的最少限度的尝试。</X.P>
            <X.P>本文将区分在线猜测（攻击者通过公共界面进行猜测）和离线猜测（拿到哈希值之后攻击者可以在自己的硬件上爆破）。</X.P>
            <X.H1>3.Evaluation Framework</X.H1>
            <X.P>对于一个旨在替代LUDS的方案，这一节讨论了各方面的评价标准。作者参考了两种LUDS方法：NIST熵和`3class8`（一种易于采用的要求，即密码包含至少`3`种类型的`8`个或更多字符）。</X.P>
            <X.Uli>新的方案不应该比LUDS方案更难被采用。</X.Uli>
            <X.Uli>新的方案只应该警告那些真正存在风险的用户。</X.Uli>
            <X.Uli>新的方案应该直接以“猜测这个密码所需的尝试次数”作为标准。（因为这是安全社区对密码强度定义的共识）</X.Uli>
            <X.Uli>在小数量级上要保证准确性。</X.Uli>
            <X.HighlightBlock>？</X.HighlightBlock>
            <X.Uli>新的方案应该可以选择不同的数据集大小，应该给予使用者自主权衡大小和准确性的权利。</X.Uli>
            <X.H1>4.Algorithm</X.H1>
            <X.P>形式化的表达：</X.P>
            <X.Formula text="\argmin_S D^{|S|-1} + |S|!\prod_{m \in S} m.guesses" />
            <X.P>$m$表示一个模式，它可能是一个满足格式的日期、一段键盘上相邻的字符串等等：</X.P>
            <X.Image src="2.jpg" filterDarkTheme />
            <X.P>对于一个给定的密码字符串，可以匹配到多种模式，并且这些模式会有重叠，例如密码`lenovo1111`可能提取到`lenovo(token)`、`eno(reversed 'one')`、`1111(repeat)`、`1111(date of 2011/1/1)`等模式。</X.P>
            <X.P>如果一部分模式能够*不重不漏*地组成原始的密码字符串，这个模式序列就计作$S$。$|S|$代表模式的数量。</X.P>
            <X.P>
                连乘项代表对于所有模式，最坏情况下猜测的总数；$|S|!$考虑了不同模式之间的组合顺序；{`$D^{|S|-1}$`}代表攻击者事先不知道模式的长度$|S|$时，从$l=1$尝试到$l=|S|-1$；$D$是一个常数，反映对于单个模式需要猜测的次数，因此猜测总次数{`$\\sum_{l=1}^{|S|-1} \\approx D^{|S|-1}$`}。
            </X.P>
            <X.H2>算法的流程</X.H2>
            <X.Oli>从密码中提取模式集合{`$\\mathcal{S}$`}；</X.Oli>
            <X.Oli>对于集合中每一个模式$m$，估计猜测这个模式所需的次数`m.guesses`；</X.Oli>
            <X.Oli>从{`$\\mathcal{S}$`}中搜索一个不重不漏组成密码的序列$S$，使得前面提到的评估式最小。</X.Oli>
            <X.P>（整体的思想就是，找到一个最容易猜出，也就是猜测次数最少的的模式，用这个模式所需的猜测次数来代表密码强度。）</X.P>
            <X.H2>限制</X.H2>
            <X.P>没有考虑模式之间的依赖性，例如常用的短语搭配；不会把错拼的单词匹配为模式；等长的不匹配区域逻辑上是等效的，尽管有些可能的组合比完全等长的随机字符更常见。</X.P>
        </>
    );
}
