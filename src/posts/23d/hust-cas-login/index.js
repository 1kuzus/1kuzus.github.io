import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>登录地址是@[https://pass.hust.edu.cn/cas/login]@。</X.P>
            <X.Image src="fig1.jpg" width="100%" />
            <X.H1>分析</X.H1>
            <X.P>我们大概知道登录接口一定是带了参数的`POST`请求，核心是要构造出请求的参数。首先随便输入账号和密码，`F12`打开调试窗口网络面板，查看请求：</X.P>
            <X.Image src="fig2.jpg" width="100%" />
            <X.P>显然我们要找的是`login`，点开详情：</X.P>
            <X.Image src="fig3.jpg" width="100%" />
            <X.P>下面是参数的含义，如果你不想看详细的分析过程，可以阅读后直接跳到下一节：</X.P>
            <X.Table
                fromText={`
                'rsa'|弃置
                'ul'|根据'username'前端加密
                'pl'|根据'password'前端加密
                'code'|验证码
                'phoneCode'|留空即可
                'lt'|固定参数
                'execution'|固定参数
                '_eventId'|固定参数
                `}
                tableStyle={{
                    thead: 'none',
                }}
            />
            <X.HighlightBlock>
                <X.P>此处有一个历史缘故。在2023年1月的时候，`ul`和`pl`是明文的用户名和密码的字符串长度，这也符合参数名`username length(ul)`，`rsa`是前端加密参数。后来华科登录接口似乎经历了一次改版，弃置了`rsa`参数，`ul`和`pl`变成了现在的意义。</X.P>
            </X.HighlightBlock>
            <X.P>言归正传，在没有预先知道参数含义的情况下，先从看起来是明文形式的后两个参数入手，直接搜索`_eventId`，找到了HTML中写表单的隐藏域（也就是`input type="hidden"`）的位置：</X.P>
            <X.Image src="fig4.jpg" width="100%" />
            <X.P>我们发现最后三个参数`value`值非空，是可以直接从HTML文档中读取的固定参数，尽管每次请求时它们可能不同。</X.P>
            <X.P>到这里，我们只剩`ul`，`pl`，`code`参数需要构造，分别需要进行逆向和OCR。</X.P>
            <X.H1>逆向</X.H1>
            <X.P>切换到源代码面板，新建一个`XHR/提取断点`，在“网址包含”填入主机`pass.hust.edu.cn`，这样在`POST`登录接口时一定会暂停：</X.P>
            <X.Image src="fig5.jpg" width="100%" />
            <X.P>这样做的目的是找到登录请求的调用链：</X.P>
            <X.Image src="fig6.jpg" width="100%" />
            <X.P>这样一步一步向下找，在`login`中看到了前端加密对应的代码：</X.P>
            <X.Image src="fig7.jpg" width="100%" />
            <X.P>我们把原来的断点取消，在`setPublicKey`和对`ul`加密的地方加入新的断点。</X.P>
            <X.Image src="fig8.jpg" width="100%" />
            <X.Image src="fig9.jpg" width="100%" />
            <X.P>找到加密函数的位置了，我们跳转到`jsencrypt.min.js`（注释里给出了正常用法）：</X.P>
            <X.Image src="fig10.jpg" width="100%" />
            <X.P>现在把整个代码复制到本地进行修改。在本地初次运行，首先是会因为本地是`node`环境遇到下面的报错：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                "Microsoft Internet Explorer" == navigator.appName ? (O.prototype.am = function (t, e, i, r, n, s) {
                                                 ^

                ReferenceError: navigator is not defined
                `}
            />
            <X.CodeBlock
                language="text"
                code={`
                if (window.crypto && window.crypto.getRandomValues) {
                    ^

                ReferenceError: window is not defined
                `}
            />
            <X.P>所以根据源代码内容，在文件最前面写这两行，只需要消掉报错即可：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                navigator = {appName: undefined};
                window = {crypto: undefined};
                `}
            />
            <X.P>接下来分析代码结构，因为源代码很长，所以中间的功能函数省略了：</X.P>
            <X.CodeBlock
                language="js"
                highlightLines="22-23"
                code={`
                navigator = {appName: undefined};
                window = {crypto: undefined};
                /*
                * var encrypt = new JSEncrypt();
                encrypt.setPublicKey(key);
                var en = encrypt.encrypt('test');
                * */
                !function(t, e) {
                    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.JSEncrypt = {})
                }(this, function(t) {
                    "use strict";
                    var e = "0123456789abcdefghijklmnopqrstuvwxyz";
                    function a(t) {
                        return e.charAt(t)
                    }
                    function i(t, e) {
                        return t & e
                    }

                    ...

                    window.JSEncrypt = rt,
                    t.JSEncrypt = rt,
                    t.default = rt,
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                });
                `}
            />
            <X.P>最外层是一个立即执行函数，参数列表`this`传给了`t`，后面一整个`function(t)`传给了`e`。分析一下第二个参数也就是函数`function(t)`的功能，在最后看到了`window.JSEncrypt=rt`和`t.JSEncrypt=rt`，再看注释中提示的用法:</X.P>
            <X.CodeBlock language="js" code="var encrypt = new JSEncrypt();" />
            <X.P>不难看出在浏览器环境中`rt`直接赋值给了`window.JSEncrypt`，同时我们的`node`环境如果想利用`rt`，就要从`t`中取出。</X.P>
            <X.P>回到代码最前面，立即执行函数体可以删掉，改成如下内容：</X.P>
            <X.CodeBlock
                language="js"
                highlightLines="1,4-6"
                code={`
                var encrypt;
                !function (t, e) {
                    //"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.JSEncrypt = {})
                    x={};
                    e(x);
                    encrypt = new x.JSEncrypt();
                }(this, function (t) {
                    "use strict";
                    ...
                `}
            />
            <X.P>然后我们在代码最后定义一个加密函数：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                encrypt.setPublicKey('MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJ7aKWURpJx4m8i4pB9P2pzNriT3UyhK6H20meKv8gFJmERA482JSi/DvZ4SkxP9INL5h8lGGvu5W3eTrpJaN3MCAwEAAQ==');

                function strEnc(text) {
                    return encrypt.encrypt(text)
                }

                console.log(strEnc('test')) //I2ieJi6q7pnlVGytaeHMGr6ejhfyBSi7bjEYDSdf4OkgweOkO6cwNdsQawPdun3AQCYApG5XhT8+/KRq1GS30w==
                `}
            />
            <X.P>可以得到加密的字符串。这里的`publicKey`是调试时复制来的值。我们不清楚这是不是一个固定的参数，因此同样分析一下这个参数的来源：</X.P>
            <X.Image src="fig11.jpg" width="100%" />
            <X.P>前面抓包时注意到有一个`XHR`请求，实际上这就是`publicKey`。</X.P>
            <X.P>至此我们已经可以在本地`node`环境跑通加密JS，我们把它命名为`encrypt.js`并创建一个稍后服务于爬虫程序的模块`encrypt.py`：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                # encrypt.py
                import execjs
                import re
                import os

                def encrypt(username, password, public_key):
                    root_dir = os.path.dirname(__file__)
                    with open(os.path.join(root_dir, "encrypt.js"), "r") as js_file:
                        jscode = js_file.read()
                    jscode = re.sub(r"setPublicKey\\('(.*?)'\\)", f"setPublicKey('{public_key}')", jscode)
                    encrypt_js = execjs.compile(jscode)
                    ul = encrypt_js.call("strEnc", username)
                    pl = encrypt_js.call("strEnc", password)
                    return ul, pl
                `}
            />
            <X.P>这个模块根据传入的`public_key`替换JS源代码中的部分，再编译，最后在Python环境中调用JS代码得到加密结果。</X.P>
            <X.HighlightBlock>
                <X.P>到目前位置，`public_key`参数一直都是同一个值（`MFwwDQYJKo...`）。</X.P>
            </X.HighlightBlock>
            <X.H1>OCR</X.H1>
            <X.P>华科的验证码是一个四位数字，干扰比较小，属于非常简单的验证码。验证码请求的地址是@[https://pass.hust.edu.cn/cas/code]@。</X.P>
            <X.P>核心的识别逻辑使用`ddddocr`库就可以了，不需要借助付费的打码平台。</X.P>
            <X.P>验证码是`gif`格式，考虑将所有帧叠加，再做二值化：</X.P>
            <X.Image src="fig12.jpg" width="160px" />
            <X.P>发现图像中会有干扰的细边，再做一次中值滤波：</X.P>
            <X.Image src="fig13.jpg" width="160px" />
            <X.P>处理过后的图像调库检测即可，OCR的源代码如下：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                # ocr.py
                from PIL import Image
                import ddddocr
                import numpy
                import cv2
                import io

                def ocr(code_gif_bin):
                    gif = Image.open(io.BytesIO(code_gif_bin))
                    frames = []
                    for i in range(4):
                        gif.seek(i)
                        frames.append(numpy.asarray(gif))

                    frames = [frame if len(frame.shape) == 2 else frame[:, :, 0] for frame in frames]  # 只用灰度图(RGB帧只拿一个通道)
                    frames = [255.0 - frame for frame in frames]  # 转换黑白(有字的地方将变成大值)
                    add = (255 - sum(frames))  # 将所有帧叠加，并再次转换黑白
                    add = numpy.where(add < 0, 0, add).astype("uint8")  # 叠加部分可能超过255，因此负值置零
                    add = numpy.where(add < 70, 0, 255)  # 二值化

                    # 过滤图像中的细边
                    flt = numpy.array([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
                    for h in range(1, add.shape[0] - 1):
                        for w in range(1, add.shape[1] - 1):
                            if add[h][w] == 255:
                                continue
                            x = add[h - 1:h + 2, w - 1:w + 2] * flt
                            if x.sum() > 5 * 255:
                                add[h][w] = 255

                    # 预测
                    success, img_byte = cv2.imencode(".png", add)
                    dddd = ddddocr.DdddOcr(show_ad=False)
                    res = dddd.classification(bytes(img_byte))

                    # 增强
                    res = res.replace("o", "0")
                    res = res.replace("O", "0")
                    res = res.replace("i", "1")
                    res = res.replace("l", "1")
                    res = res.replace("g", "9")
                    return res
                `}
            />
            <X.H1>登录</X.H1>
            <X.P>最后就是登录部分，源代码如下：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                from lxml import etree
                from .ocr import ocr
                from .encrypt import encrypt
                import requests

                def login(url_cas, username, password, headers=None, proxies=None):
                    url_captcha = "https://pass.hust.edu.cn/cas/code"
                    url_public_key = "https://pass.hust.edu.cn/cas/rsa"
                    with requests.Session() as session:
                        if proxies is not None:
                            session.proxies.update(proxies)

                        # get请求统一身份认证页，获取表单隐藏域的值
                        resp_get_url_cas = session.get(url=url_cas, headers=headers)
                        tree = etree.HTML(resp_get_url_cas.text)
                        lt = tree.xpath("//input[@name='lt']/@value")[0]
                        execution = tree.xpath("//input[@name='execution']/@value")[0]
                        eventId = tree.xpath("//input[@name='_eventId']/@value")[0]

                        # 请求验证码
                        code_gif_bin = session.get(url=url_captcha, headers=headers).content
                        code = ocr(code_gif_bin=code_gif_bin)

                        public_key = session.post(url=url_public_key, headers=headers).json()['publicKey']
                        ul, pl = encrypt(username=username, password=password, public_key=public_key)
                        data = {
                            "rsa": "",
                            "ul": ul,
                            "pl": pl,
                            "code": code,
                            "phoneCode": "",
                            "lt": lt,
                            "execution": execution,
                            "_eventId": eventId,
                        }

                        return session.post(url=url_cas, headers=headers, data=data), session
                `}
            />
        </>
    );
}
