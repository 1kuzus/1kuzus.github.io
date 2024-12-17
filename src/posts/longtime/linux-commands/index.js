import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>Linux</X.H1>
            <X.H2>删除登录密码</X.H2>
            <X.CodeBlock language="bash" code="sudo passwd -d <username>" />
            <X.H2>显示所有运行进程</X.H2>
            <X.CodeBlock language="bash" code="ps aux" />
            <X.Uli>`a`：显示所有用户的进程</X.Uli>
            <X.Uli>`u`：显示详细信息</X.Uli>
            <X.Uli>`x`：显示没有控制终端的进程</X.Uli>
            <X.H2>查找文件、设置查找深度</X.H2>
            <X.P>查找根目录下所有`rc`结尾的文件，只递归两层：</X.P>
            <X.CodeBlock language="bash" code='find / -maxdepth 2 -type f -name "*rc"' />
            <X.H2>查找文件内容</X.H2>
            <X.P>查找当前目录下所有内容包含`export`结尾的文件，不查找二级目录：</X.P>
            <X.CodeBlock language="bash" code='find . -maxdepth 1 -type f | xargs grep --color=always "export"' />
            <X.Uli>`--color=always`：始终高亮`grep`命令的匹配内容</X.Uli>
            <X.H2>查看磁盘空间</X.H2>
            <X.CodeBlock language="bash" code="df -h" />
            <X.H2>查看文件夹大小</X.H2>
            <X.P>查看指定文件夹的大小：</X.P>
            <X.CodeBlock language="bash" code="du -sh <dir>" />
            <X.P>查看当前目录下所有文件夹的大小：</X.P>
            <X.CodeBlock language="bash" code="du -h -d 1" />
            <X.H2>取输出的前、后n行</X.H2>
            <X.P>`head`和`tail`命令可以取文件的首、尾`n`行：</X.P>
            <X.CodeBlock language="bash" code="head -n 3 file.txt" />
            <X.CodeBlock language="bash" code="tail -n 4 file.txt" />
            <X.P>对于命令则使用管道：</X.P>
            <X.CodeBlock language="bash" code="ls | head -n 5" />
            <X.H2>运行top命令，3秒后自动结束</X.H2>
            <X.CodeBlock language="bash" code="timeout 3 top" />
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
            <X.H2>修改截图的输出格式</X.H2>
            <X.P>Mac自带截图功能（`command`+`shift`+`3`/`4`/`5`）默认输出格式为`png`，可以修改为`jpg`：</X.P>
            <X.CodeBlock language="text" code="defaults write com.apple.screencapture type jpg" />
        </>
    );
}
