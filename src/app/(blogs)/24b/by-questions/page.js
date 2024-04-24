import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/by-questions/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1>数学</X.H1>
            <X.Oli>
                <X.P noMarginBottom>介绍一下矩阵的秩？</X.P>
                <X.P>
                    答：从定义来说，矩阵的秩等于行向量组的秩，也就是行向量组中线性无关的向量的最大数目，对于列向量组同样成立，矩阵的行秩等于列秩。---
                    从几何意义来说，矩阵的秩是列空间或行空间的维度，也是线性变换后的空间维度。
                </X.P>
                <X.P noMarginBottom>介绍一下正定矩阵？</X.P>
                <X.P>？</X.P>
            </X.Oli>
            <X.H1>编程语言</X.H1>
            <X.H1>算法与数据结构</X.H1>
            <X.H1>机器学习与深度学习</X.H1>
            <X.Oli reset={1}>
                <X.P noMarginBottom>正负样本不均衡怎么办？</X.P>
                <X.P>答：一个简单的做法是可以通过上采样和下采样，但下采样会导致数据的丢失，上采样可能导致过拟合；</X.P>
            </X.Oli>
        </>
    );
}
