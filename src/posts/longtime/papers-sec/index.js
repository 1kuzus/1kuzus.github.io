import X from 'src/component/X';

/*
Demystifying Resource Management Risks in Emerging Mobile App-in-App Ecosystems (CCS 2020)
https://xw48.github.io/files/lu2020demystifying.pdf

Industry practice of Javascript dynamic analysis on WeChat mini-programs (ASE 2020)
https://yepangliu.github.io/files/WeJalangi_ASE2020_Industry_Track.pdf

Characterizing and detecting bugs in WeChat mini-programs (ICSE 2022)
https://dl.acm.org/doi/pdf/10.1145/3510003.3510114

Identity Confusion in WebView-based Mobile App-in-app Ecosystems (Security 2022)
https://www.usenix.org/system/files/sec22-zhang-lei.pdf

A Small Leak Will Sink Many Ships: Vulnerabilities Related to mini-programs Permissions (COMPSAC 2023)
https://arxiv.org/pdf/2205.15202

Don't Leak Your Keys: Understanding, Measuring, and Exploiting the AppSecret Leaks in Mini-Programs (CCS 2023)
https://dl.acm.org/doi/pdf/10.1145/3576915.3616591

Measuring the Leakage and Exploitability of Authentication Secrets in Super-apps: The WeChat Case (RAID 2023)
https://arxiv.org/pdf/2307.09317

MiniTracker: Large-Scale Sensitive Information Tracking in Mini Apps (TDSC 2023)
https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10197457

TAINTMINI: Detecting Flow of Sensitive Data in Mini-Programs with Static Taint Analysis (ICSE 2023)
https://chaowang.dev/publications/icse23.pdf

Uncovering and Exploiting Hidden APIs in Mobile Super Apps (CCS 2023)
https://dl.acm.org/doi/pdf/10.1145/3576915.3616676

One Size Does Not Fit All: Uncovering and Exploiting Cross Platform Discrepant APIs in WeChat (Security 2023)
https://www.usenix.org/system/files/usenixsecurity23-wang-chao.pdf

Wemint:Tainting Sensitive Data Leaks in WeChat Mini-Programs (ASE 2023)
https://shenaow.github.io/files/ase23wemint.pdf

SoK: Decoding the Super App Enigma: The Security Mechanisms, Threats, and Trade-offs in OS-alike Apps
https://arxiv.org/pdf/2306.07495

Understanding Privacy Over-collection in WeChat Sub-app Ecosystem
https://arxiv.org/pdf/2306.08391

Do as You Say: Consistency Detection of Data Practice in Program Code and Privacy Policy in Mini-App (TSE 2024)
https://arxiv.org/pdf/2302.13860

# SaTS 2023 https://www.sigsac.org/ccs/CCS2023/tocs/tocs-sats23.html
JSLibD: Reliable and Heuristic Detection of Third-party Libraries in Miniapps
TrustedDomain Compromise Attack in App-in-app Ecosystems
MiniTaintDev: Unveiling Mini-App Vulnerabilities through Dynamic Taint Analysis
MUID: Detecting Sensitive User Inputs in Miniapp Ecosystems
On the Usage-scenario-based Data Minimization in Mini Programs
Potential Risks Arising from the Absence of Signature Verification in Miniapp Plugins
Systematic Analysis of Security and Vulnerabilities in Miniapps
Towards a Better Super-App Architecture from a Browser Security Perspective
Shared Account Problem in Super Apps
*/

/******
Unleashing the Walking Dead: Understanding Cross-App Remote Infections on Mobile WebViews (CCS 2017)
https://homes.luddy.indiana.edu/luyixing/bib/ccs17-unleashing.pdf

{CryptoREX}: Large-scale analysis of cryptographic misuse in {IoT} devices,
******/

export default function Post() {
    return (
        <>
            <X.H1>移动</X.H1>
            <X.H2 href="https://www.ronia.net/papers/Lee17ICSE.pdf">A SEALANT for Inter-App Security Holes in Android (ICSE 2017)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>SEALANT是论文提出的一种*防护跨应用攻击*的技术。SEALANT有Analyzer和Interceptor两部分，Analyzer通过静态分析识别潜在的易受攻击的组件间通信路径，Interceptor在应用运行时对这些路径上的`Intent`通信进行实时监控。</X.P>
                <X.P>实现方面，是在ASOP上实现了Interceptor，修改了一些标准Android组件的源码。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://moonzhh.github.io/files/LeakDetector.pdf">Uncovering Intent based Leak of Sensitive Data in Android Framework (CCS 2022)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>一个新的攻击面：Android框架发送的`Intent`对象，被一个未授权（没有申请任何权限的）App接收。</X.P>
                <X.P>之前的工作有研究App之间基于`Intent`的信息泄露，发送方是App，而这篇论文研究的问题*发送方是Android框架*。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://seal.ics.uci.edu/projects/covert/2015ICSE.pdf">Analysis of Android Inter-App Security Vulnerabilities Using COVERT (ICSE 2015)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>本文侧重点是*多应用复合*漏洞，期望对输入的一组apk进行检测分析。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://surface.syr.edu/cgi/viewcontent.cgi?article=1217&context=eecs">Attacks on WebView in the Android System (ACSAC 2011)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>普通浏览器的一个重要作用是隔离网页（中的JS）和操作系统，因此使用可信的浏览器很重要；但`WebView`恰好是为了使得网页与Android系统更灵活的交互，因此打破了浏览器的这种隔离机制。本文主要介绍了和`WebView`相关的攻击。</X.P>
                <X.P>`addJavascriptInterface`是Android中`WebView`类的一个方法，用于将Java对象暴露给JavaScript代码，然后JavaScript可以直接调用Android中Java对象的方法，从而实现Android与网页中的JavaScript进行交互。此外，如果赋予`WebView`读写文件的能力，则打破了浏览器的同源机制，因为不同的站点都可以在同一份文件上进行读写。</X.P>
                <X.P>如果网页是恶意的，并且App通过`addJavascriptInterface`提供了接口，则可能导致被执行恶意代码（危害App），或污染其他站点需要访问的数据（危害其他站点）。</X.P>
                <X.P>如果App是恶意的，可能会被：</X.P>
                <X.Uli>JS注入：`WebView`给App提供了在网页中注入JS的能力；</X.Uli>
                <X.Uli>事件劫持：`WebViewClient`类提供了一些网页事件的钩子，App可以重写这些方法。</X.Uli>
            </X.HighlightBlock>
            <X.H2 href="https://www.usenix.org/legacy/event/sec11/tech/full_papers/Felt.pdf">Permission re-delegation: attacks and defenses (Security 2011)</X.H2>
            <X.HighlightBlock background="gray">
                <X.Image src="permission-re-delegation.jpg" width="400px" filterDarkTheme />
                <X.P>重授权攻击：Requester没有访问某个API的权限，而Deputy有；如果Deputy有公共的接口，则可以被Requester间接访问API。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://people.eecs.berkeley.edu/~daw/papers/intents-mobisys11.pdf">Analyzing Inter-Application Communication in Android (MobiSys 2011)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>Android应用程序消息传递中的漏洞与检测工具ComDroid。</X.P>
                <X.P>基于`Intent`的攻击方式：</X.P>
                <X.Oli reset>
                    <X.P>未经授权的Intent接收（Unauthorized Intent Receipt）：攻击方是接收方</X.P>
                    <X.Uli>Broadcast Theft：广播可能被精心注册了匹配规则`(intent-filter)`的恶意第三方应用窃听；如果是有序广播还可能被拦截。</X.Uli>
                    <X.Uli>Activity Hijacking：同样地，恶意应用也可以在`Activity`中注册匹配目标隐式`Intent`的规则；尽管出现多个可匹配应用时会提示用户选择用哪个应用打开，攻击者可以伪装恶意应用的名字等信息以增加欺骗成功的可能性。</X.Uli>
                    <X.Uli>Service Hijacking：恶意服务拦截了一个启动预期服务的`Intent`。（2014年的Android 5.0以后要求服务必须显式启动）</X.Uli>
                    <X.Uli>Special Intents</X.Uli>
                </X.Oli>
                <X.Oli>
                    <X.P>Intent欺骗攻击（Intent Spoofing）：攻击方是发送方</X.P>
                    <X.Uli>Malicious Broadcast Injection：如果导出的（`android:exported="true"`）`BroadcastReceiver`盲目信任外部广播`Intent`，可能造成非预期行为。</X.Uli>
                    <X.Uli>Malicious Activity Launch：导出的`Activity`可以被外部的显式/隐式`Intent`启动。</X.Uli>
                    <X.Uli>Malicious Service Launch：类似地，导出的未受`permission`保护的`Service`可以被任何应用程序绑定。</X.Uli>
                </X.Oli>
                <X.P>ComDroid只是报告*不受保护的导出的组件*，不会区分那些为了应用间协作而刻意导出的组件（由开发者自行确认）。</X.P>
            </X.HighlightBlock>
            {/* -------------------------------- */}
            <X.H1>小程序</X.H1>
            <X.H2 href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10197457">MiniTracker: Large-Scale Sensitive Information Tracking in Mini Apps (TDSC 2023)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>为检测小程序生态中的敏感数据泄露设计的静态污点分析工具MiniTracker。</X.P>
                <X.P>考虑的污点源与污点汇：</X.P>
                <X.Uli>
                    <X.P>污点源：</X.P>
                    <X.Uli>设备信息：可用于确定设备状态、唯一识别用户或描述用户习惯的信息</X.Uli>
                    <X.Uli>定位</X.Uli>
                    <X.Uli>本地文件读取：比如`wx.chooseImage`</X.Uli>
                    <X.Uli>开放API：主应用提供的开放能力，比如`wx.getUserInfo`可以获取用户的帐户昵称和头像</X.Uli>
                </X.Uli>
                <X.Uli>
                    <X.P>污点汇：</X.P>
                    <X.Uli>网络请求</X.Uli>
                    <X.Uli>不通过网络的信息传输：比如蓝牙、短信、电话等</X.Uli>
                    <X.Uli>本地文件写入：比如`wx.setClipboardData`写入剪贴板后，其他应用可以从中读出信息</X.Uli>
                    <X.Uli>开放API：同样，有些开放API会把信息泄露给第三方，例如`wx.requestPayment`传递的参数会传输到支付服务</X.Uli>
                </X.Uli>
                <X.P>精读一下。</X.P>
            </X.HighlightBlock>

            <X.H2 href="https://dl.acm.org/doi/pdf/10.1145/3548606.3560597">Cross Miniapp Request Forgery: Root Causes, Attacks, and Vulnerability Detection (CCS 2022)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>当发生微信小程序跳转时，如果接收端没有检查`referrerInfo.appId`，就有可能收到CMRF攻击。攻击者可以用自己的恶意小程序通过`wx.navigateToMiniProgram`跳转到受害者的小程序，携带自定义的`extraData`实现攻击。</X.P>
                <X.P>两种类型的攻击：CMRF for Data Manipulation (CMRF-DM)、CMRF for Data Stealing (CMRF-DS)</X.P>
                <X.Image src="cmrf.jpg" width="600px" filterDarkTheme />
                <X.P>数据篡改：攻击方是发送方，使接收方收到恶意的非预期数据；\n数据盗窃：在攻击方发送假请求之后，如果还能收到响应的数据（这里指接收方通过`wx.navigateBackMiniProgram`的`extraData`返回给发送方的数据），则还可能造成意外的隐私泄露。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>跨小程序通信代码（发起端）：</X.P>
                <X.CodeBlock
                    language="js"
                    code={`
                    wx.navigateToMiniProgram({
                        appId: 'wxfdcee92a299bcaf1', // 例：腾讯公益
                        // path: 'page/index/index?id=123',
                        extraData: {
                            foo: 'bar'
                        },
                        success(res) {
                            // ...
                        }
                    })
                    `}
                />
                <X.P>跨小程序通信代码（接收端，如果有`extraData`）：</X.P>
                <X.CodeBlock
                    language="js"
                    code={`
                    // app.js
                    App({
                        onShow(options) {
                            if(options.referrerInfo.extraData) {
                                // ...
                            }
                        },
                        // ...
                    })
                    `}
                />
            </X.HighlightBlock>
            {/* -------------------------------- */}
            <X.H1>其他</X.H1>
            <X.H2 href="https://www.comp.nus.edu.sg/~liangzk/papers/asiaccs11.pdf">Jump-Oriented Programming: A New Class of Code-Reuse Attack (AsiaCCS 2011)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>ROP在栈溢出漏洞的基础上，利用程序中已有的gadgets（以`ret`结尾的指令序列），把参数和指向gadgets的地址写入栈中，从而操纵控制流；由于最终是由`ret`完成跳转，ROP攻击对栈有依赖。（因而也存在一些防御手段）</X.P>
                <X.P>JOP利用以`jmp`结尾的gadgets，有不依赖栈的好处，然而需要解决的问题是，并没有一个统一的机制将这些gadgets连接起来。（在ROP里，`ret`会从栈上读取数据改变`ip`，而栈上的数据可控）</X.P>
                <X.P>核心设计：</X.P>
                <X.Image src="jop.jpg" width="600px" filterDarkTheme />
                <X.Uli>
                    <X.P>Dispatcher Gadget：起到一个虚拟PC的作用，能够遍历Dispatch Table；抽象地说，类似于：</X.P>
                    <X.Formula text="pc \leftarrow f(pc); \\ goto \; *pc;" />
                    <X.P>更具体地，比如以下代码：</X.P>
                    <X.CodeBlock
                        language="text"
                        code={`
                        add  edx, 4
                        jmp  [edx]
                        `}
                    />
                </X.Uli>
                <X.Uli>Dispatch Table：就像一个虚拟的栈，每一项可能是下一个Functional Gadget的地址，或者一些指令（比如`pop`）要用到的中间数据等。由Dispatcher Gadget来实现控制流。这也是前面提到*【没有一个统一的机制将这些gadgets连接起来】*的解决方案。</X.Uli>
                <X.Uli>Functional Gadgets：真正执行目标逻辑的代码片段，以`jmp`指令结尾，并且需要最终跳转到Dispatcher Gadget（这样才能完成循环）。</X.Uli>
            </X.HighlightBlock>
            <X.H2 href="https://www.usenix.org/system/files/sec20-elsabagh.pdf">FIRMSCOPE: Automatic Uncovering of Privilege-Escalation Vulnerabilities in Pre-Installed Apps in Android Firmware (Security 2020)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>Android系统会有一些预安装的应用程序，这些应用程序随着固件一起发布，通常具有一些特权并且用户无法卸载。这些应用程序由设备供应商“精心”开发、并且通常被认为是安全的；论文发现这些应用程序中存在提权漏洞，并设计了工具FIRMSCOPE来自动发现这些漏洞。</X.P>
                <X.P>例如一个攻击实例：</X.P>
                <X.Image src="firmscope.jpg" width="100%" filterDarkTheme />
            </X.HighlightBlock>
            <X.H2 href="https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf">Gossamer: Securely Measuring Password-based Logins (Security 2022)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>用户提交的登录信息（如密码）的特征对于制定更好的安全策略、提升系统的易用性以及检测攻击至关重要。然而，由于密码的高度敏感性，直接监测存在很大的安全风险，因此需要开发一种既能提供有用统计信息又能确保密码安全的测量基础设施。</X.P>
                <X.P>论文设计了一个名为Gossamer的测量系统，可以安全地记录登录请求，包括提交的密码的统计数据。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-karapanos.pdf">Sound-Proof: Usable Two-Factor Authentication Based on Ambient Sound (Security 2015)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>论文提出Sound-Proof，一种新的2FA机制，通过比较两个设备的麦克风收集的环境噪声判断两个设备的接近度，以免除用户在传统2FA中不得不与手机交互，带来更大的便利。</X.P>
                <X.P>论文表明环境噪声是一个很强的判别器。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://nsaxena.engr.tamu.edu/wp-content/uploads/sites/238/2019/12/ssss-ccs16.pdf">The Sounds of the Phones: Dangers of Zero-Effort Second Factor Login based on Ambient Audio (CCS 2016)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>论文提出一种针对基于环境音比较的2FA机制（例如Sound-Proof）的攻击方法，即让被攻击者手机播放通知铃声等可预测的音效，从而轻易的复制出相近的环境音。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>Zero-effort 2FA schemes：各种新的2FA机制，旨在只输入密码就能完成认证流程，减少用户负担；例如不需要再查看手机收到的验证码。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?params=/context/sis_research/article/5214/&path_info=p53_liu.pdf">Typing-Proof: Usable, Secure and Low-Cost Two-Factor Authentication Based on Keystroke Timings (ACSAC 2018)</X.H2>
            <X.HighlightBlock background="gray">
                <X.P>Sound-Proof虽然简化了用户操作，但是存在一些问题比如安静环境、电脑设备没有内置麦克风等，在一些攻击场景如近距离`co-located attack`下有安全问题。论文提出的Typing-Proof：</X.P>
                <X.Uli>PC端输入密码后，要求用户输入一些随机的字符</X.Uli>
                <X.Uli>PC端通过JavaScript记录所有按键发生的时间戳序列，手机端通过麦克风记录敲击声音</X.Uli>
                <X.Uli>时间戳序列通过服务器发送到手机端，比较是否匹配</X.Uli>
                <X.Uli>如果匹配，认证成功；\n如果认证失败，Typing-Proof还提供了一个备用方案，也就是在手机端显示输入的字符，用户确认和PC端自己的输入一致后，在手机端选择“确认”或“拒绝”登录。（One-Button Authentication）</X.Uli>
                <X.P>Typing-Proof能更好的应对近距离攻击（复制键盘敲击声不仅要求攻击者与用户在同一环境，同时还要有非常近的物理距离）和攻击者故意触发使用户手机播放特定音频（如消息铃声）的攻击（因为键盘敲击声很难远程模拟）。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>一些用户手机交互更少的2FA机制：</X.P>
                <X.Uli>Sound-Proof</X.Uli>
                <X.Uli>One-Button Authentication：一键认证，用户在PC登录时手机端会有提示，用户选择允许/拒绝即可；如果攻击者在短时间内同步登录，用户如果没有正确分辨出请求的发起方，可能存在安全问题。</X.Uli>
            </X.HighlightBlock>
        </>
    );
}
