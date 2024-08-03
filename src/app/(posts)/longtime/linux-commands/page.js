import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/linux-commands/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>Linux</X.H1>
            <X.H2>删除登录密码</X.H2>
            <X.CodeBlock language="bash" code="sudo passwd -d <username>" />
            <X.H2>显示所有运行进程</X.H2>
            <X.CodeBlock language="bash" code="ps aux" />
            <X.Uli>`a`：显示所有用户的进程</X.Uli>
            <X.Uli>`u`：显示详细信息</X.Uli>
            <X.Uli>`x`：显示没有控制终端的进程</X.Uli>
            <X.H1>Mac OS</X.H1>
            <X.H2>允许从任意来源安装</X.H2>
            <X.CodeBlock language="bash" code="sudo spctl --master-disable" />
            <X.H2>查看安装的pkg包</X.H2>
            <X.CodeBlock language="bash" code="pkgutil --pkgs" />
            <X.P>查看包的详细信息：</X.P>
            <X.CodeBlock language="bash" code="pkgutil --info <com.xxx.pkg-name>" />
        </>
    );
}
