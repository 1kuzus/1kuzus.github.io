import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/pwn-lab-202407/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>记录</X.H1>
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
            <X.P noMarginBottom>Windows：`PE(Portable Executable)`</X.P>
            <X.Uli>可执行程序：`.exe`</X.Uli>
            <X.Uli>动态链接库：`.dll`</X.Uli>
            <X.Uli>静态链接库：`.lib`</X.Uli>
            <X.P withMarginTop noMarginBottom>
                Linux：`ELF(Executable and Linkable Format)`
            </X.P>
            <X.Uli>可执行程序：`.out`</X.Uli>
            <X.Uli>动态链接库：`.so`</X.Uli>
            <X.Uli>静态链接库：`.a`</X.Uli>
        </>
    );
}
