import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/assembly-6/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>描述内存单元的标号</X.H1>
            <X.P>汇编语言中同样可以用标号表示内存单元，称为数据标号，使用起来的感觉很像C语言的数组。下面的程序计算`arr`中元素的和，并存放在数据标号`x`对应的字空间中：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg

                datasg segment
                    arr    db 1,2,3,4,5,6,7,8
                    x      dw 0
                datasg ends

                codesg segment
                    start:
                           mov  ax,datasg
                           mov  ds,ax

                           mov  si,0
                           mov  cx,8
                    s:     mov  ah,0
                           mov  al,arr[si]    ;使用数据标号
                           add  x,ax          ;使用数据标号
                           inc  si
                           loop s

                           mov  ax,4c00h
                           int  21h
                codesg ends
                end start
                `}
            />
            <X.P>和前面学习的地址标号相比，地址标号仅仅表示一个地址，而数据标号表示地址的同时还暗含了数据的类型，操作时不再需要用`byte ptr`等显式地指定数据的类型。</X.P>
            <X.H1>操作显存</X.H1>
            <X.P>屏幕上的内容其实就是显存中的数据。显存是一块内存区域，在8086 CPU中，显存占用地址`a0000h`~`bffffh`共`128KB`的地址空间，而显示字符时常用到其中的一小块区域：`b8000h`~`bffffh`共`32KB`的地址空间，它是`25`行、`80`列彩色字符模式第`0`页的显示缓冲区。</X.P>
            <X.P>这`32KB`的地址空间被划分为`8`个页，每个页`4KB`；`25`行、`80`列一共`2000`个字符，每个字符用`2`个字节描述，刚好是一页的大小。这两个字节分别是：要显示符号的ASCII码、显示属性。</X.P>
            <X.P>显示属性一个字节共`8`位，从高到低依次是：</X.P>
            <X.Table
                fromText={`
                位|'7'|'6'|'5'|'4'|'3'|'2'|'1'|'0'
                含义|闪烁|背景'R'|背景'G'|背景'B'|高亮|前景'R'|前景'G'|前景'B'
                `}
                tableStyle={{
                    thead: 'column',
                }}
            />
            <X.P>直接修改内存对应地址的值，屏幕上就会立即有变化：</X.P>
            <X.Image src="fig1.jpg" width="100%" />
            <X.H1>中断处理程序</X.H1>
            <X.P>在8086 CPU中，中断是一种异步事件，可以随时打断当前程序的执行。当CPU收到中断请求时，会执行中断处理程序，处理完后再返回到原程序继续执行。中断处理程序的入口地址存放在*中断向量表*中，根据中断类型码查表得到对应处理程序的入口地址。</X.P>
            <X.P>8086 CPU的中断向量表是一个`1KB`的表，包含了`256`个中断类型码对应的中断处理程序的入口地址，每个入口地址占`4`个字节，前两字节存放`IP`的值，后两字节存放`CS`的值。中断向量表的起始地址是`00000h`，终止地址是`003ffh`。</X.P>
            <X.CodeBlock
                language="text"
                code={`
                00000h: 0号中断处理程序的入口地址IP
                00002h: 0号中断处理程序的入口地址CS
                00004h: 1号中断处理程序的入口地址IP
                00006h: 1号中断处理程序的入口地址CS
                00008h: 2号中断处理程序的入口地址IP
                0000ah: 2号中断处理程序的入口地址CS
                ...
                003fch: 255号中断处理程序的入口地址IP
                003feh: 255号中断处理程序的入口地址CS
                `}
            />
            <X.P>中断可以分为：</X.P>
            <X.Uli>内部中断：由CPU内部产生，如除法错误（`0`号）、溢出（`4`号）、`int n`指令触发（`n`号）等。</X.Uli>
            <X.Uli>外部中断：由外部设备产生，如键盘输入等。</X.Uli>
            <X.Image src="fig9.jpg" width="800px" filterDarkTheme />
            <X.P>其中外部中断又分为可屏蔽中断和不可屏蔽中断：</X.P>
            <X.Uli>可屏蔽中断：CPU可以不响应的外中断，一般是由外部硬件通过INTR`(Interrupt Request)`信号线发送给CPU；CPU是否响应取决于`IF`标志位，如果`IF=0`，CPU不响应可屏蔽中断。</X.Uli>
            <X.Uli>不可屏蔽中断：CPU必须响应的外中断，通过NMI`(Non-Maskable Interrupt)`信号线发送。8086 CPU不可屏蔽中断的中断类型码固定为`2`。</X.Uli>
            <X.P>几乎所有外部设备引发的中断都是可屏蔽中断，如键盘输入、打印机请求等；而不可屏蔽中断是在系统有必须处理的紧急情况发生时用来通知CPU的中断信息。</X.P>
            <X.H2>BIOS中断调用示例</X.H2>
            <X.P>BIOS中断是由BIOS提供的一些服务程序，可以通过`int`指令调用。前面提到可以直接操作显存来控制屏幕显示的内容，而定位到具体的地址需要细节的计算；而BIOS的`10h`号中断提供了一系列关于字符显示的功能，包括设置光标位置、在指定位置显示字符等。BIOS中断相当于封装了底层的细节，提供了更方便的调用方式。</X.P>
            <X.P>找到这些中断的中断号和功能描述，需要*查手册*！例如：</X.P>
            <X.Image src="fig3.jpg" width="800px" filterDarkTheme />
            <X.Image src="fig4.jpg" width="800px" filterDarkTheme />
            <X.Image src="fig5.jpg" width="800px" filterDarkTheme />
            <X.P>这个手册指明显示服务的中断号是`10h`，我们如果想使用设置光标位置功能，需要设置四个输入参数：功能号`AH`，页号`BH`，行号`DH`，列号`DL`；显示字符功能同理。因此就可以编写出如下程序：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg
                codesg segment
                    start:
                           mov ah,2            ;设置光标位置功能号
                           mov bh,0            ;页号为0
                           mov dh,5            ;第5行
                           mov dl,12           ;第12列
                           int 10h             ;调用BIOS中断

                           mov ah,9            ;显示字符功能号
                           mov al,'a'          ;要显示的字符为'a'
                           mov bl,01001010b    ;颜色属性
                           mov bh,0            ;页号为0
                           mov cx,3            ;重复3次，即显示3个'a'
                           int 10h             ;调用BIOS中断

                           mov ax,4c00h
                           int 21h
                codesg ends
                end start
                `}
            />
            <X.Image src="fig6.jpg" width="100%" />
            <X.H2>DOS中断</X.H2>
            <X.P>DOS中断是由操作系统提供的、更为高层的中断，同样提供了丰富的功能，使用时查手册即可。下图列出了一些DOS中断，并以`21h`为例做展开。</X.P>
            <X.Image src="fig7.jpg" width="100%" filterDarkTheme />
            <X.H2>二者的联系</X.H2>
            <X.P>BIOS和DOS在所提供的中断程序中包含了许多子程序，这些子程序实现了编程时常用到的功能。\n这些功能大多是调用外设的功能，而外设的硬件细节太多，常调用ROM中的BIOS中断来完成操作；\n对于DOS中断来说，和硬件设备相关的DOS中断程序中，一般都是在操作系统级调用BIOS的中断程序来实现的，提供更加高层的一些功能。\n当然如果这些都不能满足需求，用户也可以在程序里直接和外设进行联系（端口操作）。</X.P>
            <X.Image src="fig8.jpg" width="600px" filterDarkTheme />
            <X.H1>端口的读写</X.H1>
            <X.P>CPU可以直接读写三个地方的数据：CPU内部的寄存器、内存单元、端口；而端口对应网卡、显卡等等外部芯片。这些外部芯片工作时，都有一些寄存器由CPU读写；而从CPU的角度，就把这些寄存器当作端口并统一编址。</X.P>
            <X.P>端口的编址是`16`位的，范围是`0`~`65535`，这部分地址是独立于内存地址的。硬件设备与特定端口之间的映射是由硬件设计者决定的；为了确保不同厂商的设备能够正常工作，会有标准化组织制定统一的行业标准。</X.P>
            <X.P>读写端口要使用`in`指令和`out`指令：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                in  al,20h  ;从20h号端口读取一个字节到AL
                out 21h,al  ;将AL的内容写入21h号端口
                `}
            />
            <X.P>对于`0`~`255`号端口，端口号可以直接用立即数给出；对于`256`~`65535`号端口，端口号放在`DX`中：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                mov  dx,3f8h
                in   al,dx  ;从3f8h号端口读取一个字节到AL
                out  dx,al  ;将AL的内容写入3f8h号端口
                `}
            />
            <X.P>在`in`指令和`out`指令中，只能使用`AL`（访问`8`位端口）或`AX`（访问`16`位端口）来存放读取或要写入的数据。</X.P>
            <X.H2>扬声器发声示例</X.H2>
            <X.P>下面的程序可以让扬声器响一下：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg
                codesg segment
                    start:
                           mov  al,0ffh
                           out  42h,al       ;设置声音频率，第一次写入低8位
                           mov  al,08h
                           out  42h,al       ;设置声音频率，第二次写入高8位

                           in   al,61h       ;读取端口原值
                           mov  ah,al        ;保存原值到AH

                           or   al,3         ;设置最低两位为1：打开扬声器和定时器
                           out  61h,al       ;接通扬声器和定时器

                           mov  cx,0ffffh
                    delay: nop
                           loop delay        ;延迟一段时间

                           mov  al,ah
                           out  61h,al       ;恢复端口原值

                           mov  ax,4c00h
                           int  21h
                codesg ends
                end start
                `}
            />
            <X.H1>练习</X.H1>
            <X.H2>编写除法错误的中断处理程序</X.H2>
            <X.HighlightBlock bgcolor="blue">
                <X.P>编程自定义除法错误中断，除以`0`时在屏幕上提示`Cannot divide by zero!`然后返回操作系统。</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    ;以下代码会触发除法错误中断
                    mov  ax,1
                    mov  bl,0
                    div  bl
                    `}
                />
                <X.P>注：除法错误不仅仅是除以`0`，还包括除数溢出等情况。</X.P>
            </X.HighlightBlock>
            <X.P>希望编写一个`div0`子程序做中断处理，此时需要一个确定、但又不影响系统的内存位置存放程序；一个技巧是使用中断向量表的内存区域，因为别的程序不会用到，而系统要处理的中断事件也远没有`256`个，因此可以利用中断向量表后段地址空间，这里选取从`00200h`开始的地址空间作为存放`div0`程序的目的地址。</X.P>
            <X.P>同时，我们希望这个程序能够永久驻留内存，也就是“一劳永逸”地改变除法错误中断，提示字符串的值也需要随程序一起复制到内存中，我们把这部分数据保存到`00200h`之前的`32`个字节（从`001e0`开始）。</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                           db 'Cannot divide by zero!',32 dup(0)
                datasg ends

                stcksg segment
                           db 16 dup(0)
                stcksg ends

                codesg segment
                    start:
                    ;安装中断程序
                             mov  ax,0
                             mov  es,ax
                             mov  di,200h-32                          ;设定安装位置，安装到ES:DI处，留出了32字节的数据空间用于存储提示字符串
                             call install
                    ;设置中断向量表
                             mov  ax,0
                             mov  es,ax
                             mov  word ptr es:[0],200h                ;设置0号中断的IP=200h，真正的程序从200h开始
                             mov  word ptr es:[2],0                   ;设置0号中断的CS=0

                             mov  ax,4c00h
                             int  21h

                    ;中断安装程序
                    ;使用movsb指令安装，该指令从DS:SI复制到ES:DI，ES:DI在前面已经设置好
                    install:
                             push ax
                             push cx
                             push si
                             push ds
                             cld                                      ;设置方向标志
                    ;前32字节安装字符串常量
                             mov  ax,datasg
                             mov  ds,ax                               ;设置DS为数据段起始地址
                             mov  si,0                                ;设置SI为0
                             mov  cx,32                               ;一共复制32个字节（字符串+填充的0），循环32次
                             rep  movsb
                    ;后面安装程序
                             mov  ax,cs
                             mov  ds,ax                               ;设置DS为代码段起始地址
                             mov  si,offset div0                      ;设置SI为offset div0（从子程序开始处复制）
                             mov  cx,offset end_div0 - offset div0    ;使用地址标号相减得到指令长度，也是循环次数
                             rep  movsb
                             pop  ds
                             pop  si
                             pop  cx
                             pop  ax
                             ret

                    ;中断处理程序
                    div0:
                             push ax
                             push cx
                             push si
                             push di
                             push ds
                             push es
                             mov  ax,0
                             mov  ds,ax
                             mov  si,200h-32                          ;初始化DS:SI=00200h-32，这是安装好的字符串数据的起始地址
                             mov  ax,0b800h
                             mov  es,ax
                             mov  di,80*2*12                          ;初始化ES:DI=b8000h+80*2*12，这目标显存的起始地址（第12行开头）
                             mov  ch,0
                    w:       mov  cl,[si]                             ;字符串循环写入显存
                             jcxz ok                                  ;遇到0就停止
                             mov  es:[di],cl
                             mov  byte ptr es:[di+1],40h              ;红底黑字
                             inc  si
                             add  di,2
                             jmp  w
                    ok:      pop  es
                             pop  ds
                             pop  di
                             pop  si
                             pop  cx
                             pop  ax
                             mov  ax,4c00h
                             int  21h                                 ;直接返回操作系统
                    end_div0:
                             nop
                codesg ends
                end start
                `}
            />
            <X.P>首先调用安装程序，这里通过类似函数传参的思想指定了写入内存的起始位置为`200h-32`也就是`001e0h`（字符串常量从`001e0h`开始，`div0`程序从`00200h`开始）；然后设置`0`号中断的中断向量表。具体细节见程序注释。</X.P>
            <X.P>编译上面的程序，命名为`div0.EXE`；接下来编译一个触发除法错误中断的程序，命名为`bad.EXE`：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg
                codesg segment
                    start: mov ax,1
                           mov bl,0
                           div bl

                           mov ax,4c00h
                           int 21h
                codesg ends
                end start
                `}
            />
            <X.P>依次执行：</X.P>
            <X.Image src="fig2.jpg" width="100%" />
            <X.P>注意这里，在`div0.EXE`执行完成返回后，才执行的`bad.EXE`，此时仍然能够触发自定义的中断处理程序，说明成功的在内存中存入程序、并改写入口地址了。</X.P>
            <X.Oli>还需要！！！！15.16.18.19</X.Oli>
        </>
    );
}
