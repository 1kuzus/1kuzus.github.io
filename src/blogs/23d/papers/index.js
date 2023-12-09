import X from '@/component/X';

function PaperSummary(props) {
    const {topic, method, experiment, innovation, limitation} = props;
    return (
        <X.HighlightBlock bgcolor="gray">
            {X.Oli({reset: 0}) && false}
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
                topic="使用稀疏输入2D图片集实现场景的3D视图合成。"
                method={<X.P>从`($x,y,z,\theta,\phi$)`到`($R,G,B,\sigma$)`</X.P>}
                experiment="文章主要解决了用5D空间表示3D合成"
                innovation="文章主要解决了用5D空间表示3D合成"
                limitation="文章主要解决了用5D空间表示3D合成"
            />
            <X.HighlightBlock bgcolor="gray">
                <X.H3>其他笔记</X.H3>
                <X.P>神经辐射场用于从2D的图片重建3D的场景。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://arxiv.org/pdf/2308.04079.pdf">
                3D Gaussian Splatting for Real-Time Radiance Field Rendering (2023)
            </X.H2>
            <PaperSummary
                topic={<X.P>文章主要解决了用`5D`空间表示`3D`合成</X.P>}
                method={
                    <>
                        <X.P>文章主要解决了用`5D`空间表`3D`合成</X.P>
                        <X.P>文章主要解决了用`D`空间表示`3D`合成</X.P>
                        <X.P>文章主要解决用`5D`空间表示`3D`合成</X.P>
                    </>
                }
            />
            <X.H1>学习</X.H1>
        </X.BlogWrapper>
    );
}
