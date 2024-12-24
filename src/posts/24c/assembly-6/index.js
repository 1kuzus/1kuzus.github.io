import X from 'src/component/X';

export default function Post() {
    return (
        <>
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
            <X.H1>中断、中断处理程序</X.H1>
            <X.P>在8086 CPU中，中断可以打断当前程序的执行，当CPU收到中断请求时，会执行中断处理程序，处理完后再返回到原程序继续执行。中断处理程序的入口地址存放在*中断向量表*中，根据中断类型码查表得到对应处理程序的入口地址。</X.P>
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
            <X.H2>8086 CPU中断过程</X.H2>
            <X.P>中断过程由CPU的硬件自动完成，用中断类型码找到中断向量，并用它设置CS和IP。具体地说8086 CPU的中断过程为：</X.P>
            <X.Oli>从中断信息中取得中断类型码</X.Oli>
            <X.Oli>标志寄存器入栈（中断过程会改变标志，需要先进行保护）</X.Oli>
            <X.Oli>设置`IF=0`，`TF=0`</X.Oli>
            <X.Oli>`CS`入栈，`IP`入栈</X.Oli>
            <X.Oli>从中断向量表读取中断处理程序的入口地址，设置`CS`和`IP`</X.Oli>
            <X.Oli>开始执行中断处理程序</X.Oli>
            <X.H2>单步中断</X.H2>
            <X.P>标志寄存器中有两个标志位与中断有关：`TF(Trap Flag)`和`IF(Interrupt Flag)`。`TF`用于单步执行，`IF`用于可屏蔽中断的开关。</X.P>
            <X.P>`TF`陷阱标志用于调试，当`TF=1`时，CPU在执行完一条指令后，会产生一个`1`号中断，由系统控制计算机。</X.P>
            <X.P>`IF`中断标志用于控制CPU是否响应可屏蔽中断。当`IF=1`时，CPU响应可屏蔽中断；当`IF=0`时，CPU不响应可屏蔽中断。这个标志位可以用`sti`指令和`cli`指令来设置：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                sti  ;设置IF=1，CPU响应可屏蔽中断
                cli  ;设置IF=0，CPU不响应可屏蔽中断
                `}
            />
            <X.HighlightBlock background="red">
                <X.H3>讨论</X.H3>
                <X.Uli>
                    <X.P>8086 CPU中断过程第`3`步中，为什么要设置`TF=0`？</X.P>
                    <X.P>中断处理程序也是一条条的指令。如果在执行中断处理程序前`TF=1`，则执行完程序的第一条指令后，又会产生单步中断，然后转去执行单步中断的中断处理程序。此时由于`TF=1`，则执行完第一条指令后，又会产生单步中断……</X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>8086 CPU中断过程第`3`步中，为什么要设置`IF=0`？</X.P>
                    <X.P>进入中断处理程序后，禁止其他的可屏蔽中断，避免中断嵌套。</X.P>
                </X.Uli>
            </X.HighlightBlock>
            <X.H2>int指令与iret指令</X.H2>
            <X.P>在执行`int n`时，逻辑上相当于自动依次执行了：`pushf`、`push cs`、`push ip`；它和`call`指令保存`CS`和`IP`的行为很像，但还保存并修改了标志寄存器的值。</X.P>
            <X.P>对应地，从一个中断处理程序返回到原程序时，需要使用`iret`指令，逻辑上相当于自动依次执行了：`pop ip`、`pop cs`、`popf`。</X.P>
            <X.H2>int指令示例</X.H2>
            <X.P>在这里我们编写设计一个`int 7ch`中断，功能是将以`0`结尾的纯字母字符串转为大写，参数是`DS:SI`指向字符串首地址。</X.P>
            <X.P>先看不使用中断，只用最一般的子程序调用的实现：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                           db 'misunderstanding',0
                datasg ends

                stcksg segment
                           db 16 dup(0)
                stcksg ends

                codesg segment
                    start:
                           mov  ax,datasg
                           mov  ds,ax
                           mov  si,0                       ;设置DS:SI为字符串首地址
                           call i7ch

                           mov  ax,4c00h
                           int  21h

                    i7ch:
                           push cx
                           push si
                           mov  ch,0
                    w:     mov  cx,[si]
                           jcxz return
                           and  byte ptr [si],11011111b
                           inc  si
                           jmp  w
                    return:pop  si
                           pop  cx
                           ret
                codesg ends
                end start
                `}
            />
            <X.Image src="fig11.jpg" width="100%" />
            <X.P>现在希望编写一个`i7ch`中断处理程序，由`int 7ch`触发中断；此时需要一个确定、但又不影响系统的内存位置存放程序；一个技巧是使用中断向量表的内存区域，因为别的程序不会用到，而系统要处理的中断事件也远没有`256`个，因此可以利用中断向量表后段地址空间，这里选取从`00200h`开始的地址空间作为存放`i7ch`程序的目的地址。</X.P>
            <X.CodeBlock
                language="asm8086"
                highlightLines="13-20,25,30-47,60"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                              db 'misunderstanding',0
                datasg ends

                stcksg segment
                              db 16 dup(0)
                stcksg ends

                codesg segment
                       start:
                       ;安装中断处理程序
                                mov  ax,0
                                mov  es,ax
                                mov  di,200h                                ;设置安装位置，安装到ES:DI处
                                call install
                       ;设置中断向量表
                                mov  word ptr es:[7ch*4],200h               ;设置7ch号中断的IP=200h
                                mov  word ptr es:[7ch*4+2],0                ;设置7ch号中断的CS=0
                       ;调用中断实现功能
                                mov  ax,datasg
                                mov  ds,ax
                                mov  si,0                                   ;设置DS:SI为字符串首地址
                                int  7ch

                                mov  ax,4c00h
                                int  21h

                       ;中断安装程序
                       ;使用movsb指令安装，该指令从DS:SI复制到ES:DI，ES:DI在前面已经设置好
                       install:
                                push ax
                                push cx
                                push si
                                push ds
                                cld                                         ;设置方向标志
                                mov  ax,cs
                                mov  ds,ax                                  ;设置DS为代码段起始地址
                                mov  si,offset i7ch                         ;设置SI为offset i7ch（从子程序开始处复制）
                                mov  cx,offset end_i7ch - offset i7ch       ;使用地址标号相减得到指令长度，也是循环次数
                                rep  movsb
                                pop  ds
                                pop  si
                                pop  cx
                                pop  ax
                                ret

                       i7ch:
                                push cx
                                push si
                                mov  ch,0
                       w:       mov  cx,[si]
                                jcxz return
                                and  byte ptr [si],11011111b
                                inc  si
                                jmp  w
                       return:  pop  si
                                pop  cx
                                iret
                       end_i7ch:
                                nop
                codesg ends
                end start
                `}
            />
            <X.P>所谓的“安装程序”就是将`i7ch`中断处理程序的代码复制到内存中（通过`movsb`指令复制机器码），然后还需要修改中断向量表，将`7ch`号中断的入口地址设置为复制到的内存地址。这样触发`7ch`中断时就能够找到自定义的中断处理程序了。</X.P>
            <X.P>执行的效果是相同的：数据段中的字符串会被改写为大写，但要注意此时中断处理程序已经写入了内存，在其他程序中可以直接调用`int 7ch`实现同样的功能！例如编写一个`test`程序：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg

                datasg segment
                              db 'internationalism',0
                datasg ends

                codesg segment
                       start:
                              mov ax,datasg
                              mov ds,ax
                              mov si,0
                              int 7ch

                              mov ax,4c00h
                              int 21h
                codesg ends
                end start
                `}
            />
            <X.P>假设前面的程序编译后得到`i7ch.EXE`，现在做一个实验，依次执行：</X.P>
            <X.Image src="fig12.jpg" width="100%" />
            <X.P>可以看到`test`程序中并没有`7ch`中断相关的逻辑，但先执行过`i7ch.EXE`之后，是可以调用相关逻辑完成转换大写功能的，说明成功在内存中存入程序、并改写入口地址了。</X.P>
            <X.H1>BIOS中断和DOS中断</X.H1>
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
            <X.P>BIOS和DOS在所提供的中断处理程序中包含了许多子程序，这些子程序实现了编程时常用到的功能。\n这些功能大多是调用外设的功能，而外设的硬件细节太多，常调用ROM中的BIOS中断来完成操作；\n对于DOS中断来说，和硬件设备相关的DOS中断处理程序中，一般都是在操作系统级调用BIOS的中断处理程序来实现的，提供更加高层的一些功能。\n当然如果这些都不能满足需求，用户也可以在程序里直接和外设进行联系（端口操作）。</X.P>
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
            <X.HighlightBlock>
                <X.P>在`in`指令和`out`指令中，只能使用`AL`（访问`8`位端口）或`AX`（访问`16`位端口）来存放读取或要写入的数据。</X.P>
            </X.HighlightBlock>
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
            <X.H1>键盘相关操作</X.H1>
            <X.H2>键盘输入的处理过程</X.H2>
            <X.Oli reset>
                <X.P>键盘输入</X.P>
                <X.P>键盘上每一个键相当于一个开关，键盘中有一个芯片对每一个键的开关状态进行扫描：按下/松开一个键时，芯片都会产生一个扫描码，扫描码被送入主板上相关接口芯片的寄存器中，该寄存器的端口地址为`60h`。扫描码与ASCII码不同，下图是通码：</X.P>
                <X.Image src="fig10.jpg" width="800px" filterDarkTheme />
                <X.P>按下一个键产生通码，松开一个键产生断码；通码的最高位为`0`，断码的最高位为`1`；通码和断码的低`7`位是相同的。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>引发`int 9`中断</X.P>
                <X.P>键盘的输入到达`60h`端口时，相关的芯片就会向CPU发出中断类型码为`9`的可屏蔽中断信息。CPU检测到该中断信息后，如果`IF=1`，则响应中断，转去执行`int 9`中断处理程序。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>执行`int 9`中断处理程序</X.P>
                <X.HighlightBlock>
                    <X.H3>BIOS键盘缓冲区</X.H3>
                    <X.P>BIOS键盘缓冲区是系统启动后，BIOS用于存放`int 9`中断处理程序所接收的键盘输入的内存区。BIOS键盘缓冲区可以存储最多`15`个键盘输入，每个键盘输入用一个字存放，高位字节存放扫描码，低位字节存放ASCII码。</X.P>
                    <X.P>如果输入了控制键和切换键，内存中有一个特殊的字节：键盘状态字节，地址是`00417h`，用于存放控制键和切换键的状态信息。字节内容为：</X.P>
                    <X.Table
                        fromText={`
                        位|'7'|'6'|'5'|'4'|'3'|'2'|'1'|'0'
                        含义|'Insert'|'Caps Lock'|'Num Lock'|'Scroll Lock'|'Alt'|'Ctrl'|左'Shift'|右'Shift'
                        `}
                        tableStyle={{
                            thead: 'column',
                        }}
                    />
                </X.HighlightBlock>
                <X.P>程序读出`60h`端口中的扫描码，如果是字符键的扫描码，将该扫描码和它所对应的ASCII码送入内存中的BIOS键盘缓冲区；如果是控制键和切换键的扫描码，则更新键盘状态字节。</X.P>
            </X.Oli>
            <X.H2>更多中断操作</X.H2>
            <X.Image src="fig13.jpg" width="800px" filterDarkTheme />
            <X.P>硬件中断、BIOS中断、DOS中断是由底层至上层针对键盘操作提供的不同功能。</X.P>
            <X.P>以BIOS`int 16h`中断为例，第`0`号功能的过程是：</X.P>
            <X.Oli reset>检查键盘缓冲区是否有数据</X.Oli>
            <X.Oli>如果没有，重复第`1`步</X.Oli>
            <X.Oli>读取缓冲区第一个字单元的键盘输入</X.Oli>
            <X.Oli>将读取的扫描码送入`AH`，ASCII码送入`AL`</X.Oli>
            <X.Oli>将已读取的键盘输入从缓冲区中删除</X.Oli>
            <X.P>`int 16h`中断和`int 9`中断是一对相互配合的程序，`int 9`中断处理程序向键盘缓冲区中写入，`int 16h`中断处理程序从缓冲区中读出。它们写入和读出的时机不同，`int 9`中断处理程序在有键按下的时候向键盘缓冲区中写入数据；而`int 16h`中断处理程序是在应用程序对其进行调用的时候，将数据从键盘缓冲区中读出。</X.P>
            <X.H1>练习</X.H1>
            <X.H2>编写除法错误的中断处理程序</X.H2>
            <X.HighlightBlock background="blue">
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
            <X.P>选取从`00200h`开始的地址空间作为存放`div0`程序的目的地址。同时，我们希望中断处理程序能够永久驻留内存，因此为了保证正常工作，提示字符串的值也需要随程序一起复制到内存中，我们把这部分数据保存到`00200h`之前的`32`个字节（从`001e0`开始）。</X.P>
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
                    ;安装中断处理程序
                             mov  ax,0
                             mov  es,ax
                             mov  di,200h-32                          ;设置安装位置，安装到ES:DI处，留出了32字节的数据空间用于存储提示字符串
                             call install
                    ;设置中断向量表
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
                             jcxz return                              ;遇到0就停止
                             mov  es:[di],cl
                             mov  byte ptr es:[di+1],40h              ;红底黑字
                             inc  si
                             add  di,2
                             jmp  w
                    return:  pop  es
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
            <X.P>依次执行，在`div0.EXE`执行完成返回后，执行`bad.EXE`能够触发自定义的中断处理程序并在屏幕上输出提示内容。</X.P>
            <X.Image src="fig2.jpg" width="100%" />
            <X.H2>自定义键盘输入处理</X.H2>
            <X.HighlightBlock background="blue">
                <X.P>下面的程序可以在屏幕的中心以红底黑字依次显示字符`A`~`Z`，然后结束程序。子程序`delay`的作用是控制相邻两个字符显示的时间间隔。</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    assume cs:codesg,ds:datasg,ss:stcksg

                    datasg segment
                               db 32 dup(0)
                    datasg ends

                    stcksg segment
                               db 16 dup(0)
                    stcksg ends

                    codesg segment
                        start:
                        ;一段循环在屏幕中间显示A~Z的程序
                               mov  ax,0b800h
                               mov  es,ax
                               mov  al,'A'
                               mov   byte ptr es:[80*2*12+40*2+1],40h   ;第12行、第40列，红底黑字
                        s:     mov  es:[80*2*12+40*2],al                ;显示字符
                               call delay
                               inc  al
                               cmp  al,'Z'
                               jng  s

                               mov  ax,4c00h
                               int  21h

                        ;执行双重空循环，延时
                        delay:
                               push cx
                               mov  cx,10h
                        s1:    push cx
                               mov  cx,0ffffh
                        s2:    loop s2
                               pop  cx
                               loop s1
                               pop  cx
                               ret
                    codesg ends
                    end start
                    `}
                />
                <X.P>现在希望加入一个功能，在程序执行的任何时刻，按下`Alt`键可以切换字符的显示背景。（在红/绿色之间切换即可，只需要每次对显示属性字节异或`01100000b`）</X.P>
            </X.HighlightBlock>
            <X.P>与上一题不同的是，首先本题不需要安装中断处理程序，只需要程序运行时能够定制化键盘中断的功能；另外由于键盘输入的中断处理程序涉及到所有键的输入，因此不能像上题一样完全重写一个处理程序，而是大致的思路应该为在原有`9`号中断处理程序的基础上，“插入”一个条件判断，如果是`Alt`键则执行想要的功能。</X.P>
            <X.P>综上，本题采用的思路为，先把原来的中断向量保存到内存中，然后修改原来的中断向量指向自定义的中断处理程序`i9`；在返回前还要恢复原来的中断向量。而在子程序`i9`中，还要想办法调用原来的中断处理程序，正常响应键盘输入。一个大致的框架为：</X.P>
            <X.CodeBlock
                language="asm8086"
                highlightLines="13-24,29-35,40-41"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                           db 32 dup(0)
                datasg ends

                stcksg segment
                           db 16 dup(0)
                stcksg ends

                codesg segment
                    start:
                    ;保存原来的中断向量到DS:0处
                           mov   ax,datasg
                           mov   ds,ax
                           mov   ax,0
                           mov   es,ax
                           push  es:[9*4]
                           pop   ds:[0]
                           push  es:[9*4+2]
                           pop   ds:[2]
                    ;更改原来的中断向量
                           mov   word ptr es:[9*4],offset i9               ;设置9号中断的IP为offset i9
                           mov   es:[9*4+2],cs                             ;设置9号中断的CS为代码段起始地址

                    ;一段循环在屏幕中间显示A~Z的程序
                           ;...

                    ;恢复原来的中断向量
                           mov   ax,0
                           mov   es,ax
                           push  ds:[0]
                           pop   es:[9*4]
                           push  ds:[2]
                           pop   es:[9*4+2]

                           mov   ax,4c00h
                           int   21h

                    i9:
                           ;...
                codesg ends
                end start
                `}
            />
            <X.P>前面提到8086 CPU的中断过程为：</X.P>
            <X.HighlightBlock background="gray">
                <X.Oli reset>从中断信息中取得中断类型码</X.Oli>
                <X.Oli>标志寄存器入栈（中断过程会改变标志，需要先进行保护）</X.Oli>
                <X.Oli>设置`IF=0`，`TF=0`</X.Oli>
                <X.Oli>`CS`入栈，`IP`入栈</X.Oli>
                <X.Oli>从中断向量表读取中断处理程序的入口地址，设置`CS`和`IP`</X.Oli>
                <X.Oli>开始执行中断处理程序</X.Oli>
            </X.HighlightBlock>
            <X.P>我们现在要在`i9`子程序中调用原来的`int 9`中断处理程序。请注意，程序之所以跳转到`i9`，是因为程序已经修改了中断向量表，然后由键盘输入产生`int 9`中断，中断过程的第`1`~`5`步已经执行完成，在第`5`步进入到`i9`子程序中；</X.P>
            <X.P>而我们还想在`i9`子程序中手动调用被保存在`dword ptr ds:[0]`中的原来的`int 9`中断处理程序，此时没有人为我们自动执行中断过程了，需要手动模拟！因此这部分过程为：</X.P>
            <X.Oli reset>
                <X.P>模拟标志寄存器入栈</X.P>
                <X.CodeBlock language="asm8086" code="pushf" />
            </X.Oli>
            <X.Oli>
                <X.P>模拟设置`IF=0`，`TF=0`</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    pushf
                    pop   bx                ;标志寄存器的值临时赋值给BX
                    and   bh,11111100b      ;IF=0，TF=0
                    push  bx
                    popf                    ;将更新后的值赋值给标志寄存器
                    `}
                />
            </X.Oli>
            <X.Oli>
                <X.P>`CS`入栈、`IP`入栈、跳转到入口地址由`call`指令完成：</X.P>
                <X.CodeBlock language="asm8086" code="call  dword ptr ds:[0]" />
            </X.Oli>
            <X.P>在原中断处理程序调用完成后，就是自定义的部分：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                ;自定义的键盘输入处理
                in    al,60h                                    ;读取键盘输入送入AL
                cmp   al,38h                                    ;判断是否为Alt键
                jne   return                                    ;不是则返回
                mov   ax,0b800h
                mov   es,ax
                xor   byte ptr es:[80*2*12+40*2+1],01100000b    ;在红色和绿色背景之间切换
                `}
            />
            <X.P>注意因为这是中断调用，要使用`iret`指令返回。`i9`子程序的完整代码为：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                i9:
                       push  ax
                       push  bx
                       push  es
                ;------------------------------------------------------
                ;模拟标志寄存器入栈
                       pushf
                ;模拟设置IF=0，TF=0
                       pushf
                       pop   bx
                       and   bh,11111100b
                       push  bx
                       popf
                ;call指令即可实现CS、IP入栈并跳转到入口地址
                       call  dword ptr ds:[0]
                ;------------------------------------------------------
                ;自定义的键盘输入处理
                       in    al,60h                                    ;读取键盘输入送入AL
                       cmp   al,38h                                    ;判断是否为Alt键
                       jne   return                                    ;不是则返回
                       mov   ax,0b800h
                       mov   es,ax
                       xor   byte ptr es:[80*2*12+40*2+1],01100000b    ;在红色和绿色背景之间切换
                return:
                       pop   es
                       pop   bx
                       pop   ax
                       iret
                `}
            />
            <X.Divider />
            <X.P>题目的完整代码为：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                           db 32 dup(0)
                datasg ends

                stcksg segment
                           db 16 dup(0)
                stcksg ends

                codesg segment
                    start:
                    ;保存原来的中断向量到DS:0处
                           mov   ax,datasg
                           mov   ds,ax
                           mov   ax,0
                           mov   es,ax
                           push  es:[9*4]
                           pop   ds:[0]
                           push  es:[9*4+2]
                           pop   ds:[2]
                    ;更改原来的中断向量
                           mov   word ptr es:[9*4],offset i9               ;设置9号中断的IP为offset i9
                           mov   es:[9*4+2],cs                             ;设置9号中断的CS为代码段起始地址
                    ;一段循环在屏幕中间显示A~Z的程序
                           mov   ax,0b800h
                           mov   es,ax
                           mov   al,'A'
                           mov   byte ptr es:[80*2*12+40*2+1],40h          ;第12行、第40列，红底黑字
                    s:     mov   es:[80*2*12+40*2],al                      ;显示字符
                           call  delay
                           inc   al
                           cmp   al,'Z'
                           jng   s
                    ;恢复原来的中断向量
                           mov   ax,0
                           mov   es,ax
                           push  ds:[0]
                           pop   es:[9*4]
                           push  ds:[2]
                           pop   es:[9*4+2]

                           mov   ax,4c00h
                           int   21h

                    ;执行双重空循环，延时
                    delay:
                           push  cx
                           mov   cx,10h
                    s1:    push  cx
                           mov   cx,0ffffh
                    s2:    loop  s2
                           pop   cx
                           loop  s1
                           pop   cx
                           ret

                    i9:
                           push  ax
                           push  bx
                           push  es
                    ;------------------------------------------------------
                    ;模拟标志寄存器入栈
                           pushf
                    ;模拟设置IF=0，TF=0
                           pushf
                           pop   bx
                           and   bh,11111100b
                           push  bx
                           popf
                    ;call指令即可实现CS、IP入栈并跳转到入口地址
                           call  dword ptr ds:[0]
                    ;------------------------------------------------------
                    ;自定义的键盘输入处理
                           in    al,60h                                    ;读取键盘输入送入AL
                           cmp   al,38h                                    ;判断是否为Alt键
                           jne   return                                    ;不是则返回
                           mov   ax,0b800h
                           mov   es,ax
                           xor   byte ptr es:[80*2*12+40*2+1],01100000b    ;在红色和绿色背景之间切换

                    return:
                           pop   es
                           pop   bx
                           pop   ax
                           iret
                codesg ends
                end start
                `}
            />
            <X.P>执行效果（按下`Alt`键切换背景颜色）：</X.P>
            <X.Image src="fig14.gif" width="200px" />
        </>
    );
}
