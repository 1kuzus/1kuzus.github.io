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
            <X.P>屏幕上的内容其实就是显存中的数据。显存是一块内存区域，在8086 CPU中，显存占用地址`A0000`~`BFFFF`共`128KB`的地址空间，而显示字符时常用到其中的一小块区域：`B8000`~`BFFFF`共`32KB`的地址空间，它是`25`行、`80`列彩色字符模式第`0`页的显示缓冲区。</X.P>
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
        </>
    );
}
