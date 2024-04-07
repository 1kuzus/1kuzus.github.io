import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/longtime/papers/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

function PaperSummary(props) {
    const {topic, method, experiment, innovation, limitation} = props;
    return (
        <X.HighlightBlock bgcolor="gray">
            {X.Oli({reset: 0}) && false /*在不确定第一个Oli的情况下，reset序号为0，使得下一项一定从1开始*/}
            {[
                [topic, '文章的主题 / 文章要解决什么问题？'],
                [method, '文章的核心方法 / 具体是如何做的？'],
                [experiment, '做了什么实验，效果怎么样？'],
                [innovation, '研究的创新点'],
                [limitation, '有什么限制或可以改进的地方？'],
            ].map(
                ([comp, text], index) =>
                    comp && (
                        <X.Oli key={index}>
                            <X.P noMarginBottom>*{text}*</X.P>
                            {typeof comp === 'string' ? <X.P>{comp}</X.P> : comp}
                        </X.Oli>
                    )
            )}
        </X.HighlightBlock>
    );
}

/*
AI提问示例
请分别回答下面五个问题：
1.文章主要想解决什么问题？
2.文章具体是如何做的，核心方法是什么？
3.文章具体做了什么数据集上的实验，效果怎么样？
4.研究有什么创新点？
5.研究有什么限制或可以改进的地方？
*/

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1>研究</X.H1>
            <X.H2 href="https://arxiv.org/pdf/2003.08934.pdf">
                【NeRF】NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis (2020)
            </X.H2>
            <PaperSummary
                topic="使用稀疏输入2D图片集实现场景的3D视图合成"
                method={<X.P>从`($x,y,z,\theta,\phi$)`到`($R,G,B,\sigma$)`</X.P>}
                experiment="测试数据集是`Diffuse Synthetic 360`、`Realistic Synthetic 360`和`Real Forward-Facing`"
                innovation="将输入坐标位置编码，帮助MLP表示高频函数\n分层采样"
                limitation="有效地优化和渲染神经辐射场\n可解释性"
            />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>神经辐射场用于从2D的图片重建3D的场景。</X.P>
                <X.P noMarginBottom>文中出现的三个指标：PSNR、SSIM、LPIPS</X.P>
                <X.Uli>
                    *峰值信噪比*`(Peak Signal to Noise Ratio, PSNR)`：---
                    用于衡量图像恢复的质量，数值越高表示图像质量越好。接近`50 dB`代表误差非常小，大于`30 dB`---
                    人眼难察觉差异。
                </X.Uli>
                <X.Uli>
                    *结构相似性*`(Structural Similarity Index Measure, SSIM)`：---
                    用于衡量图像的结构相似性，得分通常在`0`~`1`之间，数值越高表示图像结构越相似。相较于PSNR在图像质量的衡量上更能符合人眼对图像质量的判断。
                </X.Uli>
                <X.Uli>
                    *基于学习的感知图像质量评价*`(Learned Perceptual Image Patch Similarity, LPIPS)`：---
                    测量从预训练网络中提取的两个图像的特征之间的相似性，得分通常在`0`~`1`之间，数值越低表示感知质量越高。
                </X.Uli>
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/2308.04079.pdf">
                【3DGS】3D Gaussian Splatting for Real-Time Radiance Field Rendering (2023)
            </X.H2>
            <PaperSummary topic="实现实时辐射场渲染，同时保持高质量的视觉效果，并且保持较短的训练时间" />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.H3>文章的相关工作部分</X.H3>
                <X.P>
                    传统的场景重建与渲染：基于光场的，密集采样、非结构化捕获；*运动恢复结构*`(Structure from Motion,
                    SFM)`用一组照片估计稀疏点云合成新视图；*多视点立体视觉*`(Multi-View Stereo, MVS)`；\n
                    神经渲染和辐射场：用CNN估计混合权重，用于纹理空间；Soft3D提出`Volumetric representations`；---
                    NeRF提出重要性采样和位置编码来提高质量，但使用了大型多层感知器，对速度有负面影响；
                </X.P>
                <X.H3>稀疏重建和稠密重建</X.H3>
                <X.P>
                    稀疏重建主要用于定位，得到每张图片的相机参数，提取特征点，例如SFM；---
                    稠密重建是假设相机参数已知的情况下，从不同视角的图像中找到匹配的对应点，对整个图像或图像中绝大部分像素进行重建。
                </X.P>
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/2201.05989.pdf">
                【Instant NGP】Instant Neural Graphics Primitives with a Multiresolution Hash Encoding (2022)
            </X.H2>
            <PaperSummary topic="实现实时辐射场渲染，同时保持高质量的视觉效果，并且保持较短的训练时间" />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.H3>Instant NGP与NeRF的异同</X.H3>
                <X.P noMarginBottom>转载自@知乎：从NeRF到Instant-NGP[https://zhuanlan.zhihu.com/p/631284285]@</X.P>
                <X.Uli>同样基于体渲染</X.Uli>
                <X.Uli>不同于NeRF的MLP，Instant NGP使用稀疏的参数化的`voxel grid`作为场景表达</X.Uli>
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/2211.11646.pdf">
                【NeRF RPN】NeRF-RPN: A general framework for object detection in NeRFs (2022)
            </X.H2>
            <PaperSummary
                topic="在NeRF中直接进行3D物体检测"
                method={
                    <X.P>
                        第一部分：特征提取器\n从NeRF采样的辐射度和密度网格作为输入，生成特征金字塔作为输出。\n
                        第二部分：RPN头\n对特征金字塔进行操作并生成对象建议。
                    </X.P>
                }
                innovation="第一次将RPN引入NeRF以进行3D物体检测和相关任务\n利用Hypersim和3D-FRONT数据集构建了第一个用于3D目标检测的NeRF数据集"
            />
            <X.H2 href="https://arxiv.org/pdf/2304.04395v3.pdf">
                【Instance NeRF】Instance Neural Radiance Field (2023)
            </X.H2>
            <PaperSummary
                topic={
                    <>
                        <X.P>输入一个以多视图RGB图像预训练的NeRF，学习给定场景的3D实例分割</X.P>
                        <X.P noMarginBottom>文章的主要贡献：</X.P>
                        <X.Uli>第一个在NeRF中进行3D实例分割的尝试之一，而没有使用真实分割标签作为输入</X.Uli>
                        <X.Uli>
                            提出`Neural Instance Field`的结构和训练方法，可以产生*多视图一致*的2D分割和连续的3D分割
                        </X.Uli>
                        <X.Uli>对合成室内NeRF数据集进行实验和消融研究</X.Uli>
                    </>
                }
                method={
                    <>
                        <X.P>Instance NeRF有两个组件：预训练的NeRF模型、和文中提出的`Instance Field`。</X.P>
                        <X.P>`Instance Field`的训练过程如下：</X.P>
                        <X.Image src="instance_field.jpg" width="96%" invertInDarkTheme />
                        <X.P>
                            NeRF-RCNN用预训练的NeRF提取的辐射场和密度场，为每个检测到的对象输出3D掩码；Mask2Former生成从NeRF渲染的图像的二维全景分割图---
                            （跨视图的实例标签并不一定一致）。然后按照相机位置，投影3D掩码去匹配不同视图中的相同实例，去产生多视图一致的2D分割图。---
                            CascadePSP用于细化2D mask。
                        </X.P>
                    </>
                }
            />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.H3>包围体：AABB和OBB</X.H3>
                <X.P>*AABB*：轴对齐包围盒`(Axis-Aligned Bounding Box)`\n*OBB*：有向包围盒`(Oriented Bounding Box)`</X.P>
                <X.P>下图展示了更多种类的包围体：</X.P>
                <X.Image src="bounding_volumes.png" width="100%" invertInDarkTheme />
            </X.HighlightBlock>
            <X.H2 href="https://openaccess.thecvf.com/content_CVPR_2020/papers/Cheng_CascadePSP_Toward_Class-Agnostic_and_Very_High-Resolution_Segmentation_via_Global_and_CVPR_2020_paper.pdf">
                【CascadePSP】CascadePSP: Toward Class-Agnostic and Very High-Resolution Segmentation via Global and
                Local Refinement (2020)
            </X.H2>
            <PaperSummary
                topic={
                    <>
                        <X.P>提出一种不使用高分辨率训练数据，解决高分辨率分割问题的方法\n右图是改进后的结果：</X.P>
                        <X.Image src="cascadepsp.jpg" width="400px" invertInDarkTheme />
                    </>
                }
            />
            <X.H2 href="https://arxiv.org/pdf/2312.00860.pdf">【SAGA】Segment Any 3D Gaussians (2023)</X.H2>
            <PaperSummary topic="交互式3D分割" />
            <X.H1>学习</X.H1>
            <X.H2 href="https://www.cv-foundation.org/openaccess/content_cvpr_2014/papers/Girshick_Rich_Feature_Hierarchies_2014_CVPR_paper.pdf">
                【R-CNN】Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation (2014)
            </X.H2>
            <PaperSummary
                topic="提出`Regions with CNN features, R-CNN`提高目标检测性能"
                method="区域提议`(Region Proposals)`：使用`selective search`生成候选框"
                experiment="在`PASCAL VOC 2012`取得`mAP 53.3%`，在`ILSVRC 2013`竞赛数据集取得`mAP 31.4%`"
            />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.P>
                    转载自@动手学深度学习 -
                    区域卷积神经网络系列[https://zh-v2.d2l.ai/chapter_computer-vision/rcnn.html]@
                </X.P>
                <X.H3>R-CNN</X.H3>
                <X.Uli>R-CNN使用启发式搜索算法`selective search`（之前人们通常也是这样做的）来选择锚框</X.Uli>
                <X.Uli>用预训练的模型，对每一个锚框抽取特征</X.Uli>
                <X.Uli>训练一个SVM来对类别分类</X.Uli>
                <X.Uli>训练一个线性回归模型来预测边缘框</X.Uli>
                <X.P>
                    R-CNN的速度很慢，因为可能从一张图像中选出上千个提议区域，这需要上千次的卷积神经网络的前向传播来执行目标检测。这种庞大的计算量使得R-CNN在现实世界中难以被广泛应用。
                </X.P>
                <X.Image src="rcnn.jpg" width="600px" />
                <X.H3>Fast R-CNN</X.H3>
                <X.P>
                    R-CNN的主要性能瓶颈在于，对每个提议区域，卷积神经网络的前向传播是独立的，而没有共享计算。由于这些区域通常有重叠，独立的特征抽取会导致重复的计算。---
                    Fast R-CNN的主要改进之一，是仅在整张图象上执行卷积神经网络的前向传播，并且引入---
                    *兴趣区域池化*`(ROI Pooling)`，将卷积神经网络的输出和提议区域作为输入，---
                    输出连结后的各个提议区域抽取的特征。
                </X.P>
                <X.P>
                    兴趣区域池化层可以给出固定大小的输出：把给定的锚框均匀分割成$n \times m$块，---
                    输出每块里的最大值，这样无论锚框多大，总是输出$nm$个值。
                </X.P>
                <X.P>
                    Fast R-CNN先对图片用CNN抽取特征，然后将`selective
                    search`给出的原图上的提议区域映射到CNN特征图上，再经过`ROI Pooling`就可以得到维度对齐的特征。
                </X.P>
                <X.Image src="fastrcnn.jpg" width="400px" />
                <X.H3>Faster R-CNN</X.H3>
                <X.P>
                    与Fast R-CNN相比，Faster R-CNN将生成提议区域的方法从`selective search`改为了---
                    *区域提议网络*`(Region Proposal Network, RPN)`，模型的其余部分保持不变。区域提议网络作为Faster
                    R-CNN模型的一部分，是和整个模型一起训练得到的。换句话说，Faster R-CNN---
                    的目标函数不仅包括目标检测中的类别和边界框预测，还包括区域提议网络中锚框的二元类别和边界框预测。作为端到端训练的结果，---
                    区域提议网络能够学习到如何生成高质量的提议区域，从而在减少了从数据中学习的提议区域的数量的情况下，仍保持目标检测的精度。
                </X.P>
                <X.Image src="fasterrcnn.jpg" width="600px" />
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/1703.06870.pdf">【Mask R-CNN】Mask R-CNN (2017)</X.H2>
            <PaperSummary
                topic="目标检测&实例分割"
                method={
                    <>
                        <X.P>
                            基于Faster R-CNN，添加一个对每个ROI预测分割mask的分支。---
                            这个分支可以与分类和边界框预测分支并行。
                        </X.P>
                        <X.Image src="maskrcnn1.jpg" width="600px" />
                    </>
                }
                experiment={
                    <>
                        <X.Image src="maskrcnn2.jpg" width="600px" invertInDarkTheme />
                        <X.P>在COCO数据集上表现优异，超过了`2015`和`2016`年COCO分割任务的冠军。</X.P>
                    </>
                }
                innovation="
                `ROI Pooling`中发生了两次浮点数取整，第一次是将锚框均匀分割成$n \times m$块时，第二次是把提议区域映射回CNN特征图时。\n
                分割任务的精细程度更高，因此文章提出了`ROI Align`，使用双线性插值来保留特征图上的空间信息。
                "
            />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.H3>语义分割与实例分割</X.H3>
                <X.Image src="ss_and_is.jpg" width="600px" />
                <X.P noMarginBottom>
                    *语义分割*`(semantic segmentation)`：为每一个像素分配一个类别，但不区分同一类别之间的对象。
                </X.P>
                <X.P>*实例分割*`(instance segmentation)`：会区分属于同一类别的不同实例。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Long_Fully_Convolutional_Networks_2015_CVPR_paper.pdf">
                【FCN】Fully Convolutional Networks for Semantic Segmentation (2015)
            </X.H2>
            <PaperSummary
                topic="使用全卷积网络进行语义分割"
                method="
                是将现有的分类网络（AlexNet、VGG Net、GoogLeNet）改造为全卷积网络，以便在语义分割任务上进行端到端（输入图像，输出分割掩码）的训练。\n
                改造的方式是将最后的全连接层替换成卷积层。
                "
            />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>更多笔记</X.H3>
                <X.H3>转置卷积</X.H3>
                <X.P>
                    卷积通常不会增大输入的高宽，而是保持不变或降低。由于语义分割任务需要像素级别的输出，转置卷积被用来增大输入的高宽。
                </X.P>
                <X.Image src="transpose_convolution.jpg" width="600px" invertInDarkTheme />
                <X.P>
                    图片转载自@动手学深度学习 -
                    转置卷积[https://zh-v2.d2l.ai/chapter_computer-vision/transposed-conv.html]@
                </X.P>
                <X.H3>FCN中的转置卷积</X.H3>
                <X.P>
                    例如对于ImageNet的图片输入，大小通常为`224`\*`224`\*`3`（RGB通道）；经过卷积后缩小宽高缩小`32`倍，通道增加到`512`，变成`7`\*`7`\*`512`的特征图。---
                    此时FCN会先通过一个`1x1conv`进行通道降维，然后通过转置卷积将特征图的高度和宽度增加`32`倍，*输出通道数等于类别数*，相当于储存了对每一类的预测结果。
                </X.P>
            </X.HighlightBlock>
        </>
    );
}
