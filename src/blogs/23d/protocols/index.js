import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「计算机网络」协议总结</X.Title>

            <X.H1>链路层</X.H1>

            <X.H1>网络层</X.H1>
            <X.H2>自治系统、IGP和EGP</X.H2>
            <X.P>
                *自治系统*`(Autonomous System,
                AS)`通常由一组处在相同管理控制下的路由器组成。通常，一个*互联网服务提供商*`(Internet Service Provider,
                ISP)`中的路由器以及连接它们的链路构成一个AS。---
                不过某些ISP会将它们的网络划分为多个AS。一个自治系统将会分配一个唯一的*自治系统号*`(ASN)`。---
            </X.P>
            <X.P>
                自治系统可以被理解为互联网中的小型网络单位。由此产生了*自治系统内部路由选择协议*`(intra-AS routing
                protocol)`和*自治系统间路由选择协议*`(inter-AS routing protocol)`。有时也会把这两个概念称作---
                *内部网关协议*`(Interior Gateway Protocol, IGP)`和*外部网关协议*`(Exterior Gateway Protocol, EGP)`。
            </X.P>
            <X.P>IGP和EGP并不指代某个具体的协议，而是代表一个类别。下面会讨论如下三个协议：</X.P>
            <X.Table>
                <tr>
                    <th>分类</th>
                    <th>名称</th>
                </tr>
                <tr>
                    <td rowSpan={2}>IGP</td>
                    <td>
                        <X.P>*路由信息协议*`(Routing Information Protocol, RIP)`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>*开放最短路径优先*`(Open Shortest Path First, OSPF)`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>EGP</td>
                    <td>
                        <X.P>*边界网关协议*`(Border Gateway Protocol, BGP)`</X.P>
                    </td>
                </tr>
            </X.Table>
            <X.H2>路由信息协议 - RIP</X.H2>
            <X.P>
                RIP协议是基于`距离矢量法`的，较为简单，适用于小网络。\n
                RIP协议要求网络中每一个路由器都维护从自己到每个其他目的网络的距离，这个距离用*跳数*来衡量，每经过一个路由器跳数+1。\n
                RIP协议允许一条路最多包含`15`个路由器，即跳数最多为`15`，超过则表示不可达。\n
                RIP协议只和*相邻路由器*交换信息，交换的信息是*自己的路由表*。
            </X.P>
            <X.H3>RIP协议路由更新规则</X.H3>
            <X.P noMarginBottom>
                路由表中包含*目的网络*、*到目的网络的距离*、*下一跳路由器*。对于每个路由器，路由表更新规则为：
            </X.P>
            <X.Uli>对于接收到的新表的每一项，若原表没有这项对应的目标网络，则添加到自己的路由表中；</X.Uli>
            <X.Uli>
                若有，且原表项的下一跳路由器就是发来更新信息的路由器，则用新表项替换原表项，但距离要+1，且下一跳路由器应修改为自己；
            </X.Uli>
            <X.Uli>
                <X.P>
                    若有，且原表项的下一跳路由器不是发来更新信息的路由器，那么比较`原表项的距离`和`新表项的距离+1`，选择较小的。\n
                    同上一条，填入新表项时距离要+1，下一跳路由器应修改为自己。
                </X.P>
            </X.Uli>
            <X.P withMarginTop>考虑一个例子：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>R6和R4是两个相邻路由器，现在R6收到R4发来的更新信息，试更新R6的路由表。</X.P>
                <X.Divider />
                <X.FlexRow gap="32px">
                    <div>
                        <X.P noMarginBottom>R6的路由表</X.P>
                        <X.Table
                            fromText={`
                            目的网络|距离|下一跳路由器
                            Net1|-|-
                            Net2|3|R4
                            Net3|4|R5
                            `}
                        />
                    </div>
                    <div>
                        <X.P noMarginBottom>R4发给R6的路由表（更新信息）</X.P>
                        <X.Table
                            fromText={`
                            目的网络|距离|下一跳路由器
                            Net1|7|R1
                            Net2|4|R2
                            Net3|1|直接交付
                            `}
                        />
                    </div>
                </X.FlexRow>
                <X.Br />
                <X.P>
                    解：\n对于Net1，原表中没有，填入新表项，距离改为`7+1=8`；\n
                    对于Net2，原表中有，并且原表项下一跳路由器也是R4，因此填入新表项，但距离改为`5`，下一跳路由器改为R4；\n
                    对于Net3，原表中有，但下一跳路由器不是R4；此时比较`4`和`1+1`，选择较小的新表项，同理下一跳路由器应改为R4。\n
                    最终结果为：
                </X.P>
                <X.P noMarginBottom>更新后R6的路由表</X.P>
                <X.Table
                    fromText={`
                    目的网络|距离|下一跳路由器
                    Net1|8|R4
                    Net2|5|R4
                    Net3|2|R4
                    `}
                />
            </X.HighlightBlock>
            <X.H2>开放最短路径优先 - OSPF</X.H2>
            <X.P>
                OSPF协议是基于`链路状态法`的，较为复杂，适用于大网络。\n
                每个路由器使用洪泛法向区域中的所有路由器发送信息，因此最终整个区域内所有路由器都得到了区域完整的图结构。---
                然后每台路由器在本地运行`Dijkstra`最短路径算法，确定一个以自身为根节点到所有子网的最短路径树。
            </X.P>
            <X.H3>在单个自治系统中再划分层次结构</X.H3>
            <X.P>
                为了应用于规模很大的网络，OSPF协议可以将一个自治系统再划分为若干更小的*区域*。在每个区域内，一台或多台区域边界路由器负责为流向该区域以外的分组提供路由选择。---
                在AS中只有一个区域被配置成主干区域。主干区域的主要作用是为该AS中其他区域之间的流量提供路由选择。---
                该主干总是包含本AS中的所有区域边界路由器、但也可能包含非边界路由器。在AS中的区域间的路由选择要求分组先路由到一个区域边界路由器（区域内路由选择），---
                然后通过主干路由到位于目的区域的区域边界路由器进而再路由到最终目的地。
            </X.P>
            <X.Image src={require('./ospf.png')} width="640" />
            <X.H3>OSPF 相较于 RIP 的优点</X.H3>
            <X.Uli>
                安全：使用鉴别，仅有受信任的路由器能参于OSPF协议，可防止恶意入侵者将不正确的信息注入路由器表内。
            </X.Uli>
            <X.Uli>
                允许多条相同开销的路径：当存在多条相等开销的路径时，无须仅选择单一的路径来承载所有的流量。（RIP协议只允许一条）
            </X.Uli>
            <X.Uli>
                <X.P>
                    对单播与多播路由选择的综合支持：*多播OSPF*`(MOSPF)`提供对OSPF的简单扩展，以便提供多播路由选择。---
                    MOSPF使用现有的OSPF链路数据库，并为现有的OSPF链路状态广播机制增加了一种新型的链路状态通告。
                </X.P>
            </X.Uli>
            <X.Uli>支持在单个AS中的层次结构。</X.Uli>
            <X.H2>边界网关协议 - BGP</X.H2>

            <X.HighlightBlock bgcolor="red">
                <X.P>
                    关于协议所属层次的划分，无需过多纠结：\n
                    RIP基于UDP，BGP基于TCP，归类到应用层协议比较合理；\nOSPF基于IP，归类到传输层协议比较合理；\n
                    只不过，他们计算出的路径都服务于网络层，因此按照课程目录划在了网络层下。
                </X.P>
            </X.HighlightBlock>

            <X.H1>运输层</X.H1>
        </X.BlogWrapper>
    );
}
