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
