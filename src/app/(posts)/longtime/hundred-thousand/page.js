import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/hundred-thousand/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>科技</X.H1>
            <X.H2>Unix、GNU和GNU/Linux</X.H2>
            <X.P>1965年美国开始研发Multics系统，目的开发一个多用户、多任务、多进程的操作系统，来连接1000部终端机，支持300的用户同时上线。但因为研发进度极为缓慢，最后在1969年被放弃。1970年左右贝尔实验室的Ken Thompson和Dennis Ritchie为了运行Space Travel游戏，开始研发一个简化版的Multics系统，即Unics系统（Uni与Multi对应），后来改名为Unix。</X.P>
            <X.P>最初Unix系统运行在PDP-7机器上，由汇编语言编写（为此，后来Thompson和Ritchie相继开发了B语言和C语言）。1973年，Unix系统被用C语言重写。</X.P>
            <X.P>1979年加州大学伯克利分校的研究生Bill Joy为Unix添加了很多新功能，形成了BSD`(Berkeley Software Distribution)`系统。但后续因为AT&T公司对Unix的商业化，BSD系统陷入了版权纠纷，最终分裂成了FreeBSD、NetBSD、OpenBSD等，也因此错过了发展的黄金时期。</X.P>
            <X.P>1983年，Richard Stallman发起了GNU`(GNU is Not Unix)`项目，目标是开发一个完整、开源的操作系统代替Unix。几年后GNU项目的大多组件如编译器、文本编辑器、shell等都已经完成，但唯独缺少内核。1991年，Linus Torvalds开发了Linux内核并于1992年发布，将其与GNU项目的组件结合，形成了一个完整的操作系统。Richard Stallman主张Linux系统因为使用了许多GNU组件，应该正式更名为GNU/Linux。</X.P>
            <X.HighlightBlock>
                <X.P>狭义上的Linux实际指的是Linux内核，而人们常常提及的“Linux系统”实际上大多是GNU/Linux系统，即Linux内核与GNU项目的组件结合而成的操作系统。</X.P>
                <X.P>本段内容有参考视频@【技术杂谈】Unix 到 GNU/Linux的操作系统历史[https://www.bilibili.com/video/BV1Mv4y127wA/?spm_id_from=333.337.search-card.all.click&vd_source=49eaababd4d4f07b29fb6337d2397ed4]@。</X.P>
            </X.HighlightBlock>
            <X.H2>GCC和MinGW</X.H2>
            <X.P>GNU编译器套件`(GNU Compiler Collection, GCC)`是GNU项目开发的编译器。MinGW`(Minimalist GNU for Windows)`是GCC在Windows平台上的移植版本。</X.P>
            <X.H2>Intel、AMD、x86和ARM</X.H2>
            <X.P>x86和ARM是两种不同的指令集架构。x86使用复杂指令集`(CISC)`，ARM使用精简指令集`(RISC)`。（单论功耗，ARM的功耗会更低）\nIntel和AMD是两家不同的芯片制造商。Intel的芯片使用x86架构，AMD的芯片两种架构都有生产。</X.P>
            <X.H2>循环次数</X.H2>
            <X.P>电池的设计容量被完整放电一次的过程，电量使用总量达到`100%`完成一次循环。\nMac官网：循环次数超过上限以后（大约几百次，视机型而定），最高可保持初始充电容量的`80%`。</X.P>
            <X.H2>UI/UX</X.H2>
            <X.Uli>UI：用户界面`(User Interface)`，用户与软件交互的界面，注重产品的视觉呈现。</X.Uli>
            <X.Uli>UX：用户体验`(User Experience)`，用户使用软件时的感受，注重产品的内在逻辑。</X.Uli>
            <X.Image src="uiux.jpg" width="600px" />
            <X.H1>社会</X.H1>
            <X.H2>B端、C端</X.H2>
            <X.P>B端`(Business)`面向企业，注重产品的效率和业务逻辑，例如企业管理软件、云服务等；C端`(Consumer)`面向个人，产品主要解决一个具体的需求痛点（而B端产品通常需要解决一个需求面），更注重用户体验。</X.P>
            <X.H2>SP、SSP</X.H2>
            <X.P>评到SP`(special offer)`、SSP`(super special offer)`会比普通岗位有薪资加成。</X.P>
            <X.H2>公域、私域</X.H2>
            <X.Uli>公域流量：在第三方平台“买”来的流量，例如投放广告、通过搜索引擎引流等；曝光范围广，但是成本高、不容易实现精准投放。</X.Uli>
            <X.Uli>私域流量：自己拥有的流量，例如公众号、企业官网、粉丝群等；成本低、精准度高，但是曝光范围小。</X.Uli>
            <X.H1>其他</X.H1>
            <X.H2>沉没成本、机会成本、边际成本</X.H2>
            <X.Uli>沉没成本：已经投入的资源，无论进一步如何决策，都不可挽回的成本。沉没成本不应该作为决策的参考。例如买票后发现演出很无聊，决定是否离开时，没必要再考虑已经花费的票价。</X.Uli>
            <X.Uli>机会成本：由于选择某种机会，而放弃其他机会可能带来的最高价值的成本。</X.Uli>
            <X.Uli>边际成本：每增产一单位的产品所增加的成本。比如，仅生产1辆汽车的成本是巨大的，而生产第101辆汽车的成本就低得多；再比如互联网产品的边际成本几乎为零，因为多一个用户几乎不会带来额外的成本。</X.Uli>
            <X.H2>买定离手</X.H2>
            <X.P>赌场俗语，原指在赌桌上下注以后，手要远离筹码，不要再更改下注。</X.P>
            <X.P>现在也指投资理财后，买完就不要再去看股票价格，放长线，在当初做决策的视野内（例如投资时看好产品一年后的增值），就不要因为价格的短期波动而影响自己的决策。“买定离手”是一种笃信自己决策的心理素质。</X.P>
        </>
    );
}
