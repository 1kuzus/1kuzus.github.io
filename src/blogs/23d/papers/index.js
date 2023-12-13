import X from '@/component/X';

function PaperSummary(props) {
    const {topic, method, experiment, innovation, limitation} = props;
    return (
        <X.HighlightBlock bgcolor="gray">
            {X.Oli({reset: 0}) && false}
            {/* todo: 可以写的更好看一点 */}
            {topic && (
                <X.Oli>
                    <X.P noMarginBottom>*文章的主题 / 文章要解决什么问题？*</X.P>
                    {typeof topic === 'string' ? <X.P>{topic}</X.P> : topic}
                </X.Oli>
            )}
            {method && (
                <X.Oli>
                    <X.P noMarginBottom>*文章的核心方法 / 具体是如何做的？*</X.P>
                    {typeof method === 'string' ? <X.P>{method}</X.P> : method}
                </X.Oli>
            )}
            {experiment && (
                <X.Oli>
                    <X.P noMarginBottom>*做了什么实验，效果怎么样？*</X.P>
                    {typeof experiment === 'string' ? <X.P>{experiment}</X.P> : experiment}
                </X.Oli>
            )}
            {innovation && (
                <X.Oli>
                    <X.P noMarginBottom>*研究的创新点*</X.P>
                    {typeof innovation === 'string' ? <X.P>{innovation}</X.P> : innovation}
                </X.Oli>
            )}
            {limitation && (
                <X.Oli>
                    <X.P noMarginBottom>*有什么限制或可以改进的地方？*</X.P>
                    {typeof limitation === 'string' ? <X.P>{limitation}</X.P> : limitation}
                </X.Oli>
            )}
        </X.HighlightBlock>
    );
}

/*
AI提问示例
请分别回答下面五个问题：
1.文章主要想解决什么问题？
2.文章是如何做的，核心方法是什么？
3.文章做了什么实验，效果怎么样？
4.研究有什么创新点？
5.研究有什么限制或可以改进的地方？
*/

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>研究</X.H1>
            <X.H2 href="https://arxiv.org/pdf/2003.08934.pdf">
                NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis (2020)
            </X.H2>
            <PaperSummary
                topic="使用稀疏输入2D图片集实现场景的3D视图合成"
                method={<X.P>从`($x,y,z,\theta,\phi$)`到`($R,G,B,\sigma$)`</X.P>}
                experiment="测试数据集是`Diffuse Synthetic 360◦`、`Realistic Synthetic 360◦`和`Real Forward-Facing`"
                innovation="将输入坐标位置编码，帮助MLP表示高频函数\n分层采样"
                limitation="有效地优化和渲染神经辐射场\n可解释性"
            />
            <X.HighlightBlock bgcolor="gray">
                <X.H3>其他笔记</X.H3>
                <X.P>神经辐射场用于从2D的图片重建3D的场景。</X.P>
                <X.P noMarginBottom>文中出现的三个指标：PSNR、SSIM、LPIPS</X.P>
                <X.Uli>
                    <X.P>
                        *峰值信噪比*`(Peak Signal to Noise Ratio, PSNR)`：---
                        用于衡量图像恢复的质量，数值越高表示图像质量越好。接近`50 dB`代表误差非常小，大于`30 dB`---
                        人眼难察觉差异。
                    </X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>
                        *结构相似性*`(Structural Similarity Index Measure, SSIM)`：---
                        用于衡量图像的结构相似性，得分通常在`0`~`1`之间，数值越高表示图像结构越相似。相较于PSNR在图像质量的衡量上更能符合人眼对图像质量的判断。
                    </X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>
                        *基于学习的感知图像质量评价*`(Learned Perceptual Image Patch Similarity, LPIPS)`：---
                        测量从预训练网络中提取的两个图像的特征之间的相似性，得分通常在`0`~`1`之间，数值越低表示感知质量越高。
                    </X.P>
                </X.Uli>
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/2308.04079.pdf">
                3D Gaussian Splatting for Real-Time Radiance Field Rendering (2023)
            </X.H2>
            <PaperSummary topic="实现实时辐射场渲染，同时保持高质量的视觉效果，并且保持较短的训练时间" />
            <X.H1>学习</X.H1>
        </X.BlogWrapper>
    );
}
