import X from '@/component/X';

function PaperSummary(props) {
    const {title, time, link, topic, method, experiment, innovation, limitation, others} = props;

    return (
        <>
            <X.H2 href={link}>{`${title} (${time})`}</X.H2>
            <X.Table>
                <tr>
                    <th>文章的主题 / 要解决什么问题？</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>文章的核心方法 / 是如何做的？</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>做了什么实验，效果怎么样？</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>研究的创新点</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>有什么限制或可以改进的地方</th>
                    <td>1</td>
                </tr>
            </X.Table>
            <X.H3>其他</X.H3>
        </>
    );
}

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>论文速记</X.Title>
            <X.H1>研究</X.H1>
            <PaperSummary
                title="NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis"
                time="2020"
                link="https://arxiv.org/pdf/2003.08934.pdf"
            />
            <X.H2>Instance Neural Radiance Field</X.H2>
            <X.Table>
                <tr>
                    <th>链接</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>文章的主题 / 要解决什么问题？</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>文章的核心方法 / 是如何做的？</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>做了什么实验，效果怎么样？</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>研究的创新点</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>有什么限制或可以改进的地方</th>
                    <td>1</td>
                </tr>
            </X.Table>
            <X.H3>其他</X.H3>
            <X.H1>学习</X.H1>
        </X.BlogWrapper>
    );
}
