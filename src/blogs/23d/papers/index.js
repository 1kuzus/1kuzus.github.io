import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>论文速记</X.Title>
            <X.H3>Instance_Neural_Radiance_Field_ICCV_2023_paper</X.H3>
            <X.Table>
                <tr>
                    <th>解决的是什么问题</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>基于哪些研究</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>有哪些限制</th>
                    <td>1</td>
                </tr>
            </X.Table>
            <X.H3>文章核心想法</X.H3>
            <X.H3>其他笔记</X.H3>
        </X.BlogWrapper>
    );
}
