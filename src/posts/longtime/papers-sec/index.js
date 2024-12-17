import X from 'src/component/X';

/******
 
Attacks on WebView in the Android System 
https://surface.syr.edu/cgi/viewcontent.cgi?article=1217&context=eecs

1.Dina: Detecting hidden android inter-app communication in dynamic loaded code

2.A SEALANT for Inter-App Security Holes in Android 

3.Uncovering Intent based Leak of Sensitive Data in Android Framework

Unauthorized Origin Crossing on Mobile Platforms: Threats and Mitigation
https://homes.luddy.indiana.edu/xw7/papers/wang2013unauthorized.pdf （精读一下）



Unleashing the Walking Dead: Understanding Cross-App Remote Infections on Mobile WebViews
https://homes.luddy.indiana.edu/luyixing/bib/ccs17-unleashing.pdf

IccTA: detecting inter-component privacy leaks in Android apps
https://dl.acm.org/doi/pdf/10.5555/2818754.2818791

Leaking the Privacy of Groups and More: Understanding Privacy Risks of Cross-App Content Sharing in Mobile Ecosystem 
https://www.ndss-symposium.org/wp-content/uploads/2024-138-paper.pdf
https://www.youtube.com/watch?v=7IvzrBEfwx4

O Single Sign-Off, Where Art Thou? An Empirical Analysis of Single Sign-On Account Hijacking and Session Management on the Web
https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-ghasemisharif_0.pdf

inurl:dl.acm.org OR inurl:ndss OR inurl:usenix.org "inter-app" OR "cross-app"
******/

export default function Post() {
    return (
        <>
            <X.H1>2FA</X.H1>
            <X.H2 href="https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-karapanos.pdf">
                Sound-Proof: Usable Two-Factor Authentication Based on Ambient Sound (Security 2015)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    论文提出Sound-Proof，一种新的2FA机制，通过比较两个设备的麦克风收集的环境噪声判断两个设备的接近度，以免除用户在传统2FA中不得不与手机交互，带来更大的便利。
                </X.P>
                <X.P>论文表明环境噪声是一个很强的判别器。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://nsaxena.engr.tamu.edu/wp-content/uploads/sites/238/2019/12/ssss-ccs16.pdf">
                The Sounds of the Phones: Dangers of Zero-Effort Second Factor Login based on Ambient Audio (CCS 2016)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    论文提出一种针对基于环境音比较的2FA机制（例如Sound-Proof）的攻击方法，即让被攻击者手机播放通知铃声等可预测的音效，从而轻易的复制出相近的环境音。
                </X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>
                    Zero-effort 2FA
                    schemes：各种新的2FA机制，旨在只输入密码就能完成认证流程，减少用户负担；例如不需要再查看手机收到的验证码。
                </X.P>
            </X.HighlightBlock>
            <X.H2 href="https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?params=/context/sis_research/article/5214/&path_info=p53_liu.pdf">
                Typing-Proof: Usable, Secure and Low-Cost Two-Factor Authentication Based on Keystroke Timings (ACSAC
                2018)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    Sound-Proof虽然简化了用户操作，但是存在一些问题比如安静环境、电脑设备没有内置麦克风等，在一些攻击场景如近距离`co-located
                    attack`下有安全问题。论文提出的Typing-Proof：
                </X.P>
                <X.Uli>PC端输入密码后，要求用户输入一些随机的字符</X.Uli>
                <X.Uli>PC端通过JavaScript记录所有按键发生的时间戳序列，手机端通过麦克风记录敲击声音</X.Uli>
                <X.Uli>时间戳序列通过服务器发送到手机端，比较是否匹配</X.Uli>
                <X.Uli>
                    如果匹配，认证成功；\n如果认证失败，Typing-Proof还提供了一个备用方案，也就是在手机端显示输入的字符，用户确认和PC端自己的输入一致后，在手机端选择“确认”或“拒绝”登录。（One-Button
                    Authentication）
                </X.Uli>
                <X.P>
                    Typing-Proof能更好的应对近距离攻击（复制键盘敲击声不仅要求攻击者与用户在同一环境，同时还要有非常近的物理距离）和攻击者故意触发使用户手机播放特定音频（如消息铃声）的攻击（因为键盘敲击声很难远程模拟）。
                </X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>一些用户手机交互更少的2FA机制：</X.P>
                <X.Uli>Sound-Proof</X.Uli>
                <X.Uli>
                    One-Button
                    Authentication：一键认证，用户在PC登录时手机端会有提示，用户选择允许/拒绝即可；如果攻击者在短时间内同步登录，用户如果没有正确分辨出请求的发起方，可能存在安全问题。
                </X.Uli>
            </X.HighlightBlock>
            <X.H1>跨x通信</X.H1>
            <X.H2 href="https://dl.acm.org/doi/pdf/10.1145/3548606.3560597">
                Cross Miniapp Request Forgery: Root Causes, Attacks, and Vulnerability Detection (CCS 2022)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    当发生微信小程序跳转时，如果接收端没有检查`referrerInfo.appId`，就有可能收到CMRF攻击。攻击者可以用自己的恶意小程序通过`wx.navigateToMiniProgram`跳转到受害者的小程序，携带自定义的`extraData`实现攻击。
                </X.P>
                <X.P>两种类型的攻击：CMRF for Data Manipulation (CMRF-DM)、CMRF for Data Stealing (CMRF-DS)</X.P>
                <X.Image src="cmrf.jpg" width="600px" filterDarkTheme />
                <X.P>
                    数据篡改：攻击方是发送方，使接收方收到恶意的非预期数据；\n数据盗窃：在攻击方发送假请求之后，如果还能收到响应的数据（这里指接收方通过`wx.navigateBackMiniProgram`的`extraData`返回给发送方的数据），则还可能造成意外的隐私泄露。
                </X.P>
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
            <X.H2 href="https://people.eecs.berkeley.edu/~daw/papers/intents-mobisys11.pdf">
                Analyzing Inter-Application Communication in Android (MobiSys 2011)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>Android应用程序消息传递中的漏洞与检测工具ComDroid。</X.P>
                <X.P>基于`Intent`的攻击方式：</X.P>
                <X.Oli reset>
                    <X.P>未经授权的Intent接收（Unauthorized Intent Receipt） - 攻击方是接收方</X.P>
                    <X.Uli>
                        Broadcast
                        Theft：广播可能被精心注册了匹配规则`(intent-filter)`的恶意第三方应用窃听；如果是有序广播还可能被拦截。
                    </X.Uli>
                    <X.Uli>
                        Activity
                        Hijacking：同样地，恶意应用也可以在`Activity`中注册匹配目标隐式`Intent`的规则；尽管出现多个可匹配应用时会提示用户选择用哪个应用打开，攻击者可以伪装恶意应用的名字等信息以增加欺骗成功的可能性。
                    </X.Uli>
                    <X.Uli>
                        Service Hijacking：恶意服务拦截了一个启动预期服务的`Intent`。（2014年的Android
                        5.0以后要求服务必须显式启动）
                    </X.Uli>
                    <X.Uli>Special Intents</X.Uli>
                </X.Oli>
                <X.Oli>
                    <X.P>Intent欺骗攻击（Intent Spoofing） - 攻击方是发送方</X.P>
                    <X.Uli>
                        Malicious Broadcast
                        Injection：如果导出的（`android:exported="true"`）`BroadcastReceiver`盲目信任外部广播`Intent`，可能造成非预期行为。
                    </X.Uli>
                    <X.Uli>Malicious Activity Launch：导出的`Activity`可以被外部的显式/隐式`Intent`启动。</X.Uli>
                    <X.Uli>
                        Malicious Service Launch：类似地，导出的未受`permission`保护的`Service`可以被任何应用程序绑定。
                    </X.Uli>
                </X.Oli>
            </X.HighlightBlock>
            <X.H1>其他</X.H1>
            <X.H2 href="https://www.usenix.org/system/files/sec20-elsabagh.pdf">
                FIRMSCOPE: Automatic Uncovering of Privilege-Escalation Vulnerabilities in Pre-Installed Apps in Android
                Firmware (Security 2020)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    Android系统会有一些预安装的应用程序，这些应用程序随着固件一起发布，通常具有一些特权并且用户无法卸载。这些应用程序由设备供应商“精心”开发、并且通常被认为是安全的；论文发现这些应用程序中存在提权漏洞，并设计了工具FIRMSCOPE来自动发现这些漏洞。
                </X.P>
                <X.P>例如一个攻击实例：</X.P>
                <X.Image src="firmscope.jpg" width="100%" filterDarkTheme />
            </X.HighlightBlock>
            <X.H2 href="https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf">
                Gossamer: Securely Measuring Password-based Logins (Security 2022)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    用户提交的登录信息（如密码）的特征对于制定更好的安全策略、提升系统的易用性以及检测攻击至关重要。然而，由于密码的高度敏感性，直接监测存在很大的安全风险，因此需要开发一种既能提供有用统计信息又能确保密码安全的测量基础设施。
                </X.P>
                <X.P>论文设计了一个名为Gossamer的测量系统，可以安全地记录登录请求，包括提交的密码的统计数据。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://www.comp.nus.edu.sg/~liangzk/papers/asiaccs11.pdf">
                Jump-Oriented Programming: A New Class of Code-Reuse Attack (AsiaCCS 2011)
            </X.H2>
            <X.HighlightBlock background="gray">
                <X.P>
                    ROP在栈溢出漏洞的基础上，利用程序中已有的gadgets（以`ret`结尾的指令序列），把参数和指向gadgets的地址写入栈中，从而操纵控制流；由于最终是由`ret`完成跳转，ROP攻击对栈有依赖。（因而也存在一些防御手段）
                </X.P>
                <X.P>
                    JOP利用以`jmp`结尾的gadgets，有不依赖栈的好处，然而需要解决的问题是，并没有一个统一的机制将这些gadgets连接起来。（在ROP里，`ret`会从栈上读取数据改变`ip`，而栈上的数据可控）
                </X.P>
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
                <X.Uli>
                    Dispatch Table：就像一个虚拟的栈，每一项可能是下一个Functional
                    Gadget的地址，或者一些指令（比如`pop`）要用到的中间数据等。由Dispatcher
                    Gadget来实现控制流。这也是前面提到*【没有一个统一的机制将这些gadgets连接起来】*的解决方案。
                </X.Uli>
                <X.Uli>
                    Functional Gadgets：真正执行目标逻辑的代码片段，以`jmp`指令结尾，并且需要最终跳转到Dispatcher
                    Gadget（这样才能完成循环）。
                </X.Uli>
            </X.HighlightBlock>
        </>
    );
}
