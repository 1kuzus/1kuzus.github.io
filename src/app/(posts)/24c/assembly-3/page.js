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
                    start: mov ax,datasg
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
        </>
    );
}
