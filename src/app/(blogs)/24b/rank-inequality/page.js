import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/rank-inequality/';
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
            <X.P>
                这篇博客主要记录对秩不等式$r(A)+r(B)-n \leq r(AB) \leq \min(r(A),r(B))$的理解。\n
                不等式中假设矩阵$A$是$m \times n$，矩阵$B$是$n \times k$的。
            </X.P>
            <X.H3>前置知识</X.H3>
            <X.P>
                首先要理解矩阵可以看作对空间的变换。我们这里约定使用矩阵的*列向量空间*，那么矩阵的*行数就表示了空间的维数*。
            </X.P>
            <X.P>
                举个例子，假如一个向量空间由一个$3 \times 4$矩阵描述，---
                而这个空间的秩为$2$，那么这可能是$3$维空间中$4$个共面的向量。
            </X.P>
            <X.P>
                矩阵乘积$AB$可以理解为对原空间$B$做变换$A$；{`$B_{n \\times k}$`}
                意味着原空间是$n$维空间中的$k$个向量；{`$A_{m \\times n}$`}
                意味着变换$A$将$n$维空间映射到$m$维空间，原空间$B$的$n$个单位轴向量（单位矩阵{`$I_{n \\times n}$`}
                的列向量）被映射到$A$的$n$个列向量。
            </X.P>
            <X.P>
                注意这个例子暗含了矩阵的双重含义，矩阵既可以表示一个*向量空间*，也可以描述一个*空间变换*；但更进一步的说，空间变换本质上也是一个向量空间，---
                代表原空间的*所有单位轴向量在新空间映射到的向量*。
            </X.P>
            <X.H3>右边</X.H3>
            <X.Formula text="r(AB) \leq \min(r(A),r(B))" />
            <X.HighlightBlock>
                <X.P>线性变换后新空间的秩一定不大于原空间的秩，也一定不大于这个变换的秩。</X.P>
            </X.HighlightBlock>
            <X.P>
                新空间的秩一定不大于原空间的秩，因为一个向量空间在经过线性变换后，在“最好”的情况下，没有维度被压缩，秩不变，否则就会降秩。
            </X.P>
            <X.P>新空间的秩一定不大于变换的秩，因为变换后的向量组必然要“存在于”向量空间$A$中。</X.P>
            <X.H3>左边</X.H3>
            <X.Formula text="r(A)+r(B)-n \leq r(AB)" />
            <X.P>移项得$r(B)-r(AB) \leq n-r(A)$，如果记单位矩阵{`$I_{n \\times n}$`}，则可以更直观的表示为：</X.P>
            <X.HighlightBlock>
                <X.Formula text="r(B)-r(AB) \leq r(I)-r(AI)" />
                <X.P>
                    含义为同一个变换$A$作用于$n$维空间（的单位轴向量组），其损失的维度一定不会小于变换$A$作用于$n$维空间中的某个向量组$B$。
                </X.P>
            </X.HighlightBlock>
            <X.P>
                如果变换$A$压缩了向量组$B$的秩，则至少也会压缩$B$所在空间等量的秩数；但反之如果变换$A$压缩了空间的维度，有可能恰好没有影响到向量组$B$。
            </X.P>
            <X.P>
                例如，考虑$A$将$3$维空间的其中$1$个维度$z$压缩没了，导致$r(I)-r(AI)=1$；但$A$可能不会影响$xy$平面上的向量组$B$，$r(B)-r(AB)=0$。
            </X.P>
        </>
    );
}
