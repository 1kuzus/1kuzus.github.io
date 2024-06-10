import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/cross-site-request-forgery/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1>概念与威胁模型</X.H1>
            <X.P>
                *跨站请求伪造*`(Cross-site Request Forgery, CSRF)`是一种冒充受信任用户，---
                向服务器发送非预期请求的攻击方式。CSRF主要利用浏览器会自动携带cookie的特性。
            </X.P>
            <X.Image src="csrf.webp" width="800px" invertInDarkTheme />
            <X.Oli>用户登录网站，例如银行网站；</X.Oli>
            <X.Oli>网站返回cookie用于验证身份；</X.Oli>
            <X.Oli>
                <X.P>假设银行转账的请求形式是：</X.P>
                <X.CodeBlock
                    language="text"
                    code="http://www.mybank.com/transfer?to=[SomeAccount]&amount=[SomeAmount]"
                />
                <X.P>攻击者如果知道此形式（这是容易的），就可以构造一个恶意站点，这个站点会发送请求：</X.P>
                <X.CodeBlock language="text" code="http://www.mybank.com/transfer?to=attacker&amount=1000" />
            </X.Oli>
            <X.Oli>用户访问恶意站点时，触发了这个请求；</X.Oli>
            <X.Oli>
                由于用户经过登录后存有用于验证身份的cookie，服务器会认为请求是有效的，因而导致了非预期操作的发生。
            </X.Oli>

            <X.P withMarginTop>恶意站点构造可能如下：</X.P>
            <X.CodeBlock
                language="html"
                code={`
                <html>
                    <body>
                        <form action="https://www.mybank.com/transfer" method="POST">
                            <input type="hidden" name="to" value="attacker" />
                            <input type="hidden" name="amount" value="1000" />
                        </form>
                        <script>
                            document.forms[0].submit();
                        </script>
                    </body>
                </html>
                `}
            />
            <X.P>
                当用户访问这个页面时，`POST`请求会被触发；如果用户登录了`www.mybank.com`，请求时会自动带上cookie；---
                `www.mybank.com`认为这是用户的请求，因而将其作为正常请求处理。
            </X.P>
            <X.H1>参考资料</X.H1>
            <X.P noMarginBottom>本文的插图和例子来源于：</X.P>
            <X.Uli>
                @Cross site request forgery (CSRF)
                attack[https://medium.com/@rajeevranjancom/cross-site-request-forgery-csrf-attack-6949edb9e405]@
            </X.Uli>
            <X.Uli>
                @Portswigger - What is CSRF (Cross-site request forgery)?[https://portswigger.net/web-security/csrf]@
            </X.Uli>
        </>
    );
}
