import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>说明</X.H1>
            <X.P>复现仓库：@https://github.com/lyclyc52/NeRF_RPN[https://github.com/lyclyc52/NeRF_RPN]@</X.P>
            <X.P>
                这项研究在NeRF中引入RPN，用于3D物体检测和相关任务。作者提供了改写的Instant-NGP以供可视化3D提议框。---
                自己在尝试复现的时候绕了一些弯子，因此借这篇博客复盘一下当时的过程。仓库提供的脚本多为适用于linux系统的`.sh`文件，---
                由于我自己的电脑是windows系统，因此示例中会给出适用于windows系统的相应指令。
            </X.P>
            <X.H1>环境相关</X.H1>
            <X.H2>克隆仓库</X.H2>
            <X.CodeBlock language="bash" code="git clone https://github.com/lyclyc52/NeRF_RPN.git NeRFrpn" />
            <X.P>环境配置参照@官方仓库说明文档[https://github.com/lyclyc52/NeRF_RPN]@即可。</X.P>
            <X.H2>配置Instant-NGP Fork for NeRF Feature Extraction</X.H2>
            <X.P>
                作者修改了Instant-NGP的仓库，添加了一些包括可视化bbox在内的功能。说明文档在@这里[https://github.com/zymk9/instant-ngp/tree/master/scripts]@。
            </X.P>
            <X.CodeBlock
                language="bash"
                code="git clone --recursive https://github.com/zymk9/instant-ngp.git InstantNGPforked"
            />
            <X.P>
                这是Instant-NGP一个早期版本，执行下面的命令运行`build`过程，更多细节可以参考@这里[https://github.com/zymk9/instant-ngp]@。
            </X.P>
            <X.CodeBlock
                language="bash"
                code={`
                cd InstantNGPforked
                cmake . -B build
                cmake --build build --config RelWithDebInfo -j
                `}
            />
            <X.HighlightBlock>
                <X.H3>遇到问题</X.H3>
                <X.H3>git clone 失败，报错 fatal: early EOF</X.H3>
                <X.P>报错：</X.P>
                <X.CodeBlock
                    language="none"
                    code={`
                    error: xxxx bytes of body are still expected
                    fetch-pack: unexpected disconnect while reading sideband packet
                    fatal: early EOF
                    fatal: fetch-pack: invalid index-pack output
                    `}
                />
                <X.P>解决：增大缓冲区(`1048576000`是`1G`)</X.P>
                <X.CodeBlock language="bash" code="git config --global http.postBuffer 1048576000" />
                <X.H3>子模块没有一次性下载成功</X.H3>
                <X.P>解决：进入目录手动重新下载</X.P>
                <X.CodeBlock
                    language="none"
                    code={`
                    cd InstantNGPforked
                    git submodule update --init --recursive
                    `}
                />
            </X.HighlightBlock>
            <X.H2>下载数据集</X.H2>
            <X.P>
                作者提供了数据集的@OneDrive链接[https://hkustconnect-my.sharepoint.com/:f:/g/personal/bhuai_connect_ust_hk/Ekjf3YC0W9BMsc-jHWXI4xEBy5s_OJBLEbebNVIprd4zMg?e=FgbN9S]@，---
                这里以`3D-FRONT`数据集作为例子，需要从作者提供的链接中下载`front3d_nerf_data.zip`和`front3d_rpn_data.zip`。
            </X.P>
            <X.P>假设数据集解压的路径为`E:\front3d_nerf_data`和`E:\front3d_rpn_data`</X.P>
            <X.H2>下载预训练的权重</X.H2>
            <X.P>
                本博客给出的示例需要在上面的OneDrive链接中下载`nerf_rpn_model_release\front3d_anchor_resnet50.pt`。
            </X.P>
            <X.P>假设预训练权重保存的路径为`NeRFrpn\\nerf_rpn\weights\front3d_anchor_resnet50.pt`。</X.P>



            <X.HighlightBlock bgcolor="gray">
                <X.H3>现在我们的文件</X.H3>
                <X.CodeBlock
                    language="none"
                    code={`
                    <work_dir>
                        InstantNGPforked
                        NeRFrpn
                            nerf_rpn
                                weights
                                    front3d_anchor_resnet50.pt
                    E:\\
                        front3d_nerf_data
                        front3d_rpn_data
                    `}
                />
            </X.HighlightBlock>

            <X.H1>生成proposals</X.H1>
            <X.CodeBlock
                language="bash"
                code={`
                # NeRFrpn\\nerf_rpn\\test.bat

                `}
            />
            <X.P>你会在`path`中得到</X.P>
            <X.HighlightBlock>
                <X.H3>CUDA device 不匹配</X.H3>
                <X.P>
                    运行后报错：\nRuntimeError: Attempting to deserialize object on CUDA device 4 but
                    torch.cuda.device_count() is 1. Please use torch.load with map_location to map your storages to an
                    existing device.
                </X.P>
                <X.P>在`run_rpn.py`找到：</X.P>
                <X.CodeBlock language="python" code="checkpoint = torch.load(args.checkpoint)" />
                <X.P>我的笔记本上只有一个GPU，因此修改为：</X.P>
                <X.CodeBlock language="python" code="checkpoint = torch.load(args.checkpoint, map_location={'cuda:4':'cuda:0'})" />
            </X.HighlightBlock>
        </X.BlogWrapper>
    );
}
