import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/assembly-4/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>nop指令</X.H1>
            <X.P>`nop`指令的机器码占一个字节，起占位作用。</X.P>
            <X.CodeBlock language="asm8086" code="nop" />
            <X.H1>用offset取得标号的偏移地址</X.H1>
            <X.P>例如下例，由于有共`2`字节的`nop`占位指令，`offset s`相当于`2`。</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg
                codesg segment
                    start:
                           nop
                           nop
                    s:     mov ax, offset s    ;相当于mov ax,2
                codesg ends
                end start
                `}
            />
            <X.H1>jmp指令高级用法</X.H1>
            <X.H2>段内转移</X.H2>
            <X.Uli>短转移：`short`指明此处位移为`8`位位移，范围为`-128`~`127`；</X.Uli>
            <X.CodeBlock language="asm8086" code="jmp short s  ;(ip)=(ip)+8位位移" />
            <X.Uli>近转移：`near ptr`指明此处位移为`16`位位移，范围为`-32768`~`32767`。</X.Uli>
            <X.CodeBlock language="asm8086" code="jmp near ptr s  ;(ip)=(ip)+16位位移" />
            <X.H2>段间转移</X.H2>
            <X.Uli>远转移：</X.Uli>
            <X.CodeBlock language="asm8086" code="jmp far ptr s" />
            <X.P>段内转移指明*转移位移*，而段间转移指明*目的地址*，这一区别要在汇编指令中才能体现出来，考虑如下程序：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg
                codesg segment
                    start:
                           mov ax,3
                           mov bx,2
                           jmp short s1
                           mov cx,1
                    s1:    add ax,1
                           jmp near ptr s2
                           db  176h dup(0)
                    s2:    add bx,1
                           jmp far ptr s3
                           db  234h dup(0)
                    s3:    add cx,1

                           mov ax,4c00h
                           int 21h
                codesg ends
                end start
                `}
            />
            <X.P>看前两个段内转移，注意到机器码包含的数值是偏移值`03h`和`176h`；（这与程序中定义的`0`字节数量是一致的）</X.P>
            <X.Image src="fig1.jpg" width="100%" />
            <X.P>然后看第三个段间转移指令，机器码中包含的数值就是目的地址。</X.P>
            <X.Image src="fig2.jpg" width="100%" />
            <X.H2>转移地址在寄存器中</X.H2>
            <X.CodeBlock language="asm8086" code="jmp bx  ;(ip)=(bx)" />
            <X.H2>转移地址在内存中（段内）</X.H2>
            <X.P>从内存单元地址处开始，存放一个字，是转移的*目的偏移地址*。</X.P>
            <X.CodeBlock language="asm8086" code="jmp word ptr [...]" />
            <X.H2>转移地址在内存中（段间）</X.H2>
            <X.P>从内存单元地址处开始，存放两个字，高地址的字是转移的*目的段地址*，低地址的字是转移的*目的偏移地址*。</X.P>
            <X.CodeBlock language="asm8086" code="jmp dword ptr [...]" />
            <X.H1>jcxz指令</X.H1>
            <X.P>有条件转移指令，格式同样为`jcxz 标号`，功能为：如果`(CX)=0`则转移到标号处执行，功能也是`(IP)=(IP)+8位位移`；否则什么也不做，程序向下执行。</X.P>
            <X.HighlightBlock>
                <X.P>`jcxz`和前面提到的`jmp`段内转移中的`8`位位移和`16`位位移都是编译阶段由编译器计算的，也都是偏移地址，不是目的地址。</X.P>
            </X.HighlightBlock>
            <X.H1>call指令和ret指令</X.H1>
            <X.P>汇编语言中可以通过`call`指令调用一个过程，过程中可以通过`ret`指令返回到调用点，可以利用它们实现模块化编程。它们的实质也是流程转移指令，都是修改`IP`、或同时修改`CS`和`IP`。</X.P>
            <X.H2>段内转移</X.H2>
            <X.CodeBlock
                language="asm8086"
                code={`
                call s

                ;逻辑上相当于：
                ;push ip
                ;jmp near ptr s
                `}
            />
            <X.H2>段间转移</X.H2>
            <X.CodeBlock
                language="asm8086"
                code={`
                call far ptr s

                ;逻辑上相当于：
                ;push cs
                ;push ip
                ;jmp far ptr s
                `}
            />
            <X.H2>转移地址在寄存器中</X.H2>
            <X.CodeBlock
                language="asm8086"
                code={`
                call bx

                ;逻辑上相当于：
                ;push ip
                ;jmp bx
                `}
            />
            <X.H2>转移地址在内存中（段内）</X.H2>
            <X.CodeBlock
                language="asm8086"
                code={`
                call word ptr [...]

                ;逻辑上相当于：
                ;push ip
                ;jmp word ptr [...]
                `}
            />
            <X.H2>转移地址在内存中（段间）</X.H2>
            <X.CodeBlock
                language="asm8086"
                code={`
                call dword ptr [...]

                ;逻辑上相当于：
                ;push cs
                ;push ip
                ;jmp dword ptr [...]
                `}
            />
            <X.H2>ret指令</X.H2>
            <X.CodeBlock
                language="asm8086"
                code={`
                ret

                ;逻辑上相当于：
                ;pop ip
                `}
            />
            <X.P>`ret`指令还可以后接一个数值，例如：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                ret 5

                ;逻辑上相当于：
                ;pop ip
                ;add sp,5
                `}
            />
            <X.H2>retf指令</X.H2>
            <X.P>`f`就是`far`的意思。</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                retf

                ;逻辑上相当于：
                ;pop ip
                ;pop cs
                `}
            />
            <X.HighlightBlock>
                <X.P>注意`call`和`ret`指令都用到了栈，所以使用它们时需要初始化栈空间。</X.P>
            </X.HighlightBlock>
            <X.H1>mul指令</X.H1>
            <X.P>`mul`指令的格式为`mul 寄存器`或`mul [...]`，其中被乘数默认存储在`AX`中，乘法指令分为`8`位乘法和`16`位乘法：</X.P>
            <X.Table
                fromText={`
                |'8'位乘法|'16'位乘法
                被乘数（默认）|'AL'|'AX'
                乘数|'8'位寄存器或内存单元|'16'位寄存器或内存单元
                结果|'AX'|高位'DX'，低位'AX'
                `}
                tableStyle={{
                    thead: 'all',
                }}
            />
            <X.P>例：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                mul bl               ;(ax)=(al)*(bl)
                mul byte ptr ds:[0]  ;(ax)=(al)*((ds)*16+0)

                mul word ptr [bx+si+8]
                ;乘积ANS=(ax)*((ds)*16+(bx)+(si)+8)
                ;(dx)=ANS的高16位
                ;(ax)=ANS的低16位
                `}
            />
            <X.H1>用栈传递参数和保护数据</X.H1>
            <X.P>前面说到的`call`和`ret`指令可以实现类似C语言函数的效果，但并没有参数传递的功能，而参数传递可以使用栈来实现。同时，汇编编程中寄存器是非常宝贵的资源，而编写子程序时原则上不应该知晓调用者的寄存器使用情况，但又需要保护调用者的数据不被覆盖，这时也可以使用栈来保护数据。</X.P>
            <X.P>下面的代码实现计算$(x+y)^3$：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ss:stcksg

                stcksg segment
                           db 16 dup(0)
                stcksg ends

                codesg segment
                    start:
                           mov  ax,2
                           push ax
                           mov  ax,5
                           push ax
                           call cube
                           mov  ax,4c00h
                           int  21h

                    cube:  push bp           ;保存BP
                           mov  bp,sp
                           mov  ax,[bp+4]
                           add  ax,[bp+6]
                           mov  bp,ax        ;再次利用BP，把x+y的结果保存在BP中
                           mul  bp
                           mul  bp
                           pop  bp           ;恢复BP
                           ret  4            ;返回时清除参数
                codesg ends
                end start
                `}
            />
            <X.P>首先分两次把参数`x`和`y`入栈。在`cube`子程序中，取出参数时，栈顶是`BP`的旧值，栈顶下一个元素是`call`指令入栈的`IP`，所以`(bp+4)`是`x`，`(bp+6)`是`y`。</X.P>
            <X.Image src="fig3.jpg" width="100%" />
            <X.P>$7^3=343$也就是`157h`。</X.P>
            <X.H1>练习</X.H1>
            <X.H2>将字符串全部转大写</X.H2>
            <X.HighlightBlock bgcolor="blue">
                <X.P>编程操作数据段中的字符串，把所有字母都改为大写。</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    datasg segment
                               db 'abcdefg',9 dup(0)
                               db 'hello',11 dup(0)
                               db 'conversation',4 dup(0)
                               db 'masm',12 dup(0)
                    datasg ends
                    `}
                />
            </X.HighlightBlock>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                           db 'abcdefg',9 dup(0)
                           db 'hello',11 dup(0)
                           db 'conversation',4 dup(0)
                           db 'masm',12 dup(0)
                datasg ends

                stcksg segment
                           db 16 dup(0)
                stcksg ends

                codesg segment
                    start:
                           mov  ax,datasg
                           mov  ds,ax

                           mov  bx,0
                           mov  cx,4
                    s:     mov  si,bx
                           call func
                           add  bx,10h
                           loop s

                           mov  ax,4c00h
                           int  21h

                    func:
                           push cx
                           push si
                           mov  ch,0
                    w:     mov  cl,[si]                    ;遇到0就停止
                           jcxz return
                           and  byte ptr [si],11011111b
                           inc  si
                           jmp  w
                    return:
                           pop  si
                           pop  cx
                           ret
                codesg ends
                end start
                `}
            />
            <X.P>在字符串长度不定时，仿照C语言以`\0`作为结束符，读到`0`值就利用`jcxz`指令进入返回阶段。</X.P>
            <X.Image src="fig4.jpg" width="100%" />
        </>
    );
}
