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
            <X.H2>在当前路径打开访达</X.H2>
            <X.CodeBlock language="bash" code="open ." />
            <X.H2>允许从任意来源安装</X.H2>
            <X.CodeBlock language="bash" code="sudo spctl --master-disable" />
            <X.H2>查看安装的pkg包</X.H2>
            <X.CodeBlock language="bash" code="pkgutil --pkgs" />
            <X.P>查看包的详细信息：</X.P>
            <X.CodeBlock language="bash" code="pkgutil --info <com.xxx.pkg-name>" />
            <X.H2>查看软件安装列表</X.H2>
            <X.P>`系统信息`-`软件`-`安装`列表可能存在重复项（例如多次安装），编辑/查看方法为（这里以查看为例）：</X.P>
            <X.CodeBlock language="bash" code="cat /Library/Receipts/InstallHistory.plist" />
            <X.H2>重建Spotlight索引</X.H2>
            <X.CodeBlock language="bash" code="sudo mdutil -E /" />
        </>
    );
}
