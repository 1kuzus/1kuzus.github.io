import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/papers-sec-240922-pre-hijacked-accounts/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>相关链接：</X.P>
            <X.Uli>@Pre-hijacked accounts: An Empirical Study of Security Failures in User Account Creation on the Web[https://www.usenix.org/system/files/sec22-sudhodanan.pdf]@</X.Uli>
            <X.HighlightBlock background="blue">
                <X.H3>笔记</X.H3>
                <X.H3>IdP</X.H3>
                <X.P>IdP`(Identity Provider)`是？todo？</X.P>
            </X.HighlightBlock>
            <X.H1>中心思想</X.H1>
            <X.P>相比于一般的账户劫持`(Account Hijacking)`目的是获取受害者的账号权限或隐私，本文的`Pre-Hijacking`是指攻击者可以在用户账户*创建之前*执行某些操作，使得账户创建后攻击者可以容易地获取权限。</X.P>
            <X.H1>主要内容</X.H1>
            <X.P>论文的核心是提到的以下`5`种攻击：</X.P>
            <X.H2>Classic-Federated Merge Attack</X.H2>
            <X.P>假设服务允许经典方法（账号密码）和SSO登录，并用邮箱地址作为用户的唯一标识：</X.P>
            <X.Uli>攻击者使用目标用户的邮箱地址（当然，攻击者没有登录邮箱的权限）和攻击者选择的密码，用普通方式创建一个账户；</X.Uli>
            <X.Uli>稍后目标用户决定在此服务上使用SSO创建一个账户，由于攻击者创建了相同邮箱地址的账户，这两个账户可能被服务商有意或无意地合并；</X.Uli>
            <X.Uli>用户可以SSO登录自己的账户（并认为是新创建的账户），攻击者可以通过之前设置的密码普通方式登录。</X.Uli>
            <X.H2>Unexpired Session Attack</X.H2>
            <X.P>此攻击利用了一个漏洞，即重置密码时，已经过身份验证的用户不会退出帐户。这允许攻击者即使在受害者重置密码后，仍然可以保留对帐户的访问权限：</X.P>
            <X.Uli>假设攻击者用目标用户的邮箱地址和攻击者选择的密码能够成功创建一个账户；</X.Uli>
            <X.Uli>攻击者通过操作（比如自动化脚本）使得`session`一直保持活跃；</X.Uli>
            <X.Uli>目标用户想创建账户时意外发现已经存在，并且无法登录（因为密码是攻击者设置的），此时会选择重置密码；</X.Uli>
            <X.Uli>如果重置密码时服务商没有使所有活跃`session`失效，攻击者只要一直维持先前的`session`就可以持续访问目标用户账户。</X.Uli>
            <X.H2>Trojan Identifier Attack</X.H2>
            <X.P>todo</X.P>
            <X.H2>Unexpired Email Change Attack</X.H2>
            <X.P>更改电子邮件地址时，服务会向新电子邮件地址发送确认链接或验证码来确认更改者对邮箱的所有权；然而如果有效期过长（例如持续几天）可能会带来风险：</X.P>
            <X.Uli>假设攻击者用目标用户的邮箱地址和攻击者选择的密码能够成功创建一个账户；</X.Uli>
            <X.Uli>攻击者请求更改电子邮箱地址为自己的邮箱地址，但暂时并没有点击确认链接或输入验证码；</X.Uli>
            <X.Uli>目标用户想创建账户时意外发现已经存在（因为攻击者没有确认更改，此时绑定的仍然是受害者邮箱），并且无法登录，此时会选择重置密码；</X.Uli>
            <X.Uli>攻击者稍后确认更改邮箱地址，并且可以用自己的邮箱来做重置密码的认证，这时目标用户就会丢失对此账户的访问权限。</X.Uli>
            <X.H2>Non-verifying IdP Attack</X.H2>
            <X.P>todo</X.P>
        </>
    );
}
