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
                experiment="测试数据集是`Diffuse Synthetic 360`、`Realistic Synthetic 360`和`Real Forward-Facing`"
                innovation="将输入坐标位置编码，帮助MLP表示高频函数\n分层采样"
                limitation="有效地优化和渲染神经辐射场\n可解释性"
            />
            <X.HighlightBlock bgcolor="gray">
                <X.H3>更多笔记</X.H3>
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
            <X.HighlightBlock bgcolor="gray">
                <X.H3>更多笔记</X.H3>
                <X.P>
                    *文章的相关工作部分*\n传统的场景重建与渲染：基于光场的，密集采样、非结构化捕获；---
                    *运动恢复结构*`(Structure from Motion, SFM)`用一组照片估计稀疏点云合成新视图；---
                    *多视点立体视觉*`(Multi-View Stereo, MVS)`；\n
                    神经渲染和辐射场：用CNN估计混合权重，用于纹理空间；`Soft3D`提出`Volumetric representations`；---
                    `NeRF`提出重要性采样和位置编码来提高质量，但使用了大型多层感知器，对速度有负面影响；
                </X.P>
                <X.P>
                    *稀疏重建和稠密重建*\n稀疏重建主要用于定位，得到每张图片的相机参数，提取特征点，例如SFM；---
                    稠密重建是假设相机参数已知的情况下，从不同视角的图像中找到匹配的对应点，对整个图像或图像中绝大部分像素进行重建。
                </X.P>
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/2304.04395v3.pdf">Instance Neural Radiance Field (2023)</X.H2>
            <PaperSummary topic="输入一个以多视图RGB图像预训练的NeRF，学习给定场景的3D实例分割" />
            <X.HighlightBlock bgcolor="gray">
                <X.H3>更多笔记</X.H3>
                <X.P>
                    *稀疏重建和稠密重建*\n稀疏重建主要用于定位，得到每张图片的相机参数，提取特征点，例如SFM；---
                    稠密重建是假设相机参数已知的情况下，从不同视角的图像中找到匹配的对应点，对整个图像或图像中绝大部分像素进行重建。
                </X.P>
            </X.HighlightBlock>

            <X.H2 href="https://arxiv.org/pdf/2201.05989.pdf">
                Instant Neural Graphics Primitives with a Multiresolution Hash Encoding (2022)
            </X.H2>
            <PaperSummary topic="实现实时辐射场渲染，同时保持高质量的视觉效果，并且保持较短的训练时间" />
            <X.HighlightBlock bgcolor="gray">
                <X.H3>更多笔记</X.H3>
                <X.P>
                    *文章的相关工作部分*\n传统的场景重建与渲染：基于光场的，密集采样、非结构化捕获；---
                    *运动恢复结构*`(Structure from Motion, SFM)`用一组照片估计稀疏点云合成新视图；---
                    *多视点立体视觉*`(Multi-View Stereo, MVS)`；\n
                    神经渲染和辐射场：用CNN估计混合权重，用于纹理空间；`Soft3D`提出`Volumetric representations`；---
                    `NeRF`提出重要性采样和位置编码来提高质量，但使用了大型多层感知器，对速度有负面影响；
                </X.P>
                <X.P>
                    *稀疏重建和稠密重建*\n稀疏重建主要用于定位，得到每张图片的相机参数，提取特征点，例如SFM；---
                    稠密重建是假设相机参数已知的情况下，从不同视角的图像中找到匹配的对应点，对整个图像或图像中绝大部分像素进行重建。
                </X.P>
            </X.HighlightBlock>

            <X.H1>学习</X.H1>
            <X.H2 href="https://www.cv-foundation.org/openaccess/content_cvpr_2014/papers/Girshick_Rich_Feature_Hierarchies_2014_CVPR_paper.pdf">
                Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation (2014)
            </X.H2>
            <PaperSummary
                topic="提出`Regions with CNN features, R-CNN`提高目标检测性能"
                experiment="在`PASCAL VOC 2012`取得`mAP 53.3%`，在`ILSVRC 2013`竞赛数据集取得`mAP 31.4%`"
            />
            <X.HighlightBlock bgcolor="gray">
                <X.H3>更多笔记</X.H3>
            </X.HighlightBlock>
        </X.BlogWrapper>
    );
}
