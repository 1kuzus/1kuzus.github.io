import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/assembly-2/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>本章将开始介绍汇编语言编程。与上一章@【汇编语言】访问寄存器和内存[/24c/assembly-1/]@不同的是，上一章的汇编代码是直接在DOSBox终端中，通过`debug`交互输入的，数据默认为`16`进制数；而本章将使用文本编辑器编写汇编代码，然后通过汇编器生成可执行文件，数据默认为`10`进制数，在编程时需要结尾以`h`标明，请注意区分！</X.P>
            </X.HighlightBlock>
            <X.H1>基本结构示例</X.H1>
            <X.CodeBlock
                language="asm8086"
                highlightLines="1-2,11-12"
                code={`
                assume cs:codesg
                codesg segment
                    mov ax,0123h
                    mov bx,0456h
                    add ax,bx
                    add ax,ax
                
                    ;程序返s:回的套路
                    mov ax,4c00h
                    int 21h
                codesg ends
                end
                `}
            />
            <X.H2>伪指令</X.H2>
            <X.P>上面的示例代码高亮部分为*伪指令*，剩下的主体部分为汇编指令。伪指令没有对应的机器指令，最终不被CPU执行，而是由汇编器处理的指令。上面的示例代码出现了三种伪指令：</X.P>
            <X.H3>段定义</X.H3>
            <X.P>一个汇编程序是由多个段组成的，这些段被用来存放代码、数据或当作栈空间来使用。一个有意义的汇编程序至少要有一个用来存放代码的段。每个段都需要有段名，段定义的格式如下：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                segname segment
                    ;...
                segname ends
                `}
            />
            <X.H3>end</X.H3>
            <X.P>汇编程序的结束标记。</X.P>
            <X.H3>assume</X.H3>
            <X.P>`assume`伪指令用来指定段寄存器和段名之间的关系。在这个例子中，`assume cs:codesg`表示`CS`寄存器与`codesg`段相关联，将定义的`codesg`当作程序的代码段使用。</X.P>
            <X.H1>运行一个汇编程序</X.H1>
            <X.P>写好一个汇编程序（文本文件）`1.asm`后，在终端执行：</X.P>
            <X.CodeBlock language="text" code="masm 1.asm;" />
            <X.P>其中的分号表示使用默认文件名，此操作会得到`1.obj`文件；然后执行：</X.P>
            <X.CodeBlock language="text" code="link 1.obj;" />
            <X.P>分号含义同上，此操作会得到`1.exe`，如果想在终端直接运行，输入`1.exe`即可：</X.P>
            <X.CodeBlock language="text" code="1.exe" />
            <X.P>如果想借助`debug`跟踪程序的执行，则输入命令：</X.P>
            <X.CodeBlock language="text" code="debug 1.exe" />
            <X.H1>一些符号约定</X.H1>
            <X.H2>[...]和(...)</X.H2>
            <X.P>`[...]`是汇编语法，表示一个内存单元，段地址在`DS`中，偏移地址由`...`给出；\n`(...)`是为了学习方便做出的约定，表示一个内存单元或寄存器中的内容。</X.P>
            <X.P noMarginBottom>例如，`pop ax`的功能可以描述为：</X.P>
            <X.Uli>`(ax)=((ss)*16+(sp))`</X.Uli>
            <X.Uli>`(sp)=(sp)+2`</X.Uli>
            <X.H2>idata</X.H2>
            <X.P>用符号`idata`表示常量。（也就是立即数，`immediate data`）</X.P>
            <X.H1>Loop</X.H1>
        </>
    );
}
