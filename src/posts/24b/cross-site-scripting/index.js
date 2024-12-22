import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>概念、分类与威胁模型</X.H1>
            <X.P>
                *跨站脚本攻击*`(Cross-site Scripting,
                XSS)`是一种常见的网络安全漏洞，攻击者通过在网页中插入恶意脚本，使得用户在浏览网页时执行这些脚本，从而达到攻击的目的。
            </X.P>
            <X.P>XSS攻击分为三种：反射型、存储型、DOM型。反射型和存储型是服务器端的漏洞，DOM型是客户端的漏洞。</X.P>
            <X.H2>Reflected XSS</X.H2>
            <X.P>
                反射型`(Reflected XSS)`/非持久型`(Non-Persistent
                XSS)`：服务器直接从HTTP请求中读取数据，并且返回到HTTP响应中。
            </X.P>
            <X.Image src="reflected.jpg" width="800px" />
            <X.Oli>攻击者发现有漏洞的站点，并构造恶意URL，例如URL中包含`script`标签；</X.Oli>
            <X.Oli>诱骗用户打开链接；</X.Oli>
            <X.Oli>服务器没有过滤URL中的输入，但也没有存储，而是直接反射到响应中；</X.Oli>
            <X.Oli>网站使用URL中的数据生成页面的某一部分内容，并返回；</X.Oli>
            <X.Oli>`script`标签被用户浏览器渲染，并执行了其中的恶意代码，例如将用户的cookie发送给攻击者。</X.Oli>
            <X.H2>Stored XSS</X.H2>
            <X.P>
                存储型`(Stored XSS)`/持久型`(Persistent
                XSS)`：网站将未正确过滤的数据储存在数据库中，例如论坛发言、用户评论等等。
            </X.P>
            <X.Image src="stored.jpg" width="800px" />
            <X.Oli reset>
                攻击者发现服务器会直接保存未过滤的用户输入，因此向服务器注入一段代码，例如留下一条包含`script`标签的评论；
            </X.Oli>
            <X.Oli>服务器未经过滤就保存了攻击者的输入数据；</X.Oli>
            <X.Oli>用户完全正常的访问网站；</X.Oli>
            <X.Oli>网站将内容返回，例如返回评论列表；</X.Oli>
            <X.Oli>评论中的`script`标签被渲染时执行。</X.Oli>
            <X.H2>DOM-Based XSS</X.H2>
            <X.P>
                DOM型`(DOM-Based
                XSS)`：DOM型XSS和反射型XSS很像，但DOM型XSS是由客户端的JavaScript代码处理数据时造成的漏洞，而不是服务器端。
            </X.P>
            <X.Image src="dom-based.jpg" width="800px" />
            <X.Oli reset>攻击者发现有漏洞的站点，并构造恶意URL；</X.Oli>
            <X.Oli>诱骗用户打开链接；</X.Oli>
            <X.Oli>服务器正常返回数据；</X.Oli>
            <X.Oli>对请求参数的处理在前端完成，例如在前端通过`innerHTML`了操作DOM，由此导致恶意代码被执行。</X.Oli>
            <X.H1>练习</X.H1>
            <X.P>下文给出的PortSwigger靶场中有关XSS的Lab目标是使得网站调用`alert()`函数。</X.P>
            <X.H2>Reflected XSS</X.H2>
            <X.P>
                @PortSwigger Lab: Reflected XSS into HTML context with nothing
                encoded[https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded]@
            </X.P>
            <X.Oli reset>随便搜索点什么，看到内容会反射到`h1`标题中。</X.Oli>
            <X.Image src="1-1.jpg" width="100%" />
            <X.Oli>尝试注入，搜索{'`<script>alert("hello");</script>`'}，完成。</X.Oli>
            <X.Image src="1-2.jpg" width="100%" />
            <X.H2>Stored XSS</X.H2>
            <X.P>
                @PortSwigger Lab: Stored XSS into HTML context with nothing
                encoded[https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded]@
            </X.P>
            <X.Oli reset>网站有评论系统，直接留言{'`<script>alert("hello");</script>`'}。</X.Oli>
            <X.Image src="2-1.jpg" width="100%" />
            <X.Oli>完成，可以看到再次加载页面时，评论内容未经过滤直接加载到HTML文档。</X.Oli>
            <X.Image src="2-2.jpg" width="100%" />
            <X.Divider />
            <X.Image src="2-3.jpg" width="100%" />
            <X.H2>DOM-Based XSS</X.H2>
            <X.P>
                @PortSwigger Lab: DOM XSS in `document.write` sink using source
                `location.search`[https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink]@
            </X.P>
            <X.Oli reset>同样的搜索框，搜索{'`<script>alert("hello");</script>`'}，发现这次被转义了。</X.Oli>
            <X.Image src="3-1.jpg" width="100%" />
            <X.Oli>仔细看一下文档代码，发现一个`script`标签，类似用来追踪用户搜索行为的埋点。</X.Oli>
            <X.Image src="3-2.jpg" width="100%" />
            <X.Oli>
                注意到URL参数中的`search`被直接写入`img`标签，因此这次搜索
                {'`"/><script>alert("hello");</script>`'}，载荷最前面的{'`"/>`'}先让`img`闭合即可。
            </X.Oli>
            <X.Image src="3-3.jpg" width="100%" />
            <X.H1>参考资料</X.H1>
            <X.P>本文的插图来源于：</X.P>
            <X.Uli>@Bilibili - XSS网络攻击 - 原理，类型和实践[https://www.bilibili.com/video/BV1rg411v7B8]@</X.Uli>
        </>
    );
}
