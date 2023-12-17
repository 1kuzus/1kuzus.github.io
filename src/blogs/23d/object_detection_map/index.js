import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.P>*全类平均精度*`(mean Average Precision, mAP)`用于评估目标检测模型性能。</X.P>
            <X.P>
                接下来围绕下面的例子逐步介绍`mAP`的计算。在下面的`7`张图片中共有`15`个目标，用绿色框标出；---
                并且有`24`个检测框，用红色框标出，百分比数值表示置信度。
            </X.P>
            <X.Image src={require('./fig1.png')} width="600px" />
            <X.H1>交并比</X.H1>
            <X.P>*交并比*`(Intersection over Union, IoU)`是产生的检测框与真实检测框的交集与并集的比值。</X.P>
            <X.Image src={require('./fig2.jpg')} width="300px" invertInDarkTheme />
            <X.H1>查准率和查全率</X.H1>
            <X.P>
                对于一组图像的目标检测结果来说，假如规定`IoU`大于某一阈值就把检测结果视为真正例`TP`，否则视为假正例`FP`；并且如果出现多个检测重叠一个真值的情况，---
                只有最高置信度的检测框被视为`TP`，其他则视为`FP`。
            </X.P>
            <X.P>
                接下来计算两个指标：*查准率*或*精确率*`Precision`，即预测为正的样本中的正确率`TP/All Detections`；---
                *查全率*或*召回率*`Recall`，即正确检测出的正样本占所有正样本的比例`TP/All Ground Truths`。
            </X.P>
            <X.P>对于上面的例子，按照置信度由高到低做出如下表格：</X.P>
            <X.Image src={require('./fig3.png')} width="80%" />
            <X.P>
                表格的前三列分别是图片编号、检测框编号和置信度；\n`TP``FP`列标识出这个检测框是否为一个真正例；\n`Acc
                TP``Acc FP`列是截至此行累计的`TP`和`FP`个数，用于`Precision`和`Recall`的计算；\n`Precision`列由`Acc
                TP/(Acc TP + Acc FP)`得到；\n`Recall`列由`Acc TP/15`得到（共有`15`个目标，因此`All Ground
                Truths`=`15`）。
            </X.P>
            <X.H1>平均精度AP</X.H1>
            <X.P>*平均精度*`(Average Precision, AP)`由近似计算`Precision`-`Recall`曲线下面积得出。</X.P>
            <X.P>
                通常的计算方法是取曲线`11`点插值，不过无论如何计算，最后的含义都是希望得到近似的曲线下面积。---
                因此在这里不展开介绍计算过程，而是讨论“曲线下面积”是如何与“平均精度”建立起联系的。
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>个人理解</X.H3>
                <X.P>
                    当我们说模型在一个类别上预测精度是`80%`时，直观上的体会是“模型的`10`个预测框中，大约有`8`个是对目标的正确预测”。---
                    然而这并不能与`Precision`-`Recall`曲线下的面积建立起直观的联系。但注意到曲线的纵坐标的含义就是精度，从这个角度出发，以下是对`AP`指标的个人理解：
                </X.P>
                <X.P>
                    下面是一个常见的`Precision`-`Recall`曲线示意图。尽管现实任务中的曲线通常是不平滑、不单调的，但大致可以用图中的较为理想的曲线走势描述。---
                    我们通常用*平衡点*去衡量一个模型的好坏，也就是曲线上`Precision`=`Recall`的点。
                </X.P>
                <X.Image src={require('./fig4.jpg')} width="40%" invertInDarkTheme />
                <X.P>
                    模型在平衡点处的精度与曲线下面积有没有联系呢？下图的蓝色折线`D`将曲线`A`的平衡点两侧的两段单调递减的曲线近似为直线，如果以折线`D`下面积近似曲线`A`下面积，---
                    将黄色三角形补到右侧后，可以发现蓝色折线`D`下的面积恰好反映了平衡点处的精度。
                </X.P>
                <X.Image src={require('./fig5.jpg')} width="85%" invertInDarkTheme />
                <X.P>
                    因此可以认为，平均精度`AP`某种意义上是用`Precision`-`Recall`曲线下面积近似反映了平衡点处的`Precision`值。
                </X.P>
            </X.HighlightBlock>
            <X.H1>全类平均精度mAP</X.H1>
            <X.P>上述步骤算出的是针对一个类别的平均精度`AP`，而全类平均精度`mAP`是所有检测到的类别的`AP`均值。</X.P>
            <X.H3>为什么要分类计算AP，再取均值？</X.H3>
            <X.P>
                评估模型在目标检测任务上的性能时，通常用所有类别的`AP`的平均值，而不是将所有类别的检测结果混在一起，直接计算出一个数值，其中一个原因是：\n---
                当类别数量不平衡时，可能某个少样本类别的检测效果很差。如果混在一起计算，由于该类别样本数量较少，因此并不会对最终的结果产生很大的影响。---
                此时对模型的性能评估是不准确的。因此需要逐类测量`AP`再取均值，作为最终的`mAP`检测结果。
            </X.P>
            <X.H1>参考资料</X.H1>
            <X.P noMarginBottom>本文的部分内容、图片来源于：</X.P>
            <X.Uli>@动手学深度学习 - 计算机视觉[https://zh-v2.d2l.ai/chapter_computer-vision]@</X.Uli>
            <X.Uli>@目标检测中的mAP是什么含义？[https://www.zhihu.com/question/53405779/answer/2481182203]@</X.Uli>
            <X.Uli>
                @深入了解平均精度(mAP)：通过精确率-召回率曲线评估目标检测性能[https://baijiahao.baidu.com/s?id=1767101899839497831]@
            </X.Uli>
        </X.BlogWrapper>
    );
}
