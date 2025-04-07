import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>最近有时候会做一些CTF的逆向/二进制利用题目，目前的环境是Ubuntu 22.04.2 ARM64（MacOS上的Parallels Desktop虚拟机），然而大部分题目的可执行文件都是x86_64的，虽然可以利用Rosetta来正常运行x86_64的程序，但是没办法顺利调试。</X.P>
            <X.P>由于实在不想在两台电脑上来回切换，所以花了两三天时间找了找解决方案，目前是在我的Ubuntu ARM64系统上用QEMU又套了一个x86_64的虚拟机，用GDB远程调试。在这里记录下配置的全过程～</X.P>
            <X.H1>之前的尝试</X.H1>
            <X.H2>Windows笔记本 + VMware虚拟机</X.H2>
            <X.P>没什么问题，就是感觉搞两台电脑太麻烦了，所以才有了本文...</X.P>
            <X.H2>QEMU user mode + gdb-multiarch</X.H2>
            <X.P>首先，这种方式是可以成功调试的，具体步骤为：</X.P>
            <X.Oli>`qemu-x86_64 -g 1234 /path/to/binary`，这时会在`1234`端口上监听，等待GDB连接；</X.Oli>
            <X.Oli>然后新开一个终端，执行：`gdb-multiarch /path/to/binary`；</X.Oli>
            <X.Oli>
                <X.P>进入GDB后，执行`target remote :1234`，就可以调试了。</X.P>
                <X.P>（这一步如果使用GDB插件GEF，需要进入GDB后执行`gef-remote --qemu-user --qemu-binary /path/to/binary localhost 1234`，参考@gef-remote qemu-mode[https://hugsy.github.io/gef/commands/gef-remote/#qemu-mode]@。）</X.P>
            </X.Oli>
            <X.P>然而QEMU user mode和GDB远程协议交换的信息不全，不足以在本地建立起等价的`/proc/[pid]/maps`（参考@issue[https://github.com/hugsy/gef/issues/1036#issuecomment-1874354407]@），这会导致一些原生命令如`info proc mappings`或者插件命令`vmmap`、`search-pattern`等无法正常工作。</X.P>
            <X.H1>当前解决</X.H1>
            <X.P>所以，最后还是决定用QEMU模拟一个完整的x86_64虚拟机，一方面可以解决GDB调试的问题，另一方面有了完整的x86_64环境，也方便用来做一些其他的事情。</X.P>
            <X.H2>安装QEMU和x86_64系统</X.H2>
            <X.Oli reset>`sudo apt install qemu-user qemu-system-x86`</X.Oli>
            <X.Oli>
                <X.P>接下来选择一个磁盘镜像，我选择的是`debian-12-nocloud-amd64.qcow2`，可以直接在@这里[https://cdimage.debian.org/images/cloud/bookworm/latest/]@下载，注意选择`nocloud`版本，最轻量，默认用户`root`，无密码。</X.P>
                <X.P>这一步原则上只要是x86_64的系统就行，也可以从`.iso`镜像安装，或者选择一些其他的最小化Linux发行版（有的只有几十MB大小）。个人感觉这个Debian镜像站还不错，可以下载`.qcow2`文件，QEMU可以免安装运行；并且包含`glibc`（Alpine就不包含，不过Alpine镜像更小），和大部分题目的环境一致。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>尝试启动系统：`qemu-system-x86_64 -m 1024 -hda /path/to/debian-12-nocloud-amd64.qcow2 -nographic`</X.P>
                <X.Uli>`-hda`：下载的磁盘镜像路径；</X.Uli>
                <X.Uli>`-nographic`：不启动图形界面，直接输出到终端。</X.Uli>
            </X.Oli>
            <X.Oli>登录系统，用户名`root`，默认无密码。</X.Oli>
            <X.P>看到下面的结果就说明成功了～</X.P>
            <X.Image src="fig1.jpg" />
            <X.H2>在x86_64系统上安装gdbserver</X.H2>
            <X.Oli reset>`sudo apt update`</X.Oli>
            <X.Oli>`sudo apt install gdbserver`</X.Oli>
            <X.H2>配置共享文件夹和端口转发</X.H2>
            <X.HighlightBlock>
                <X.P>下面语境中“主机”指的是运行QEMU的Ubuntu 22.04.2 ARM64虚拟机。</X.P>
            </X.HighlightBlock>
            <X.P>在这一步，我们让QEMU的x86_64系统和主机之间共享一个目录，可以把题目放在共享文件夹里。（对于我的环境，我可以让MacOS、Ubuntu ARM64虚拟机以及Ubuntu中的QEMU的x86_64系统共享同一个文件夹，共享文件很方便。）</X.P>
            <X.P>同时，目前我使用`user`网络模式，QEMU的x86_64系统可以访问互联网，但是外部（包括主机）无法直接访问QEMU的x86_64系统，需要配置端口转发。这一步相当于把QEMU虚拟机的端口`xxxx`转发到主机的端口`yyyy`，然后主机可以通过`localhost:yyyy`来访问对应的服务，这一步很关键，QEMU虚拟机上的SSH和`gdbserver`都需要这种方式访问。</X.P>
            <X.Oli reset>
                <X.P>上述功能通过QEMU启动参数来实现配置：</X.P>
                <X.CodeBlock
                    language="bash"
                    code={String.raw`
                    qemu-system-x86_64 -m 1024 -hda /path/to/debian-12-nocloud-amd64.qcow2 \
                        -virtfs local,path=/media/psf/shared,mount_tag=shared,security_model=none,id=shared \
                        -device e1000,netdev=net0 \
                        -netdev user,id=net0,hostfwd=tcp::2222-:22,hostfwd=tcp::1234-:1234,hostfwd=tcp::1235-:1235,hostfwd=tcp::1236-:1236 \
                        -nographic
                    `}
                />
                <X.Uli>`-virtfs`行：启用虚拟文件系统共享，`/media/psf/shared`是主机上的路径，后面的`mount_tag=shared`是虚拟机上的挂载点标签，`id=shared`是QEMU使用的标识符，可以自定义；</X.Uli>
                <X.Uli>`-device`行：模拟网卡，`net0`是标识符，下面有用到；</X.Uli>
                <X.Uli>`-netdev`行：使用`user`网络模式，转发了虚拟机上的`22`、`1234`、`1235`、`1236`四个端口，注意虚拟机的`22`端口被转发到主机的`2222`端口，因为主机的`22`端口通常已经被占用；另外三个端口留给`gdbserver`或其他目的使用，与转发给主机的端口号一致。</X.Uli>
            </X.Oli>
            <X.Oli>关闭QEMU虚拟机，用上述命令再次启动；</X.Oli>
            <X.Oli>
                <X.P>还需要在虚拟机中挂载共享目录：</X.P>
                <X.P>`cd /mnt`</X.P>
                <X.P>`mkdir shared`</X.P>
                <X.P>`mount -t 9p shared /mnt/shared`</X.P>
                <X.Uli>`-t`：指定文件系统类型，QEMU的`-virtfs`默认使用9P文件系统。</X.Uli>
            </X.Oli>
            <X.P>到这里，在QEMU虚拟机执行`ls /mnt/shared`应当可以看到主机上的共享文件夹的内容。</X.P>
            <X.H2>gdbserver + pwndbg远程调试</X.H2>
            <X.P>对比了一下GEF和pwndbg，感觉pwndbg远程调试的命令更简洁一些，并且自带其他架构，不需要安装`gdb-multiarch`，所以决定使用pwndbg。</X.P>
            <X.Oli reset>在Ubuntu ARM64上安装pwndbg，在@pwndbg/releases[https://github.com/pwndbg/pwndbg/releases]@中选择`pwndbg_yyyy.mm.dd_arm64.deb`下载。</X.Oli>
            <X.Oli>`sudo dpkg -i pwndbg_yyyy.mm.dd_arm64.deb`</X.Oli>
            <X.P>接下来在QEMU虚拟机中启动`gdbserver`，监听`1234`端口，并在主机中连接。</X.P>
            <X.Oli>QEMU虚拟机终端中执行：`gdbserver :1234 /mnt/shared/binary`，这里假设二进制文件`binary`已经拷贝到共享目录中。</X.Oli>
            <X.Oli>主机终端中执行：`pwndbg`，进入调试界面说明前面安装成功了。</X.Oli>
            <X.Oli>主机pwndbg调试界面执行：`target remote :1234`</X.Oli>
            <X.Image src="fig2.jpg" width="100%" />
            <X.P>至此就配置成功了！验证一下`vmmap`和`search`均可以正常使用～</X.P>
            <X.Image src="fig3.jpg" width="100%" />
            <X.H1>更多配置</X.H1>
            <X.H2>自动挂载共享目录</X.H2>
            <X.P>每次重启QEMU虚拟机都需要手动挂载共享目录比较麻烦，可以在`/etc/fstab`中添加一行来实现自动挂载，在QEMU虚拟机中执行：</X.P>
            <X.CodeBlock language="bash" code={String.raw`echo "shared /mnt/shared 9p trans=virtio,access=any 0 0" | sudo tee -a /etc/fstab`} />
            <X.H2>SSH</X.H2>
            <X.H3>安装与配置</X.H3>
            <X.P>调试程序不需要SSH，但是建议装一下，便于从主机连接，可以实现远程开发之类的。</X.P>
            <X.Oli reset>`sudo apt install openssh-server`</X.Oli>
            <X.Oli>
                <X.P>我使用的`qcow2`镜像默认无密码，SSH连接时会提示`Permission denied`，需要修改SSH配置文件`sshd_config`。</X.P>
                <X.P>在QEMU虚拟机中：`sudo vi /etc/ssh/sshd_config`</X.P>
                <X.P>找到以下两行：</X.P>
                <X.CodeBlock
                    language="text"
                    code={String.raw`
                    #PermitRootLogin prohibit-password
                    ...
                    #PermitEmptyPasswords no
                    `}
                />
                <X.P>修改为：</X.P>
                <X.CodeBlock
                    language="text"
                    code={String.raw`
                    PermitRootLogin yes
                    ...
                    PermitEmptyPasswords yes
                    `}
                />
            </X.Oli>
            <X.Oli>保存退出后，重启SSH服务：`sudo systemctl restart sshd`</X.Oli>
            <X.Oli>
                <X.P>在Ubuntu主机中连接：`ssh -p 2222 root@localhost`</X.P>
                <X.Uli>`-p`：指定端口，前面QEMU启动时已经将虚拟机的`22`端口转发到主机的`2222`端口，所以这里连接`localhost:2222`。</X.Uli>
                <X.Image src="fig4.jpg" />
            </X.Oli>
            <X.HighlightBlock>
                <X.P>下面语境中“主机”指的是MacOS。</X.P>
            </X.HighlightBlock>
            <X.Oli>
                <X.P>如果需要，也可以在MacOS中SSH连接到QEMU虚拟机，我的Ubuntu ARM64 Parallels Desktop虚拟机使用“共享网络”模式，MacOS主机可以访问到Ubuntu虚拟机。在Ubuntu虚拟机中执行`ip addr`，查到Ubuntu虚拟机的IP地址：</X.P>
                <X.Image src="fig5.jpg" />
            </X.Oli>
            <X.Oli>
                <X.P>然后在MacOS主机中SSH连接：`ssh -p 2222 root@10.211.55.3`</X.P>
                <X.Image src="fig6.jpg" />
            </X.Oli>
        </>
    );
}
