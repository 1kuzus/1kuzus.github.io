import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/assembly-3/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>处理字符</X.H1>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg

                datasg segment
                           db '1234'
                           db 'ABCD'
                datasg ends

                codesg segment
                    start:
                           mov ax,datasg
                           mov ds,ax
                           mov ax,0
                           mov al,'a'
                           mov bl,'b'

                           mov ax,4c00h
                           int 21h
                codesg ends
                end start
                `}
            />
            <X.P>常用`db`指令定义字符串。字符类型的数据会被编译器自动转为ASCII码。</X.P>
            <X.Image src="fig1.jpg" width="100%" />
            <X.HighlightBlock>
                <X.P noMarginBottom>ASCII码在设计上满足一些规律：</X.P>
                <X.Uli>在`16`进制下，`3xh`就代表了字符`10`进制数`'x'`，例如`'1'`的ASCII码为`49`也就是`31h`</X.Uli>
                <X.Uli>在`16`进制下，大写字母和小写字母的`ASCII`码相差`20h`，例如`'A'`的`ASCII`码为`41h`，`'a'`的`ASCII`码为`61h`</X.Uli>
            </X.HighlightBlock>
            <X.H1>and指令、or指令</X.H1>
            <X.P>位运算指令，用法与`add`类似。这两个指令可以在不需要分支结构的情况下，实现大小写字符转换：</X.P>
            <X.Uli>转大写：</X.Uli>
            <X.CodeBlock
                language="asm8086"
                code={`
                and al,11011111b
                `}
            />
            <X.Uli>转小写：</X.Uli>
            <X.CodeBlock
                language="asm8086"
                code={`
                or al,00100000b
                `}
            />
            <X.H1>寻址方式</X.H1>
            <X.H2>[bx+idata]方式</X.H2>
            <X.CodeBlock language="asm8086" code="mov ax,[bx+200]  ;(ax)=((ds)*16+(bx)+200)" />
            <X.P>和以下三种写法都是等价的：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                mov ax,[200+bx]
                mov ax,200[bx]
                mov ax,[bx].200
                `}
            />
            <X.H2>SI和DI寄存器</X.H2>
            <X.P>`SI`和`DI`寄存器被称为变址寄存器，常执行与地址有关的操作，是与`BX`功能相近的寄存器。</X.P>
            <X.Uli>`BX`：通用寄存器，常作为基址寄存器使用</X.Uli>
            <X.Uli>`SI`：源变址寄存器`(Source Index)`</X.Uli>
            <X.Uli>`DI`：目的变址寄存器`(Destination Index)`</X.Uli>
            <X.HighlightBlock bgcolor="red">
                <X.P>`SI`和`DI`不能够像`BX`一样分成`BH`和`BL`两个`8`位寄存器使用。</X.P>
            </X.HighlightBlock>
            <X.H2>[bx+si]和[bx+di]方式</X.H2>
            <X.CodeBlock language="asm8086" code="mov ax,[bx+si]  ;(ax)=((ds)*16+(bx)+(si))" />
            <X.P>和以下写法等价：</X.P>
            <X.CodeBlock language="asm8086" code="mov ax,[bx][si]" />
            <X.H2>[bx+si+idata]和[bx+di+idata]方式</X.H2>
            <X.CodeBlock language="asm8086" code="mov ax,[bx+si+200]  ;(ax)=((ds)*16+(bx)+(si)+200)" />
            <X.H2>BP寄存器</X.H2>
            <X.P>`BP`和`BX`类似，也是基址寄存器。它们的区别在于`BX`的默认段寄存器是`DS`，而`BP`的默认段寄存器是`SS`。`BP`多用于栈操作。</X.P>
            <X.P>到现在为止，已经学习了`BX`、`SI`、`DI`、`BP`四个寄存器，它们都是与地址操作有关的寄存器。只有这四个寄存器可以以`[...]`的格式对内存进行寻址。</X.P>
            <X.P>按照基址寄存器和变址寄存器分类，则`BX`和`BP`是基址寄存器，`SI`和`DI`是变址寄存器。在使用时，基址寄存器和变址寄存器可以任意组合，例如`[bx+si]`、`[bx+di]`、`[bp+si]`、`[bp+di]`，但内部不能互相组合，例如`[bx+bp]`、`[si+di]`是*错误的*写法。</X.P>
            <X.H2>总结</X.H2>
            <X.Image src="fig2.png" width="800px" invertInDarkTheme />
            <X.H1>练习</X.H1>
            <X.H2>大小写转换</X.H2>
            <X.HighlightBlock bgcolor="blue">
                <X.P>编程操作数据段中的字符串，将第一个字符串小写字母转换为大写字母，第二个字符串大写字母转换为小写字母。</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    assume cs:codesg,ds:datasg

                    datasg segment
                               db 'BaSiC'
                               db 'AsSeMbLeR'
                    datasg ends

                    codesg segment
                        start:
                        ;...
                    codesg ends
                    end start
                    `}
                />
            </X.HighlightBlock>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg

                datasg segment
                           db 'BaSiC'
                           db 'AsSeMbLeR'
                datasg ends

                codesg segment
                    start:
                           mov  ax,datasg
                           mov  ds,ax

                           mov  bx,0
                           mov  cx,5
                    s1:    mov  al,[bx]
                           and  al,11011111b
                           mov  [bx],al
                           inc  bx
                           loop s1

                           mov  bx,5
                           mov  cx,9
                    s2:    mov  al,[bx]
                           or   al,00100000b
                           mov  [bx],al
                           inc  bx
                           loop s2

                           mov  ax,4c00h
                           int  21h
                codesg ends
                end start
                `}
            />
            <X.Image src="fig3.jpg" width="100%" />
            <X.H2>二重循环将字符串全部转大写</X.H2>
            <X.HighlightBlock bgcolor="blue">
                <X.P>编程操作数据段中的字符串，把所有字母都改为大写。</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    assume cs:codesg,ds:datasg

                    datasg segment
                               db 'Hello           '
                               db 'kitty           '
                               db 'aBcDe           '
                               db 'uCase           '
                    datasg ends

                    codesg segment
                        start:
                        ;...
                    codesg ends
                    end start
                    `}
                />
            </X.HighlightBlock>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                           db 'Hello           '
                           db 'kitty           '
                           db 'aBcDe           '
                           db 'uCase           '
                datasg ends

                stcksg segment
                           dw 0,0,0,0,0,0,0,0
                stcksg ends

                codesg segment
                    start:
                           mov  ax,datasg
                           mov  ds,ax

                           mov  bx,0
                           mov  cx,4            ;遍历4个字符串
                    str:   push cx              ;保存外层循环的CX

                           mov  di,0
                           mov  cx,5            ;遍历5个字符
                    chr:   mov  al,[bx+di]
                           and  al,11011111b
                           mov  [bx+di],al
                           inc  di
                           loop chr

                           add  bx,10h          ;下一个字符串的首字符的地址
                           pop  cx              ;恢复外层循环的CX
                           loop str

                           mov  ax,4c00h
                           int  21h
                codesg ends
                end start
                `}
            />
            <X.P>由于字符串长度相同，考虑使用二重循环批量操作。然而由于只有一个寄存器`CX`控制着循环计数器，所以进入内层循环时需要先保存外层循环的`CX`，内层循环结束后再恢复外层循环的`CX`。保存的方式可以是借助其他寄存器例如`DX`，但由于寄存器资源比较宝贵，常见的做法是利用栈保存数据。</X.P>
            <X.Image src="fig4.jpg" width="100%" />
        </>
    );
}
