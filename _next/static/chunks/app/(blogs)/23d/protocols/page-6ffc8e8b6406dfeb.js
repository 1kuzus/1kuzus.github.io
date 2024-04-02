(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{2724:function(A,e,r){Promise.resolve().then(r.bind(r,9370))},9370:function(A,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Blog}});var i=r(7437),n=r(2727);function Blog(A){let{title:e}=A;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Z.Title,{children:e}),(0,i.jsx)(n.Z.HighlightBlock,{children:(0,i.jsx)(n.Z.P,{children:"文中各层出现的协议参考教程的教学顺序，不代表对协议所属层次的划分。"})}),(0,i.jsx)(n.Z.H1,{children:"链路层"}),(0,i.jsx)(n.Z.H2,{children:"可靠传输"}),(0,i.jsx)(n.Z.P,{children:"在链路层传输中，可能出现的错误包括数据位出错、分组丢失、分组失序、分组重复等。可靠传输服务希望实现发送端发送什么，接收端就接收到什么。--- 虽然下面将在链路层这一章节中介绍SW、GBN、SR三种协议，但要明确的是，可靠传输服务并不仅仅局限于链路层，其他各层均可选择实现可靠传输。"}),(0,i.jsx)(n.Z.H2,{children:"停等协议 - SW"}),(0,i.jsx)(n.Z.P,{children:"*停等协议*`(Stop and Wait, SW)`的发送方每发送一帧数据就停止，--- 并等待接收方发送确认帧，收到确认后再发送下一帧。"}),(0,i.jsx)(n.Z.Image,{src:r(4815),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H3,{children:"确认与否认、超时重传"}),(0,i.jsx)(n.Z.P,{children:"发送方发送数据后等待接收方`ACK`或`NAK`的响应，并启动超时计时器，如果一定时间收不到响应则启动超时重传。"}),(0,i.jsx)(n.Z.H3,{children:"确认丢失"}),(0,i.jsx)(n.Z.P,{children:"如果确认分组丢失，接收方需要能感知到数据分组是否重复，因此数据分组需要编号，在停等协议中，由于每发送一个数据就进行等待，因此使用一位编号就够了。"}),(0,i.jsx)(n.Z.H3,{children:"确认迟到"}),(0,i.jsx)(n.Z.P,{children:"如果确认分组迟到，在图示情况中，发送方需要感知到第二个`ACK`是对第二个`DATA 0`的重复确认，--- 而不是对`DATA 1`的确认。因此确认分组也需要使用一位编号。"}),(0,i.jsx)(n.Z.H2,{children:"回退N帧协议 - GBN"}),(0,i.jsx)(n.Z.P,{children:"*回退N帧协议*`(Go Back N, GBN)`允许发送方连续发送多个帧（即发送窗口可以大于`1`），--- 以解决停等协议信道利用率低的问题。"}),(0,i.jsx)(n.Z.P,{children:"发送方可在未收到接收方确认分组的情况下，将序号落在发送窗口内的多个数据分组全部发送出去；--- 但接收方的接收窗口大小仅为`1`，也就是只有接收到了此窗口所代表的序号的分组，接收方才会回复`ACK`并且移动接收窗口。--- 同理，发送方收到了发送窗口中最早的那个序号对应分组的`ACK`，才会移动发送窗口。"}),(0,i.jsx)(n.Z.H3,{children:"累计确认"}),(0,i.jsx)(n.Z.Image,{src:r(8342),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"接收方不一定要对收到的数据逐个确认，也可以对最后一个分组进行确认。`ACK n`--- 表示序号为`n`及其之前的分组都已经被正确接收。称这种方法为累计确认。--- 例如图中，接收方只对`1`号、`4`号数据分组进行确认，并且`ACK 1`在传输过程中丢失，--- 发送方仍然可以根据收到的`ACK 4`判断`0`~`4`号分组都已经被正确接收。"}),(0,i.jsx)(n.Z.H3,{children:"有差错情况"}),(0,i.jsx)(n.Z.Image,{src:r(1378),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"例如发送方发送了`5`/`6`/`7`/`0`/`1`五个分组，但`5`号数据分组丢失，此时由于到达的四个分组都与接收窗口序号不匹配，--- 接收方会将其丢弃，并重复响应`ACK 4`。"}),(0,i.jsx)(n.Z.H2,{children:"选择重传协议 - SR"}),(0,i.jsx)(n.Z.P,{children:"*选择重传协议*`(Selective Repeat, SR)`加大接收窗口的长度（即接收窗口也可以大于`1`），--- 缓存乱序到达的帧，这样不至于在一些情况下需要重传所有未被确认的帧从而导致效率降低。"}),(0,i.jsx)(n.Z.P,{children:"与GBN一样，发送方可在未收到接收方确认分组的情况下，将序号落在发送窗口内的多个数据分组全部发送出去；--- 接收方可接收未按序到达但没有误码并且序号落在接收窗口内的数据分组；--- 发送方收到未按序到达的确认分组时，对其进行记录，以防止其相应数据分组的超时重发，但发送窗口不能向前滑动。--- 为了使发送方仅重传出现差错的分组，接收方不再采用累积确认，而是对每个正确接收的数据分组进行*逐一确认*。"}),(0,i.jsx)(n.Z.Image,{src:r(7285),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"例如发送方发送了`0`/`1`/`2`/`3`四个分组，但`2`号数据分组丢失，此时`0`号、`1`号按序到达，接收窗口可以向前移动；--- 而`3`号分组可以被接收，但接收窗口不能移动。"}),(0,i.jsx)(n.Z.Image,{src:r(1820),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"返回的`ACK`到达发送方之后，发送方可以把发送窗口的起点移动到`2`号，同时记录`3`号分组已接收。--- 移动发送窗口后，可以把新纳入窗口的`4`号、`5`号发送出去。"}),(0,i.jsx)(n.Z.Image,{src:r(1612),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"如果`4`号、`5`号可以被正常接收，并且返回的`ACK 4`、`ACK 5`可以正确到达发送方，--- 那么最后会使得发送窗口和接收窗口都卡在`2`的位置，并最终触发`2`号分组超时重传。"}),(0,i.jsxs)(n.Z.HighlightBlock,{children:[(0,i.jsx)(n.Z.H3,{children:"GBN和SR的重传计时器"}),(0,i.jsx)(n.Z.P,{children:"在GBN中一个连接只会设置一个定时器，也就是说发生超时时，GBN会重发所有已发送但未被确认过的分组；\\n 而在SR中会为每个分组设置定时器。"})]}),(0,i.jsx)(n.Z.H2,{children:"媒体接入控制"}),(0,i.jsx)(n.Z.P,{children:"共享信道要着重考虑的一个问题就是如何协调多个发送和接收站点对一个共享传输媒体的占用，--- 即*媒体接入控制*`(Medium Access Control, MAC)`。"}),(0,i.jsxs)(n.Z.Table,{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{rowSpan:4,children:"静态划分信道"}),(0,i.jsx)("td",{colSpan:2,children:"时分多路复用"})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:2,children:"频分多路复用"})}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:2,children:"波分多路复用"})}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:2,children:"码分多路复用"})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{rowSpan:5,children:"动态接入控制"}),(0,i.jsx)("th",{children:"轮询访问"}),(0,i.jsx)("td",{children:"令牌传递"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{rowSpan:4,children:"随机访问"}),(0,i.jsx)("td",{children:"ALOHA"})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:"CSMA"})}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:"CSMA/CD"})}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:"CSMA/CA"})})]}),(0,i.jsx)(n.Z.H2,{children:"载波监听多路访问 - CSMA"}),(0,i.jsx)(n.Z.P,{children:"*载波监听多路访问*`(Carrier Sense Multiple Access, CSMA)`的思想是在发送帧之前监听信道。其原理是：--- 当几个站同时在总线上发送数据时，总线上的信号电压摆动值将会互相叠加而增大。当一个站检测到的信号电压摆动值超过一定门限值时，--- 就认为总线上至少有两个站同时在发送数据，表明产生了碰撞。"}),(0,i.jsx)(n.Z.H3,{children:"非坚持CSMA"}),(0,i.jsx)(n.Z.P,{children:"非坚持指的是对于监听信道忙之后就不继续监听。\\n 当主机要发送数据并对信道进行监听时，发现信道空闲则可直接传输；忙则等待一个随机的时间之后再进行监听。\\n 这样的缺点是可能存在各主机都在延迟等待过程中，使得信道处于空闲状态但无人发送数据，媒体使用率降低。"}),(0,i.jsx)(n.Z.H3,{children:"1-坚持CSMA"}),(0,i.jsx)(n.Z.P,{children:"当主机要发送数据并对信道进行监听时，发现信道空闲则可直接传输；忙则一直保持监听，直到空闲马上传输。\\n 这样的缺点是假如有两个或两个以上的站点有数据要发送，冲突就不可避免。"}),(0,i.jsx)(n.Z.H3,{children:"p-坚持CSMA"}),(0,i.jsx)(n.Z.P,{children:"当主机要发送数据并对信道进行监听时，发现信道空闲则以`p`概率直接传输；忙则一直保持监听，直到空闲再以`p`概率传输。--- 对于空闲时其余的`1-p`概率，则会等到下一个时间槽重复上述规则。"}),(0,i.jsx)(n.Z.H2,{children:"碰撞检测 - CSMA/CD"}),(0,i.jsx)(n.Z.P,{children:"上述的三种CSMA发生冲突后，仍然会坚持把数据帧发完，这时接收方收到叠加在一起的有碰撞数据会响应否认`NAK`或者不响应等待发送方重发，--- 这是一种被动的方式。*碰撞检测*`(Collision Detection, CD)`就是--- 边发送数据边检测信道上信号电压的变化情况，来判断是否有其他主机也在发送数据。如果发现碰撞则立刻主动终止发送。"}),(0,i.jsx)(n.Z.H3,{children:"强化碰撞"}),(0,i.jsx)(n.Z.P,{children:"以太网的强化碰撞：当发送帧的站点检测到碰撞，除了立即停止发送帧外，--- 还要再继续发送`48`位的人为干扰信号，以便有足够多的碰撞信号使所有站点都能检测出碰撞。"}),(0,i.jsx)(n.Z.H3,{children:"争用期"}),(0,i.jsx)(n.Z.Image,{src:r(6005),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"图中$\\tau$是单程传播时延，$\\delta$并没有很强的物理含义，我们只是假设主机D发送数据后经过$\\delta$时间检测到A的信号。--- 这张图的重点是，在$\\delta$趋近于0的情况下，A最长需要$2\\tau$的时间检测到碰撞。--- 我们把$2\\tau$称作*争用期*`(Contention Period)`，--- 它的意义是只要经过$2\\tau$时间还没有检测到碰撞，就能肯定这次发送不会发生碰撞。"}),(0,i.jsx)(n.Z.H3,{children:"截断二进制指数规避算法"}),(0,i.jsxs)(n.Z.P,{children:["第$cnt$次重传的退避时间为$2\\tau \\times r$，r为从集合","$\\{0,1,2,3, \\dots, 2^{\\min(cnt,10)}-1\\}$","中随机选出的数。当重传达`16`次仍不能成功时，则丢弃该帧，并向上层报告。"]}),(0,i.jsx)(n.Z.H3,{children:"最小/最大帧长的由来"}),(0,i.jsx)(n.Z.Image,{src:r(404),width:"600",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"如果一个帧的长度太小，可能一个站点还没来得及检测到其发送的帧产生了碰撞，就已经将这个帧发送完毕了。--- 帧的传输时间要大于争用期。对于`10 Mb/s`以太网，帧的最小长度为`64`字节。--- 减去帧头和帧尾，数据部分至少应为`46`字节。"}),(0,i.jsx)(n.Z.P,{children:"如果一个帧的长度过大，一个站点不停地发送帧，其他站点就一直无法无法使用信道；如果帧的长度过大，接收方的缓冲区也可能产生溢出。--- 以太网规定数据部分最长为`1500`字节，加上帧头和帧尾，帧的最大长度为`1518`字节。"}),(0,i.jsx)(n.Z.H2,{children:"碰撞避免 - CSMA/CA"}),(0,i.jsx)(n.Z.P,{children:"在无线局域网中可能会出现隐蔽站的问题，使用碰撞检测意义不大。--- 不同于以太网，802.11标准使用*碰撞避免*`(Collision Avoidance, CA)`而不是碰撞检测。"}),(0,i.jsx)(n.Z.Image,{src:r(7667),width:"600",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H3,{children:"使用确认帧"}),(0,i.jsx)(n.Z.P,{children:"CSMA、CSMA/CD都没有使用确认帧机制。但因为无线信道的通信质量远不如有线信道，--- 因此CSMA/CA要求接收方收到数据帧后响应`ACK`，发送方收到`ACK`就可以进行下一个数据帧的发送。"}),(0,i.jsx)(n.Z.H3,{children:"预约信道"}),(0,i.jsx)(n.Z.P,{children:"802.11标准允许发送站对信道进行预约。\\n检测到信道空闲时，源站先发送*请求发送*`(Request To Send, RTS)`，包括源地址、目的地址和这次通信所需的时间；\\n 若目的站收到源站发来的`RTS`帧且媒体空闲，就响应*允许发送*`(Clear To Send, CTS)`--- 它也包括这次通信所需的时间（从`RTS`复制）。`CTS`帧可以被目的站范围内所有站点收到，其作用有两点：--- 给源站明确的发送许可，同时指示其他站在预约期内不要发送。"}),(0,i.jsx)(n.Z.H1,{children:"网络层"}),(0,i.jsx)(n.Z.H2,{children:"自治系统、IGP和EGP"}),(0,i.jsx)(n.Z.P,{children:"*自治系统*`(Autonomous System, AS)`--- 通常由一组处在相同管理控制下的路由器组成。通常，一个*互联网服务提供商*`(Internet Service Provider, ISP)`中的路由器以及连接它们的链路构成一个AS。--- 不过某些ISP会将它们的网络划分为多个AS。一个自治系统将会分配一个唯一的*自治系统号*`(ASN)`。"}),(0,i.jsx)(n.Z.P,{children:"自治系统可以被理解为互联网中的小型网络单位。由此产生了*自治系统内部路由选择协议*`(intra-AS routing protocol)`和*自治系统间路由选择协议*`(inter-AS routing protocol)`。有时也会把这两个概念称作--- *内部网关协议*`(Interior Gateway Protocol, IGP)`和*外部网关协议*`(Exterior Gateway Protocol, EGP)`。"}),(0,i.jsx)(n.Z.P,{children:"IGP和EGP并不指代某个具体的协议，而是代表一个类别。下面会讨论如下三个协议："}),(0,i.jsxs)(n.Z.Table,{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"分类"}),(0,i.jsx)("th",{children:"名称"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{rowSpan:2,children:"IGP"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"*路由信息协议*`(Routing Information Protocol, RIP)`"})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"*开放最短路径优先*`(Open Shortest Path First, OSPF)`"})})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"EGP"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"*边界网关协议*`(Border Gateway Protocol, BGP)`"})})]})]}),(0,i.jsx)(n.Z.H2,{children:"路由信息协议 - RIP"}),(0,i.jsx)(n.Z.P,{children:"*路由信息协议*`(Routing Information Protocol, RIP)`是基于`距离矢量法`的，较为简单，适用于小网络。\\n RIP协议要求网络中每一个路由器都维护从自己到每个其他目的网络的距离，这个距离用*跳数*来衡量，每经过一个路由器跳数+1。\\n RIP协议允许一条路最多包含`15`个路由器，即跳数最多为`15`，超过则表示不可达。\\n RIP协议只和*相邻路由器*交换信息，交换的信息是*自己的路由表*。"}),(0,i.jsx)(n.Z.H3,{children:"RIP协议路由更新规则"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"路由表中包含*目的网络*、*到目的网络的距离*、*下一跳路由器*。对于每个路由器，路由表更新规则为："}),(0,i.jsx)(n.Z.Uli,{children:"对于接收到的新表的每一项，若原表没有这项对应的目标网络，则添加到自己的路由表中；"}),(0,i.jsx)(n.Z.Uli,{children:"若有，且原表项的下一跳路由器就是发来更新信息的路由器，则用新表项替换原表项，但距离要+1，且下一跳路由器应修改为自己；"}),(0,i.jsx)(n.Z.Uli,{children:"若有，且原表项的下一跳路由器不是发来更新信息的路由器，那么比较`原表项的距离`和`新表项的距离+1`，选择较小的。\\n 同上一条，填入新表项时距离要+1，下一跳路由器应修改为自己。"}),(0,i.jsx)(n.Z.P,{withMarginTop:!0,children:"考虑一个例子："}),(0,i.jsxs)(n.Z.HighlightBlock,{bgcolor:"gray",children:[(0,i.jsx)(n.Z.P,{children:"R6和R4是两个相邻路由器，现在R6收到R4发来的更新信息，试更新R6的路由表。"}),(0,i.jsx)(n.Z.Divider,{}),(0,i.jsxs)(n.Z.FlexRow,{gap:"32px",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"R6的路由表"}),(0,i.jsx)(n.Z.Table,{fromText:"\n                            目的网络|距离|下一跳路由器\n                            Net1|-|-\n                            Net2|3|R4\n                            Net3|4|R5\n                            "})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"R4发给R6的路由表（更新信息）"}),(0,i.jsx)(n.Z.Table,{fromText:"\n                            目的网络|距离|下一跳路由器\n                            Net1|7|R1\n                            Net2|4|R2\n                            Net3|1|直接交付\n                            "})]})]}),(0,i.jsx)(n.Z.Br,{}),(0,i.jsx)(n.Z.P,{children:"解：\\n对于Net1，原表中没有，填入新表项，距离改为`7+1=8`；\\n 对于Net2，原表中有，并且原表项下一跳路由器也是R4，因此填入新表项，但距离改为`5`，下一跳路由器改为R4；\\n 对于Net3，原表中有，但下一跳路由器不是R4；此时比较`4`和`1+1`，选择较小的新表项，同理下一跳路由器应改为R4。\\n 最终结果为："}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"更新后R6的路由表"}),(0,i.jsx)(n.Z.Table,{fromText:"\n                    目的网络|距离|下一跳路由器\n                    Net1|8|R4\n                    Net2|5|R4\n                    Net3|2|R4\n                    "})]}),(0,i.jsx)(n.Z.H2,{children:"开放最短路径优先 - OSPF"}),(0,i.jsx)(n.Z.P,{children:"*开放最短路径优先*`(Open Shortest Path First, OSPF)`是基于`链路状态法`的，较为复杂，适用于大网络。\\n 每个路由器使用洪泛法向区域中的所有路由器发送信息，因此最终整个区域内所有路由器都得到了区域完整的图结构。--- 然后每台路由器在本地运行`Dijkstra`最短路径算法，确定一个以自身为根节点到所有子网的最短路径树。"}),(0,i.jsx)(n.Z.H3,{children:"在单个自治系统中再划分层次结构"}),(0,i.jsx)(n.Z.P,{children:"为了应用于规模很大的网络，OSPF协议可以将一个自治系统再划分为若干更小的*区域*。在每个区域内，一台或多台区域边界路由器负责为流向该区域以外的分组提供路由选择。--- 在AS中只有一个区域被配置成主干区域。主干区域的主要作用是为该AS中其他区域之间的流量提供路由选择。--- 该主干总是包含本AS中的所有区域边界路由器、但也可能包含非边界路由器。在AS中的区域间的路由选择要求分组先路由到一个区域边界路由器（区域内路由选择），--- 然后通过主干路由到位于目的区域的区域边界路由器进而再路由到最终目的地。"}),(0,i.jsx)(n.Z.Image,{src:r(1745),width:"600",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H3,{children:"OSPF 相较于 RIP 的优点"}),(0,i.jsx)(n.Z.Uli,{children:"安全：使用鉴别，仅有受信任的路由器能参于OSPF协议，可防止恶意入侵者将不正确的信息注入路由器表内。"}),(0,i.jsx)(n.Z.Uli,{children:"允许多条相同开销的路径：当存在多条相等开销的路径时，无须仅选择单一的路径来承载所有的流量。（RIP协议只允许一条）"}),(0,i.jsx)(n.Z.Uli,{children:"对单播与多播路由选择的综合支持：*多播OSPF*`(MOSPF)`提供对OSPF的简单扩展，以便提供多播路由选择。--- MOSPF使用现有的OSPF链路数据库，并为现有的OSPF链路状态广播机制增加了一种新型的链路状态通告。"}),(0,i.jsx)(n.Z.Uli,{children:"支持在单个AS中的层次结构。"}),(0,i.jsx)(n.Z.H2,{children:"边界网关协议 - BGP"}),(0,i.jsx)(n.Z.P,{children:"*边界网关协议*`(Border Gateway Protocol, BGP)`在这里只做简单的概念性介绍。"}),(0,i.jsxs)(n.Z.FlexRow,{children:[(0,i.jsx)(n.Z.Image,{src:r(1013),width:"400",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.Image,{src:r(4627),width:"400",invertInDarkTheme:!0})]}),(0,i.jsx)(n.Z.P,{children:"在不同自治系统内，度量路由的代价可能不同；自治系统之间的路由选择也需要考虑相关的政治、经济、安全因素。--- BGP只希望选择一条可达，无环路，且相对较优的路由。"}),(0,i.jsx)(n.Z.Image,{src:r(5595),width:"600",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.P,{children:"在配置BGP时，每个AS需要选择至少一个路由器作为*BGP发言人*，不同自治系统的BGP发言人要通过TCP连接交换路由信息。--- 当BGP发言人互相交换了网络可达性信息后，各BGP发言人就根据自己的策略选择出到达各自治系统的较好的路由，也就是构造出树形结构、不存在回路的连通图。"}),(0,i.jsx)(n.Z.HighlightBlock,{bgcolor:"red",children:(0,i.jsx)(n.Z.P,{children:"关于协议所属层次的划分：\\n RIP基于UDP，BGP基于TCP，归类到应用层协议比较合理；\\nOSPF基于IP，归类到传输层协议比较合理；\\n 只不过，它们计算出的路径都服务于网络层，因此按照课程目录划在了网络层下。"})}),(0,i.jsx)(n.Z.H2,{children:"IPv4编址"}),(0,i.jsx)(n.Z.P,{children:"*网际协议*`(Internet Protocol, IP)`现在有两个常用的版本，IPv4和IPv6。\\n 每个IPv4地址长度为`32`位，等价为`4`字节，大约有`40`亿个可能的地址。地址通常用点分十进制记法表示，例如`192.32.216.9`。"}),(0,i.jsx)(n.Z.H3,{children:"粗略的分类"}),(0,i.jsx)(n.Z.P,{children:"IPv4地址有诸多分类，且其中有很多特殊地址、保留地址，因此先从最普遍的地址分类入手，再逐渐深入介绍特殊的IPv4地址。\\n IPv4地址可以看作由两部分组成：网络号和主机号。根据网络号和主机号分为A、B、C三类，同时还有特殊的D、E两类。"}),(0,i.jsxs)(n.Z.Table,{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"分类"}),(0,i.jsx)("th",{children:"网络号"}),(0,i.jsx)("th",{children:"主机号"}),(0,i.jsx)("th",{children:"前8位十进制范围"}),(0,i.jsx)("th",{children:"特殊说明"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"A"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"前`8`位"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"后`32`位"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`0`~`127`"})}),(0,i.jsx)("td",{children:"-"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"B"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"前`16`位"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"后`16`位"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`128`~`191`"})}),(0,i.jsx)("td",{children:"-"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"C"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"前`8`位"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"后`32`位"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`192`~`223`"})}),(0,i.jsx)("td",{children:"-"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"D"}),(0,i.jsx)("td",{colSpan:2,children:"不区分"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`224`~`239`"})}),(0,i.jsx)("td",{children:"D类IPv4地址不区分网络号与主机号，作多播地址用，不做介绍"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"E"}),(0,i.jsx)("td",{colSpan:2,children:"不区分"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`240`~`255`"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"E类IPv4地址不区分网络号与主机号，\\n仅保留为搜索、Internet的实验和开发用，不做介绍"})})]})]}),(0,i.jsx)(n.Z.H3,{children:"特殊地址"}),(0,i.jsx)(n.Z.P,{children:"上述分类中，各分类的范围中，都有很少一部分的地址有特殊的含义："}),(0,i.jsxs)(n.Z.Table,{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:100,children:"网络号"}),(0,i.jsx)("th",{children:"主机号"}),(0,i.jsx)("th",{width:120,children:"是否可作为源地址"}),(0,i.jsx)("th",{width:120,children:"是否可作为目的地址"}),(0,i.jsx)("th",{children:"描述"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`0`"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`0`"})}),(0,i.jsx)("td",{children:"是"}),(0,i.jsx)("td",{children:"否"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`0.0.0.0`严格来说不是一个真正意义上的ip地址，它在本网范围内表示主机，也被用于一些协议的默认参数。"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`0`"})}),(0,i.jsx)("td",{children:"某特定值"}),(0,i.jsx)("td",{children:"是"}),(0,i.jsx)("td",{children:"否"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"本网内某特定主机，相当于把本应是本网的网络号填作了`0`。"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"某特定值"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`0`"})}),(0,i.jsx)("td",{children:"否"}),(0,i.jsx)("td",{children:"否"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"代表一个网段。"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"某特定值"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`1`"})}),(0,i.jsx)("td",{children:"否"}),(0,i.jsx)("td",{children:"是"}),(0,i.jsx)("td",{children:"直接广播地址，对特定网络上的所有主机进行广播。"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`1`"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"全`1`"})}),(0,i.jsx)("td",{children:"否"}),(0,i.jsx)("td",{children:"是"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`255.255.255.255`表示本网广播地址"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`127`"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`0.0.1`~`255.255.254`"})}),(0,i.jsx)("td",{children:"是"}),(0,i.jsx)("td",{children:"是"}),(0,i.jsx)("td",{children:"回环地址，用于本地回环测试。"})]})]}),(0,i.jsx)(n.Z.H3,{children:"私有地址"}),(0,i.jsx)(n.Z.P,{children:"提到IP地址，第一反应可能就是`192.168.0.1`这串数字了！又或许你打开`cmd`窗口输入`ipconfig`，然后发现你的设备IP地址是`192.168.137.1`。--- 这个问题可能让人感到困扰：一方面，课本上说IP地址是互联网上唯一的；另一方面，似乎无论你处在哪个移动或有线网络下，你的设备IP总是长成`192.168.x.x`的样子，--- 这似乎根本无法保证唯一性。这个问题涉及到*私有地址*。"}),(0,i.jsx)(n.Z.P,{children:"除了特殊IP地址，还有一部分地址作为私有地址；这些地址不能用于在互联网上标识一个主机，只适用于在内部网络中使用。它们是："}),(0,i.jsxs)(n.Z.Table,{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"分类"}),(0,i.jsx)("th",{children:"地址范围"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"A"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`10.0.0.0`~`10.255.255.255`"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"B"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`172.16.0.0`~`172.31.255.255`"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"C"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.Z.P,{children:"`192.168.0.0`~`192.168.255.255`"})})]})]}),(0,i.jsx)(n.Z.P,{children:"这样的私有地址仅对本地网络中的设备有意义。但既然如此，想在互联网上发送或接收数据时，该如何处理编址呢？--- 这需要用到*网络地址转换*`(Network Address Translation, NAT)`，--- NAT可以将内网的IP地址映射到互联网上的IP地址。从某种角度，NAT使得路由器对外界隐藏了本地网络的细节。"}),(0,i.jsx)(n.Z.H2,{children:"IPv6编址"}),(0,i.jsx)(n.Z.P,{children:"用IPv6来取代IPv4主要是为了解决IPv4地址用尽问题，同时IPv6也在其他方面对于IPv4有许多改进。\\n 每个IPv6地址长度为`128`位，地址通常用`8`组四位十六进制数表示，例如`2001:0db8:86a3:08d3:1319:8a2e:0370:7344`。"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"IPv6的地址有时可以省略，具体规则是："}),(0,i.jsx)(n.Z.Uli,{children:"每组数字的前导`0`可以省略；"}),(0,i.jsx)(n.Z.Uli,{children:"可以用`::`表示一组多组连续的`0`，但*只能出现一次*。"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,withMarginTop:!0,children:"例如下面的IPv6地址是等价的："}),(0,i.jsx)(n.Z.Uli,{children:"`2001:0db8:00de:0000:0000:0000:0000:2e13`"}),(0,i.jsx)(n.Z.Uli,{children:"`2001:db8:de:0:0:0:0:2e13`"}),(0,i.jsx)(n.Z.Uli,{children:"`2001:db8:de::2e13`"}),(0,i.jsx)(n.Z.H2,{children:"IPv6比IPv4的改进"}),(0,i.jsx)(n.Z.Image,{src:r(2032),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.Uli,{children:"扩大了地址空间，从`8`位变为`32`位"}),(0,i.jsx)(n.Z.Uli,{children:"IPv6移除了校验和字段，以减少每跳的处理时间"}),(0,i.jsx)(n.Z.Uli,{children:"IPv6将可选字段移出首部字段，放在有效载荷的扩展首部中，路由器不对扩展首部进行检查，提高了处理效率"}),(0,i.jsx)(n.Z.Uli,{children:"IPv6支持即插即用，不需要DHCP协议"}),(0,i.jsx)(n.Z.H2,{children:"动态主机配置协议 - DHCP"}),(0,i.jsx)(n.Z.P,{children:"*动态主机配置协议*`(Dynamic Host Configuration Protocol, DHCP)`--- 是使用UDP协议的应用层协议，用于自动给内网机器分配IP地址等信息。虽然可以手动给内网设备一个一个的分配IP地址，--- 但这项任务通常由DHCP服务器完成。"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"DHCP的四个步骤是："}),(0,i.jsx)(n.Z.Uli,{children:"*DHCP发现*`(DHCP Discover)`\\n 新加入主机的首要任务是发现一个要与其交互的DHCP服务器，这可以通过生成一个目的地址为`255.255.255.255`或者一个子网广播地址的UDP包实现。"}),(0,i.jsx)(n.Z.Uli,{children:"*DHCP提供*`(DHCP Offer)`\\nDHCP服务器提供一个IP租约。服务器租用期通常设置为几小时或几天。"}),(0,i.jsx)(n.Z.Uli,{children:"*DHCP请求*`(DHCP Request)`\\n 当客户主机从一个或多个DHCP服务器的提供中选择了一个IP租约时，它必须告诉其他的DHCP服务器它已经接受了一个租约提供。"}),(0,i.jsx)(n.Z.Uli,{children:"*DHCP确认*`(DHCP Acknowledge/ACK)`\\n对DHCP Request报文进行响应，证实所要求的参数。一旦客户主机收到DHCP ACK后，配置过程就完成了。"}),(0,i.jsx)(n.Z.H2,{children:"地址解析协议 - ARP"}),(0,i.jsx)(n.Z.P,{children:"在以太网协议中规定，同一局域网中的一台主机要和另一台主机进行直接通信，必须要知道目标主机的MAC地址，而网络层和运输层只关心目标主机的IP地址。\\n *地址解析协议*`(Address Resolution Protocol, ARP)`--- 用于完成网络层地址（例如IP地址）和链路层地址（即MAC地址）的转换。"}),(0,i.jsx)(n.Z.H2,{children:"互联网控制报文协议 - ICMP"}),(0,i.jsx)(n.Z.P,{children:"*互联网控制报文协议*`(Internet Control Message Protocol, ICMP)`--- 被主机和路由器用来彼此沟通网络层的信息，ICMP最典型的用途是差错报告，提供可能发生在通信环境中的各种问题反馈。--- 通过这些信息，管理者可以对所发生的问题作出诊断，然后采取适当的措施解决。"}),(0,i.jsx)(n.Z.H1,{children:"运输层"}),(0,i.jsx)(n.Z.H2,{children:"用户数据报协议 - UDP"}),(0,i.jsx)(n.Z.P,{children:"*用户数据报协议*`(User Datagram Protocol, UDP)`--- 提供无连接、不可靠的服务，支持单播、多播、广播；UDP面向报文，对应用进程交下来的报文既不合并也不拆分。"}),(0,i.jsx)(n.Z.P,{children:"UDP传输效率更高，其牺牲了可靠性来保证性能。UDP适用于实时应用，例如视频会议、电话等。\\n UDP首部开销小，只包括源端口、目的端口、长度、校验和共`8`字节。"}),(0,i.jsx)(n.Z.Image,{src:r(8126),width:"600",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H2,{children:"传输控制协议 - TCP"}),(0,i.jsx)(n.Z.P,{children:"*传输控制协议*`(Transmission Control Protocol, TCP)`--- 提供连接、可靠的服务，仅支持单播；TCP面向字节流，把应用进程交下来的报文仅当作字节流。"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"TCP首部由`20`字节固定首部和最大`40`字节的扩展首部构成。下面是对一些字段的解释："}),(0,i.jsx)(n.Z.Uli,{children:"序号、确认号、`ACK`标志位（在Flags中）：用于实现TCP可靠传输；确认号指出期望收到对方下一个TCP报文段的数据载荷的第一个字节的序号，--- 同时也是对之前收到的所有数据的确认。只有当`ACK`取值为`1`时，确认号字段才有效。TCP规定在连接建立后所有传送的报文段都必须把`ACK`置`1`。"}),(0,i.jsx)(n.Z.Uli,{children:"数据偏移：占`4`位，以`4`字节为单位，用来指出TCP报文段的数据载荷部分的起始处距离TCP报文段的起始处有多远；--- 这个字段实际上指出了TCP报文段的首部长度。"}),(0,i.jsx)(n.Z.Uli,{children:"`SYN`标志位（在Flags中）：在TCP连接建立时用来同步序号。"}),(0,i.jsx)(n.Z.Uli,{children:"`FIN`标志位（在Flags中）：用来释放TCP连接。"}),(0,i.jsx)(n.Z.Uli,{children:"窗口：占`16`位，以字节为单位，用于流量控制；接收方给出的*接收窗口*值是发送方设置其发送窗口的依据之一（另一个是*拥塞窗口*）。"}),(0,i.jsx)(n.Z.H3,{children:"TCP连接建立"}),(0,i.jsx)(n.Z.P,{children:"TCP通过三报文握手建立连接，目的是使双方能感知到对方的存在，同时协商一些参数。过程如下图所示："}),(0,i.jsx)(n.Z.Image,{src:r(9439),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H3,{children:"TCP连接释放"}),(0,i.jsx)(n.Z.P,{children:"TCP通过四报文挥手释放连接。服务端响应客户端的释放请求后进入关闭等待状态，但如果TCP服务器进程还有数据要发送，服务端仍然会发送完最后的数据才会发送连接释放报文段。\\n 客户端确认了连接释放报文段后，还要经过`2`倍*最长报文段寿命*`(Maximum Segment Lifetime, MSL)`--- 才进入关闭状态，这是为了防止客户端确认报文丢失，如果直接进入关闭状态就无法接收到服务端重传的连接释放报文。过程如下图所示："}),(0,i.jsx)(n.Z.Image,{src:r(9191),width:"100%",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H3,{children:"TCP可靠传输"}),(0,i.jsx)(n.Z.P,{children:"TCP综合了GBN和SR的一些机制来实现可靠传输。"}),(0,i.jsx)(n.Z.P,{children:"TCP的接收方也会维护接收窗口，这点与SR类似；但TCP采用与GBN类似的累计确认。\\n需要注意的是，GBN中`ACK n`--- 表示序号为`n`及其之前的分组都已经被正确接收，而TCP中`ACK n`表示--- 序号为`n-1`及其之前的分组都已经被正确接收，接收方期望收到的最小序号的分组是序号`n`。"}),(0,i.jsx)(n.Z.P,{children:"如果接收方收到了失序到达的分组，会缓存这些分组（像SR一样），但不是对分组逐一确认，而是累计确认期望收到的最小序号的分组（类似GBN）。--- TCP同样只有一个超时计时器（像GBN一样），如果发生超时就会重传窗口内所有已发送但未得到确认的数据。"}),(0,i.jsx)(n.Z.P,{children:"不过，例如当发送方陆续发送序号`n`之后的分组，但却收到了重复的`ACK n`时，--- 就可以判断分组`n`一定因为某些原因没有被接收方收到。 此时发送方可以不等到重传计时器超时，而是在收到`3`次重复确认后，就立即重传这个分组，这也被称为*快重传*。"}),(0,i.jsx)(n.Z.H3,{children:"TCP流量控制"}),(0,i.jsx)(n.Z.P,{children:"传输速度快固然是好事，但如果发送方传输速度超过了接收方的接收能力就会导致丢包。TCP流量控制就是接收方通过`ACK`设置头部中的窗口字段，--- 根据自己接收缓存的大小，动态地调整发送方的发送窗口大小。"}),(0,i.jsx)(n.Z.P,{children:"一个特殊的情况是，当接收方通知发送方窗口大小为`0`时，发送方就不再会发送新的数据。此时发送方不收到接收方调整接收窗口的报文，--- 双方就会陷入互相等待。因此TCP为每个连接设有一个持续计时器，只要TCP连接的一方收到对方的零窗口通知，就启动持续计时器；--- 若持续计时器超时就发送一个零窗口探测报文，对方在确认探测报文时就给出现在的窗口值。"}),(0,i.jsx)(n.Z.H3,{children:"TCP拥塞控制"}),(0,i.jsx)(n.Z.P,{children:"如果网络中对某一资源的需求超过了可用的资源，例如很多主机都向带宽有限的链路上发送数据，就会引起拥塞。TCP拥塞控制就是为了防止过多数据注入到网络当中。"}),(0,i.jsxs)(n.Z.HighlightBlock,{children:[(0,i.jsx)(n.Z.H3,{children:"拥塞控制与流量控制的区别"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"流量控制中接收方告知发送方的窗口大小称为*接收窗口*`(Receiver Window, rwnd)`，--- 其反映了接收方的容量；\\n拥塞控制中发送方根据网络拥塞程度调整的发送窗口大小称为*拥塞窗口*--- `(Congestion Window, cwnd)`，其反映了当前网络容量。"}),(0,i.jsx)(n.Z.Uli,{children:"流量控制是端到端的问题，由接收方主动控制发送方的发送窗口"}),(0,i.jsx)(n.Z.Uli,{children:"拥塞控制是网络上的全局问题，由发送方主动根据对网络拥塞程度的估计调整发送窗口的值"}),(0,i.jsx)(n.Z.P,{children:"发送方发送窗口大小应该取$\\min(rwnd,cwnd)$。"})]}),(0,i.jsxs)(n.Z.HighlightBlock,{bgcolor:"gray",children:[(0,i.jsx)(n.Z.H3,{children:"拥塞控制的实现"}),(0,i.jsx)(n.Z.Image,{src:r(1769),width:"600",invertInDarkTheme:!0}),(0,i.jsx)(n.Z.H3,{children:"慢开始"}),(0,i.jsx)(n.Z.P,{children:"执行慢开始算法时拥塞窗口初始大小为`1`，同时要设定慢开始门限值（图中是`8`），拥塞窗口将指数增大到门限值。"}),(0,i.jsx)(n.Z.H3,{children:"拥塞避免"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"拥塞窗口增大到门限值后执行拥塞避免算法，此阶段拥塞窗口线性增加`1`。\\n 随着拥塞窗口增大，可能会有报文段发生丢失，引起发送方重传计时器超时。因此发送方判断网络可能出现了拥塞，此时会："}),(0,i.jsx)(n.Z.Uli,{children:"将慢开始门限值更新为发生拥塞时拥塞窗口的一半"}),(0,i.jsx)(n.Z.Uli,{children:"将拥塞窗口置为`1`，并重新开始执行慢开始算法"}),(0,i.jsx)(n.Z.Divider,{}),(0,i.jsx)(n.Z.P,{children:"慢开始和拥塞避免算法是1988年`Tahoe`版本提出的TCP拥塞控制算法，1990年`Reno`版本又增加了快重传和快恢复。"}),(0,i.jsx)(n.Z.H3,{children:"快重传"}),(0,i.jsx)(n.Z.P,{children:"快重传就是使发送方尽快进行重传，而不是等超时重传计时器超时再重传。见上文TCP可靠传输。"}),(0,i.jsx)(n.Z.H3,{children:"快恢复"}),(0,i.jsx)(n.Z.P,{children:"发送方一旦收到`3`个重复的确认，就知道现在只是丢失了个别的报文段。于是不启动慢开始算法，而执行快恢复算法。\\n 发送方将慢开始门限值和拥塞窗口大小调整为当前窗口大小的一半，并开始执行拥塞避免算法。"})]}),(0,i.jsx)(n.Z.H1,{children:"参考资料"}),(0,i.jsx)(n.Z.P,{noMarginBottom:!0,children:"本文的部分内容、图片来源于："}),(0,i.jsx)(n.Z.Uli,{children:"@Bilibili - 王道计算机考研 计算机网络[https://www.bilibili.com/video/BV19E411D78Q]@"}),(0,i.jsx)(n.Z.Uli,{children:"@Bilibili - 计算机网络微课堂[https://www.bilibili.com/video/BV1c4411d7jb]@"}),(0,i.jsx)(n.Z.Uli,{children:"《计算机网络自顶向下方法》（第七版）"})]})}},9708:function(A,e,r){"use strict";r.r(e),r.d(e,{default:function(){return CodeBlock}});var i=r(7437),n=r(2265),t=r(2686),s=r.n(t);function CodeBlock(A){let e=(0,n.useRef)(),{language:r,code:t,highlightLines:l}=A,c=t.split("\n").map(A=>A.trimRight());c[0]||(c=c.slice(1));let d=c[0].length-c[0].trimStart().length;c=c.map(A=>A.slice(d));let h=l?l.split(",").map(A=>A.includes("-")?[A.split("-")[0]-1,+A.split("-")[1]]:[A-1,+A]):[],x="linear-gradient(180deg"+h.map(A=>{let[e,r]=A;return", transparent ".concat(24*e,"px, ")+"var(--bg-transparent-golden) ".concat(24*e,"px ").concat(24*r,"px, ")+"transparent ".concat(24*r,"px")}).join("")+")";return(0,n.useLayoutEffect)(()=>{s().highlightElement(e.current)},[t]),(0,i.jsx)("div",{className:"x-codeblock",children:(0,i.jsx)("pre",{style:{background:l?x:null},children:(0,i.jsx)("code",{className:r&&"lang-".concat(r),ref:e,children:c.join("\n")})})})}r(8978)},848:function(A,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Formula}});var i=r(7437),n=r(2265),t=r(3236);function Formula(A){let e=(0,n.useRef)(),{text:r=""}=A;return(0,n.useLayoutEffect)(()=>{t.Z.render(r,e.current,{output:"html",strict:!1})},[r]),(0,i.jsx)("div",{className:"x-formula",ref:e})}r(8704)},8411:function(A,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Image}});var i=r(7437);r(5612);var n=r(6691),t=r.n(n);function Image(A){let{invertInDarkTheme:e,src:r,width:n,...s}=A;return(0,i.jsx)("div",{className:"x-image-wrapper".concat(e?" x-image-invert":""),children:(0,i.jsx)(t(),{alt:"img",src:r,style:{width:n,height:"auto"},...s})})}},8275:function(A,e,r){"use strict";r.r(e),r.d(e,{Oli:function(){return Oli},Uli:function(){return Uli}});var i=r(7437),n=r(9226),t=r(2229);function isStringOrStringArray(A){return"string"==typeof A||!!Array.isArray(A)&&A.every(A=>"string"==typeof A)}function Uli(A){let{children:e}=A;return(0,i.jsxs)("div",{className:"x-uli",children:[(0,i.jsx)("div",{className:"x-uli-marker",children:(0,i.jsx)("div",{className:"x-uli-marker-dot"})}),(0,i.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(e)?(0,i.jsx)(t.Z,{children:e}):e})]})}function Oli(A){let{reset:e,children:r}=A,{addOliIndex:s,resetOliIndex:l}=(0,n.useGlobalContext)();return(0,i.jsxs)("div",{className:"x-oli",children:[(0,i.jsx)("div",{className:"x-oli-number",children:(void 0!==e?l(+e):s())+"."}),(0,i.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(r)?(0,i.jsx)(t.Z,{children:r}):r})]})}r(340)},2229:function(A,e,r){"use strict";r.d(e,{Z:function(){return P}});var i=r(7437),n=r(3236);function P(A){let{withMarginTop:e=!1,noMarginBottom:r=!1,children:t=""}=A,s=Array.isArray(t)?t.join(""):t;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(A,e)=>n.Z.renderToString(e,{output:"html",strict:!1})),(0,i.jsx)("p",{className:"x-p".concat(e?" with-margin-top":"").concat(r?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}r(7725)},4484:function(A,e,r){"use strict";r.r(e),r.d(e,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var i=r(7437),n=r(2265),t=r(9226);function Title(A){let{children:e}=A;return(0,n.useLayoutEffect)(()=>{document.title=e},[e]),(0,i.jsx)("h1",{className:"x-title",children:e})}function H1(A){let{href:e,excludeFromContents:r,children:s}=A,l=(0,n.useRef)(),{setTitleNodeRefs:c,removeTitleNodeRefs:d}=(0,t.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!r)return c(A=>[...A,l]),()=>d(l)},[s,r]),(0,i.jsx)("h2",{className:"x-h1",ref:l,children:e?(0,i.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:s}):s})}function H2(A){let{href:e,excludeFromContents:r,children:s}=A,l=(0,n.useRef)(),{setTitleNodeRefs:c,removeTitleNodeRefs:d}=(0,t.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!r)return c(A=>[...A,l]),()=>d(l)},[s,r]),(0,i.jsx)("h3",{className:"x-h2",ref:l,children:e?(0,i.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:s}):s})}function H3(A){let{href:e,children:r}=A;return(0,i.jsx)("h4",{className:"x-h3",children:e?(0,i.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:r}):r})}function Br(){return(0,i.jsx)("div",{className:"x-br"})}function Divider(){return(0,i.jsx)("div",{className:"x-divider"})}r(5533)},2727:function(A,e,r){"use strict";r.d(e,{Z:function(){return x}});var i=r(4484),n=r(9708),t=r(7437);r(8875);var s=r(848);r(6301);var l=r(8411),c=r(8275),d=r(2229);r(8046);let h={...i,CodeBlock:n.default,FlexRow:function(A){let{children:e,width:r,gap:i,justifyContent:n,alignItems:s,flex1:l}=A;return(0,t.jsx)("div",{className:"x-flexrow".concat(l?" flex1":""),style:{width:r,gap:i,justifyContent:n,alignItems:s},children:e})},Formula:s.default,HighlightBlock:function(A){let{children:e,bgcolor:r="golden"}=A;return(0,t.jsx)("div",{className:"x-highlightblock".concat(" highlight-background-"+r),children:e})},Image:l.default,Uli:c.Uli,Oli:c.Oli,P:d.Z,Table:function(A){let{fromText:e,children:r}=A;if(e){let A=e.trim().split("\n");return(0,t.jsx)("table",{className:"x-table",children:(0,t.jsx)("tbody",{children:A.map((A,e)=>(0,t.jsx)("tr",{children:A.trim().split("|").map((A,r)=>e?(0,t.jsx)("td",{children:A},r):(0,t.jsx)("th",{children:A},r))},e))})})}return(0,t.jsx)("table",{className:"x-table",children:(0,t.jsx)("tbody",{children:r})})}};var x=h},9226:function(A,e,r){"use strict";r.r(e),r.d(e,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var i=r(7437),n=r(2265);let t=(0,n.createContext)(),useGlobalContext=()=>(0,n.useContext)(t),GlobalProvider=A=>{let{children:e}=A,[r,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)([]),d=(0,n.useRef)(0),h={showSidebar:r,setShowSidebar:s,setTitleNodeRefs:c,removeTitleNodeRefs:A=>{c(e=>e.filter(e=>e!==A))},titleNodes:l.map(A=>A.current).sort((A,e)=>A.offsetTop-e.offsetTop),addOliIndex:()=>(d.current+=1,d.current),resetOliIndex:A=>(d.current=A,A)};return(0,i.jsx)(t.Provider,{value:h,children:e})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},1013:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/bgp1.04990120.png",height:393,width:692,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAeUlEQVR42jXGPQoCMRAG0BzbQ9jZKth6BMHCxl4Fqy0UEQMuhoT8bL6Zyc5us696RlV/SNv3NaHOj1X2D9jYjI5qgz/3r5SjOptyuXzID808u+9hc9JZCXJcS+jLQMJiUOFdZCKEBOcBXu3ut+5vdNFEGssoEjNAPAECZ291hvd1qgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},4627:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/bgp2.3bdf8845.png",height:393,width:692,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAeUlEQVR42jXJSwrCMBQF0CzeXSguoQ4sjpWuQDoQ0UIVjFgUP02T95KbXnHgmR5D8q7D/Lx9ix9JAKksUdfmF8EVdvd0n9G9YvBaVWga0x6vxXTNTELyagJ7UBKkcb2/nDoVSYMP1jKn2XK/2LSGf9CYJBKwXX97uC/PHm5z9UzCxwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},5595:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/bgp3.97b80d57.png",height:331,width:692,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaUlEQVR42iXL3QpAMBiA4d24K3AHrkRyKErJEfmPUZutzc9kpb5m8R69Jw8yxqRycctEUK7Pox+JE9/jDkiwLau7jGA5Y5anK6FRfx4aUFVMy0CsA46vwOOUrW1rKTJfAPCPkHvjh49SL6uJVqoShkW+AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},6005:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/csma1.cf0a5984.png",height:519,width:1667,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAMElEQVR42gWAwQ0AIQgE7b9WHyd4hFmImtHdCdvd1rfmtP0DkkZVZWaLWzpuQhEBPITbLmLUAnyFAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},404:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/csma2.bb5edc20.png",height:95,width:692,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKElEQVR4nAWA0Q0AEAxEX08i7L+hHUjVx0nsdewyBpoChcj7mKOTFB8DbgzFHZEZXwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},7667:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/csma3.7cc488b6.png",height:383,width:754,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42h3BSQ6AIAwAQP7/Mx7BRROlyGLAlqZsJswoEWFmaRJSAO/CG8EBCytjjNY6l4xUjwtO6x6f7ieoa/sQ+xhYayGS1guimnOuTVqLKVqwVGmt9QOCZVpluzNXmgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},8342:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/gbn1.3a5615ba.png",height:273,width:1338,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAOUlEQVR42iXBSQoAIQwEQP//unnCHBQRQXEjphOXg1Wm0Ip5CFCfVn/voWI+y51wzmZmFSVMl4IAF3UoLcbWJ3CZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},1378:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/gbn2.6b160077.png",height:274,width:1333,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAN0lEQVR42gVAwQnAIAx0//W6QGkVxF8wYu5MVBLW/puSFBEd2nJ9v7zC0zQ+BR7bbAI44b0LyAtyGS3BvsjqqQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},2032:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/ip.a92ff53e.png",height:716,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAeUlEQVR42hXJOxaCQAwF0JchUWD8FBbuf1U2Vq7AgxyFSXhR23vlNT+nd/RlPdbBQ6Z5oe3GYZDb4x5phkXpFrY2WmaE6+XUcWuJTqRvAWmf4q2qKrkBIpICVs99AN3ITP0ZSfwTofVwvu7MAJQkMoFEkqC38A0spl/eoEW6uO+dUQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},1745:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/ospf.1bc6ae14.png",height:605,width:896,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAc0lEQVR42g2JKw4CQRBE59QEi+UICBR2AwkKg0BxBgxZt3Y3Mz3dU/3ZrjxRVa8QodYBQRKGiMTcvbhH5r/Y7TPOT7686DdzmJZ8O+PxpeOE070fJr2+e+MoZr6uFdIBbFt1FW6NWVKYyBjQLERdRZBDbQcUt2+NvSJLeQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},7285:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/sr1.55b7d21a.png",height:226,width:1319,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIklEQVR42mN89PYPH+svHk7WX79/MzEyff35/f3nL/ISEgCleAzznvJyrwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},1820:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/sr2.6ca184e8.png",height:227,width:1311,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIklEQVR42mN4/uH3i7ff/v75/e3bt+9A8OPn3SdPf/36BQAdeRbV5spcGQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},1612:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/sr3.425e873f.png",height:234,width:1315,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAIklEQVR42mN88eE347/fIvxsP3/+YmRkZGJifvTqpbyEOAChzgrxMN8jsQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1}},4815:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/sw.c71cd027.png",height:517,width:1309,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAARElEQVR42g3GQRaAIAgFQO9/yzIRwv8CMda6mTfl6dq6doYS15uIR2Mci+p3KpiwIIEIriaVUcznyvQIi+V/us9XByw2o1FCVm4LF0wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},9439:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/tcp1.45c8b332.jpg",height:707,width:1678,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKmGP//EABoQAAICAwAAAAAAAAAAAAAAAAECABEUIVH/2gAIAQEAAT8AVRajdZvZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAEDAQE/AMKl/9k=",blurWidth:8,blurHeight:3}},9191:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/tcp2.58e7545f.jpg",height:648,width:1608,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKUF/wD/xAAbEAEAAQUBAAAAAAAAAAAAAAABAgAEETE0Y//aAAgBAQABPwAzK1ksnsTfrX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAQf/aAAgBAgEBPwCv/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAxQf/aAAgBAwEBPwBAo1n/2Q==",blurWidth:8,blurHeight:3}},1769:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/tcp3.78ab9c8b.jpg",height:394,width:676,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAroP/xAAYEAACAwAAAAAAAAAAAAAAAAAAASEiMf/aAAgBAQABPwBxXT//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5}},8126:function(A,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/tcpudp.df38cd0e.jpg",height:304,width:547,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKkJf//EABkQAAIDAQAAAAAAAAAAAAAAABJBAAERIf/aAAgBAQABPwAsHlJT/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:4}}},function(A){A.O(0,[954,413,202,971,472,744],function(){return A(A.s=2724)}),_N_E=A.O()}]);