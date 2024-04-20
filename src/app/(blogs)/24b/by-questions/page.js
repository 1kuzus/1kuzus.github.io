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
            <X.H2>线性代数</X.H2>
            <X.Oli>
                <X.P>介绍一下矩阵的秩？</X.P>
                <X.P>答案：从定义来说，矩阵的秩等于行向量组的秩，也就是行向量组中线性无关的向量的最大数目，</X.P>
            </X.Oli>
            <X.H1>计算机类</X.H1>
            <X.H2>编程语言</X.H2>
            <X.H2>算法与数据结构</X.H2>
        </>
    );
}
