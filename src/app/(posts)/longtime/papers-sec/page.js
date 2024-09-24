import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/papers-sec/';
export const {metadata} = metas[path];

//Reining in the Web’s Inconsistencies with Site Policy https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-1_23091_paper.pdf
//Leaking the Privacy of Groups and More: Understanding Privacy Risks of Cross-App Content Sharing in Mobile Ecosystem https://www.ndss-symposium.org/wp-content/uploads/2024-138-paper.pdf
//“If I could do this, I feel anyone could:” The Design and Evaluation of a Secondary Authentication Factor Manager https://www.usenix.org/system/files/usenixsecurity23-smith.pdf

//Pre-hijacked accounts: An Empirical Study of Security Failures in User Account Creation on the Web https://www.usenix.org/system/files/sec22-sudhodanan.pdf

//O Single Sign-Off, Where Art Thou? An Empirical Analysis of Single Sign-On Account Hijacking and Session Management on the Web https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-ghasemisharif_0.pdf

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>2FA</X.H1>
            <X.H2 href="https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-karapanos.pdf">Sound-Proof: Usable Two-Factor Authentication Based on Ambient Sound (Security 2015)</X.H2>
            <X.HighlightBlock bgcolor="gray">
                <X.P>论文提出Sound-Proof，一种新的2FA机制，通过比较两个设备的麦克风收集的环境噪声判断两个设备的接近度，以免除用户在传统2FA中不得不与手机交互，带来更大的便利。</X.P>
                <X.P>论文表明环境噪声是一个很强的判别器。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://nsaxena.engr.tamu.edu/wp-content/uploads/sites/238/2019/12/ssss-ccs16.pdf">The Sounds of the Phones: Dangers of Zero-Effort Second Factor Login based on Ambient Audio (CCS 2016)</X.H2>
            <X.HighlightBlock bgcolor="gray">
                <X.P>论文提出一种针对基于环境音比较的2FA机制（例如Sound-Proof）的攻击方法，即让被攻击者手机播放通知铃声等可预测的音效，从而轻易的复制出相近的环境音。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>Zero-effort 2FA schemes：各种新的2FA机制，旨在只输入密码就能完成认证流程，减少用户负担；例如不需要再查看手机收到的验证码。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?params=/context/sis_research/article/5214/&path_info=p53_liu.pdf">Typing-Proof: Usable, Secure and Low-Cost Two-Factor Authentication Based on Keystroke Timings (ACSAC 2018)</X.H2>
            <X.HighlightBlock bgcolor="gray">
                <X.P>Sound-Proof虽然简化了用户操作，但是存在一些问题比如安静环境、电脑设备没有内置麦克风等，在一些攻击场景如近距离`co-located attack`下有安全问题。文章提出的Typing-Proof：</X.P>
                <X.Uli>PC端输入密码后，要求用户输入一些随机的字符</X.Uli>
                <X.Uli>PC端通过JavaScript记录所有按键发生的时间戳序列，手机端通过麦克风记录敲击声音</X.Uli>
                <X.Uli>时间戳序列通过服务器发送到手机端，比较是否匹配</X.Uli>
                <X.Uli>如果匹配，认证成功；\n如果认证失败，Typing-Proof还提供了一个备用方案，也就是在手机端显示输入的字符，用户确认和PC端自己的输入一致后，在手机端选择“确认”或“拒绝”登录。（One-Button Authentication）</X.Uli>
                <X.P>Typing-Proof能更好的应对近距离攻击（复制键盘敲击声不仅要求攻击者与用户在同一环境，同时还要有非常近的物理距离）和攻击者故意触发使用户手机播放特定音频（如消息铃声）的攻击（因为键盘敲击声很难远程模拟）。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>一些用户手机交互更少的2FA机制：</X.P>
                <X.Uli>Sound-Proof</X.Uli>
                <X.Uli>One-Button Authentication：一键认证，用户在PC登录时手机端会有提示，用户选择允许/拒绝即可；如果攻击者在短时间内同步登录，用户如果没有正确分辨出请求的发起方，可能存在安全问题。</X.Uli>
            </X.HighlightBlock>

            {/* <X.H2 href="https://www.ndss-symposium.org/wp-content/uploads/2024-241-paper.pdf">Maginot Line: Assessing a New Cross-app Threat to PII-as-Factor Authentication in Chinese Mobile Apps (Security 2024)</X.H2> */}

            <X.H1>其他</X.H1>
            <X.H2 href="https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf">Gossamer: Securely Measuring Password-based Logins (Security 2022)</X.H2>
            <X.HighlightBlock bgcolor="gray">
                <X.P>用户提交的登录信息（如密码）的特征对于制定更好的安全策略、提升系统的易用性以及检测攻击至关重要。然而，由于密码的高度敏感性，直接监测存在很大的安全风险，因此需要开发一种既能提供有用统计信息又能确保密码安全的测量基础设施。</X.P>
                <X.P>论文设计了一个名为Gossamer的测量系统，可以安全地记录登录请求，包括提交的密码的统计数据。</X.P>
            </X.HighlightBlock>
        </>
    );
}
