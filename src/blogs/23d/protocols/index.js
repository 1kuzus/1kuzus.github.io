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
                *路由信息协议*`(Routing Information Protocol, RIP)`是基于`距离矢量法`的，较为简单，适用于小网络。\n
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
                *开放最短路径优先*`(Open Shortest Path First, OSPF)`是基于`链路状态法`的，较为复杂，适用于大网络。\n
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
            <X.Image src={require('./ospf.png')} width="600" />
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
            <X.P>*边界网关协议*`(Border Gateway Protocol, BGP)`在这里只做简单的概念性介绍。</X.P>
            <X.FlexRow>
                <X.Image src={require('./bgp1.png')} width="400" />
                <X.Image src={require('./bgp2.png')} width="400" />
            </X.FlexRow>
            <X.P>
                在不同自治系统内，度量路由的代价可能不同；自治系统之间的路由选择也需要考虑相关的政治、经济、安全因素。---
                BGP只希望选择一条可达，无环路，且相对较优的路由。
            </X.P>
            <X.Image src={require('./bgp3.png')} width="600" />
            <X.P>
                在配置BGP时，每个AS需要选择至少一个路由器作为*BGP发言人*，不同自治系统的BGP发言人要通过TCP连接交换路由信息。---
                当BGP发言人互相交换了网络可达性信息后，各BGP发言人就根据自己的策略选择出到达各自治系统的较好的路由，也就是构造出树形结构、不存在回路的连通图。
            </X.P>
            <X.HighlightBlock bgcolor="red">
                <X.P>
                    关于协议所属层次的划分：\n
                    RIP基于UDP，BGP基于TCP，归类到应用层协议比较合理；\nOSPF基于IP，归类到传输层协议比较合理；\n
                    只不过，它们计算出的路径都服务于网络层，因此按照课程目录划在了网络层下。
                </X.P>
            </X.HighlightBlock>
            <X.H2>IPv4编址</X.H2>
            <X.P>
                *网际协议*`(Internet Protocol, IP)`现在有两个常用的版本，IPv4和IPv6。\n
                每个IPv4地址长度为`32`位，等价为`4`字节，大约有`40`亿个可能的地址。地址通常用点分十进制记法表示，例如`192.32.216.9`。
            </X.P>
            <X.H3>粗略的分类</X.H3>
            <X.P>
                IPv4地址有诸多分类，且其中有很多特殊地址、保留地址，因此先从最普遍的地址分类入手，再逐渐深入介绍特殊的IPv4地址。\n
                IPv4地址可以看作由两部分组成：网络号和主机号。根据网络号和主机号分为A、B、C三类，同时还有特殊的D、E两类。
            </X.P>
            <X.Table>
                <tr>
                    <th>分类</th>
                    <th>网络号</th>
                    <th>主机号</th>
                    <th>前8位十进制范围</th>
                    <th>特殊说明</th>
                </tr>
                <tr>
                    <td>A</td>
                    <td>
                        <X.P>前`8`位</X.P>
                    </td>
                    <td>
                        <X.P>后`32`位</X.P>
                    </td>
                    <td>
                        <X.P>`0`~`127`</X.P>
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>
                        <X.P>前`16`位</X.P>
                    </td>
                    <td>
                        <X.P>后`16`位</X.P>
                    </td>
                    <td>
                        <X.P>`128`~`191`</X.P>
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>
                        <X.P>前`8`位</X.P>
                    </td>
                    <td>
                        <X.P>后`32`位</X.P>
                    </td>
                    <td>
                        <X.P>`192`~`223`</X.P>
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>D</td>
                    <td colSpan={2}>不区分</td>
                    <td>
                        <X.P>`224`~`239`</X.P>
                    </td>
                    <td>D类IPv4地址不区分网络号与主机号，作多播地址用，不做介绍</td>
                </tr>
                <tr>
                    <td>E</td>
                    <td colSpan={2}>不区分</td>
                    <td>
                        <X.P>`240`~`255`</X.P>
                    </td>
                    <td>
                        <X.P>E类IPv4地址不区分网络号与主机号，\n仅保留为搜索、Internet的实验和开发用，不做介绍</X.P>
                    </td>
                </tr>
            </X.Table>
            <X.H3>特殊地址</X.H3>
            <X.P>上述分类中，各分类的范围中，都有很少一部分的地址有特殊的含义：</X.P>
            <X.Table>
                <tr>
                    <th width={100}>网络号</th>
                    <th>主机号</th>
                    <th width={120}>是否可作为源地址</th>
                    <th width={120}>是否可作为目的地址</th>
                    <th>描述</th>
                </tr>
                <tr>
                    <td>
                        <X.P>全`0`</X.P>
                    </td>
                    <td>
                        <X.P>全`0`</X.P>
                    </td>
                    <td>是</td>
                    <td>否</td>
                    <td>
                        <X.P>
                            `0.0.0.0`严格来说不是一个真正意义上的ip地址，它在本网范围内表示主机，也被用于一些协议的默认参数。
                        </X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>全`0`</X.P>
                    </td>
                    <td>某特定值</td>
                    <td>是</td>
                    <td>否</td>
                    <td>
                        <X.P>本网内某特定主机，相当于把本应是本网的网络号填作了`0`。</X.P>
                    </td>
                </tr>
                <tr>
                    <td>某特定值</td>
                    <td>
                        <X.P>全`0`</X.P>
                    </td>
                    <td>否</td>
                    <td>否</td>
                    <td>
                        <X.P>代表一个网段。</X.P>
                    </td>
                </tr>
                <tr>
                    <td>某特定值</td>
                    <td>
                        <X.P>全`1`</X.P>
                    </td>
                    <td>否</td>
                    <td>是</td>
                    <td>直接广播地址，对特定网络上的所有主机进行广播。</td>
                </tr>
                <tr>
                    <td>
                        <X.P>全`1`</X.P>
                    </td>
                    <td>
                        <X.P>全`1`</X.P>
                    </td>
                    <td>否</td>
                    <td>是</td>
                    <td>
                        <X.P>`255.255.255.255`表示本网广播地址</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`127`</X.P>
                    </td>
                    <td>
                        <X.P>`0.0.1`~`255.255.254`</X.P>
                    </td>
                    <td>是</td>
                    <td>是</td>
                    <td>回环地址，用于本地回环测试。</td>
                </tr>
            </X.Table>
            <X.H3>私有地址</X.H3>
            <X.P>
                提到IP地址，第一反应可能就是`192.168.0.1`这串数字了！又或许你打开`cmd`窗口输入`ipconfig`，然后发现你的设备IP地址是`192.168.137.1`。---
                这个问题可能让人感到困扰：一方面，课本上说IP地址是互联网上唯一的；另一方面，似乎无论你处在哪个移动或有线网络下，你的设备IP总是长成`192.168.x.x`的样子，---
                这似乎根本无法保证唯一性。这个问题涉及到*私有地址*。
            </X.P>
            <X.P>
                除了特殊IP地址，还有一部分地址作为私有地址；这些地址不能用于在互联网上标识一个主机，只适用于在内部网络中使用。它们是：
            </X.P>
            <X.Table>
                <tr>
                    <th>分类</th>
                    <th>地址范围</th>
                </tr>
                <tr>
                    <td>A</td>
                    <td>
                        <X.P>`10.0.0.0`~`10.255.255.255`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>
                        <X.P>`172.16.0.0`~`172.31.255.255`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>
                        <X.P>`192.168.0.0`~`192.168.255.255`</X.P>
                    </td>
                </tr>
            </X.Table>
            <X.P>
                这样的私有地址仅对本地网络中的设备有意义。但既然如此，想在互联网上发送或接收数据时，该如何处理编址呢？这需要用到*网络地址转换*`(Network
                Address Translation,
                NAT)`，NAT可以将内网的IP地址映射到互联网上的IP地址。从某种角度，NAT使得路由器对外界隐藏了本地网络的细节。
            </X.P>
            <X.H2>IPv6编址</X.H2>
            <X.P>
                用IPv6来取代IPv4主要是为了解决IPv4地址用尽问题，同时IPv6也在其他方面对于IPv4有许多改进。\n
                每个IPv6地址长度为`128`位，地址通常用`8`组四位十六进制数表示，例如`2001:0db8:86a3:08d3:1319:8a2e:0370:7344`。
            </X.P>
            <X.P noMarginBottom>IPv6的地址有时可以省略，具体规则是：</X.P>
            <X.Uli>
                <X.P>每组数字的前导`0`可以省略；</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>可以用`::`表示一组多组连续的`0`，但*只能出现一次*。</X.P>
            </X.Uli>
            <X.P noMarginBottom withMarginTop>
                例如下面的IPv6地址是等价的：
            </X.P>
            <X.Uli>
                <X.P>`2001:0db8:00de:0000:0000:0000:0000:2e13`</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>`2001:db8:de:0:0:0:0:2e13`</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>`2001:db8:de::2e13`</X.P>
            </X.Uli>
            <X.H2>IPv6比IPv4的改进</X.H2>
            <X.Image src={require('./ip.png')} width="100%" />
            <X.Uli>
                <X.P>扩大了地址空间，从`8`位变为`32`位</X.P>
            </X.Uli>
            <X.Uli>IPv6移除了校验和字段，以减少每跳的处理时间</X.Uli>
            <X.Uli>
                IPv6将可选字段移出首部字段，放在有效载荷的扩展首部中，路由器不对扩展首部进行检查，提高了处理效率
            </X.Uli>
            <X.Uli>IPv6支持即插即用，不需要DHCP协议</X.Uli>
            <X.H2>动态主机配置协议 - DHCP</X.H2>
            <X.P>
                *动态主机配置协议*`(Dynamic Host Configuration Protocol,
                DHCP)`用于自动给内网机器分配IP地址等信息。虽然可以手动给内网设备一个一个的分配IP地址，---
                但这项任务通常由DHCP服务器完成。
            </X.P>
            <X.P noMarginBottom>DHCP的四个步骤是：</X.P>
            <X.Uli>
                <X.P>
                    *DHCP发现*`(DHCP Discover)`\n
                    新加入主机的首要任务是发现一个要与其交互的DHCP服务器，这可以通过生成一个目的地址为`255.255.255.255`或者一个子网广播地址的UDP包实现。
                </X.P>
            </X.Uli>
            <X.Uli>
                <X.P>*DHCP提供*`(DHCP Offer)`\nDHCP服务器提供一个IP租约。服务器租用期通常设置为几小时或几天。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>
                    *DHCP请求*`(DHCP Request)`\n
                    当客户主机从一个或多个DHCP服务器的提供中选择了一个IP租约时，它必须告诉其他的DHCP服务器它已经接受了一个租约提供。
                </X.P>
            </X.Uli>
            <X.Uli>
                <X.P>
                    *DHCP确认*`(DHCP Acknowledge/ACK)`\n对DHCP
                    Request报文进行响应，证实所要求的参数。一旦客户主机收到DHCP ACK后，配置过程就完成了。
                </X.P>
            </X.Uli>
            <X.H2>地址解析协议 - ARP</X.H2>
            <X.P>
                在以太网协议中规定，同一局域网中的一台主机要和另一台主机进行直接通信，必须要知道目标主机的MAC地址，而网络层和运输层只关心目标主机的IP地址。\n
                *地址解析协议*`(Address Resolution Protocol,
                ARP)`用于完成网络层地址（例如IP地址）和链路层地址（即MAC地址）的转换。
            </X.P>
            <X.H2>互联网控制报文协议 - ICMP</X.H2>
            <X.P>
                *互联网控制报文协议*`(Internet Control Message Protocol,
                ICMP)`被主机和路由器用来彼此沟通网络层的信息，ICMP最典型的用途是差错报告，提供可能发生在通信环境中的各种问题反馈。---
                通过这些信息，管理者可以对所发生的问题作出诊断，然后采取适当的措施解决。
            </X.P>

            <X.H1>运输层</X.H1>
            <X.H1>参考资料</X.H1>
            <X.P noMarginBottom>本文的部分内容、图片来源于：</X.P>
            <X.Uli>
                <X.P>@Bilibili - 王道计算机考研 计算机网络[https://www.bilibili.com/video/BV19E411D78Q]@</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>@Bilibili - 计算机网络微课堂[https://www.bilibili.com/video/BV1c4411d7jb]@</X.P>
            </X.Uli>
            <X.Uli>《计算机网络自顶向下方法》（第七版）</X.Uli>
        </X.BlogWrapper>
    );
}
