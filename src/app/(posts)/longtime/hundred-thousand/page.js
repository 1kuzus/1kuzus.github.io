import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/hundred-thousand/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>Tech</X.H1>
            <X.H2>GNU和GNU/Linux</X.H2>
            <X.P>GNU的名字是“GNU's Not Unix”的递归缩写，这意味着GNU的设计类似于Unix，但不是Unix。</X.P>
            <X.H2>Debian</X.H2>
            <X.H2>GNOME</X.H2>
            <X.H2>gcc和MinGW</X.H2>

            <X.H2>循环次数</X.H2>
            <X.P>电池的设计容量被完整放电一次的过程，电量使用总量达到`100%`完成一次循环。\nMac官网：循环次数超过上限以后（大约几百次，视机型而定），最高可保持初始充电容量的`80%`。</X.P>
            <X.H2>UI/UX</X.H2>
            <X.Uli>UI：用户界面`(User Interface)`，用户与软件交互的界面，注重产品的视觉呈现。</X.Uli>
            <X.Uli>UX：用户体验`(User Experience)`，用户使用软件时的感受，注重产品的内在逻辑。</X.Uli>
            <X.Image src="uiux.jpg" width="600px" />
            <X.H1>Soci</X.H1>
            <X.H2>B端、C端</X.H2>
            <X.P>B端`(Business)`面向企业，注重产品的效率和业务逻辑，例如企业管理软件、云服务等；C端`(Consumer)`面向个人，产品主要解决一个具体的需求痛点（而B端产品通常需要解决一个需求面），更注重用户体验。</X.P>
            <X.H2>SP、SSP</X.H2>
            <X.P>评到SP`(special offer)`、SSP`(super special offer)`会比普通岗位有薪资加成。</X.P>
            <X.H1>Ency</X.H1>
            <X.H2>沉没成本、机会成本、边际成本</X.H2>
            <X.Uli>沉没成本：已经投入的资源，无论进一步如何决策，都不可挽回的成本。沉没成本不应该作为决策的参考。例如买票后发现演出很无聊，决定是否离开时，没必要再考虑已经花费的票价。</X.Uli>
            <X.Uli>机会成本：由于选择某种机会，而放弃其他机会可能带来的最高价值的成本。</X.Uli>
            <X.Uli>边际成本：每增产一单位的产品所增加的成本。比如，仅生产1辆汽车的成本是巨大的，而生产第101辆汽车的成本就低得多；再比如互联网产品的边际成本几乎为零，因为多一个用户几乎不会带来额外的成本。</X.Uli>
        </>
    );
}
