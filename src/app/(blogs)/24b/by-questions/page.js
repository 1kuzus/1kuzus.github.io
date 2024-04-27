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
            <X.H1>线性代数</X.H1>
            <X.Oli>
                <X.P>介绍一下矩阵的秩，秩有什么物理意义？</X.P>
                <X.P>
                    从定义来说，矩阵的秩等于行向量组的秩，也就是行向量组中线性无关的向量的最大数目，对于列向量组同样成立，矩阵的行秩等于列秩。---
                    从几何意义来说，矩阵的秩是列空间或行空间的维度，也是线性变换后的空间维度。
                </X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>向量组线性相关/线性无关的充要条件？</X.P>
                <X.P>
                    线性表示的角度：存在/不存在一个向量能被其他向量线性表示；\n秩的角度：向量组的秩小于/等于向量个数；\n
                    线性方程组的角度：假设向量组记作$A$，齐次方程组$Ax=0$有/无非零解。
                </X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>介绍下$n$维向量空间？</X.P>
                <X.P>一般地，由全体$n$维向量构成的集合是$n$维向量空间。集合对*加法*和*数乘*封闭。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>什么是欧式空间？和向量空间是什么关系？</X.P>
                <X.P>欧式空间是一个带有内积的向量空间，欧式空间是向量空间的一种特例。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>线性方程组$Ax=b$的解有哪些情况，对应什么条件？</X.P>
                <X.P>
                    增广矩阵（也就是$[A, b]$）的角度：\n 无解：消元后（增广矩阵的阶梯型）有$0=$`非零常数`的情况；\n
                    有唯一解：增广矩阵阶梯型非零行数等于未知数个数；\n 有无穷解：增广矩阵阶梯型存在零行。
                </X.P>
                <X.P>
                    空间变换/秩的角度：\n 无解：系数矩阵的秩小于增广矩阵的秩，或者$b$不存在于向量空间$A$中；\n
                    有唯一解：有解的前提下，系数矩阵或增广矩阵空间满秩（秩等于未知数个数）；\n
                    有无穷解：有解的前提下，系数矩阵或增广矩阵空间不满秩（秩小于未知数个数）。
                </X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>假如非齐次方程组$Ax=b$有唯一解，那么齐次方程组$Ax=0$解空间的维度是多少？</X.P>
                <X.P>零维。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>什么是欧式空间？和向量空间是什么关系？</X.P>
                <X.P>欧式空间是一个带有内积的向量空间，欧式空间是向量空间的一种特例。</X.P>
            </X.Oli>
            <X.Br />

            <X.H1>编程语言</X.H1>
            <X.H1>算法与数据结构</X.H1>
            <X.H1>机器学习与深度学习</X.H1>
            <X.Oli reset={1}>
                <X.P>正负样本不均衡怎么办？</X.P>
                <X.P>一个简单的做法是可以通过上采样和下采样，但下采样会导致数据的丢失，上采样可能导致过拟合；</X.P>
            </X.Oli>
            <X.H1>杂题</X.H1>
            <X.Oli reset={1}>
                <X.P>
                    只能用加、减、乘、除、乘方、开方六则运算，$x,y \gt
                    0$，怎么从数学上近似表示$\max(x,y)$和$\min(x,y)$？
                </X.P>
                <X.Formula text="\lim_{n \to \infty} (x^n+y^n)^{1/n} = \max(x,y)" />
                <X.Formula text="\lim_{n \to -\infty} (x^n+y^n)^{1/n} = \min(x,y)" />
            </X.Oli>
        </>
    );
}
