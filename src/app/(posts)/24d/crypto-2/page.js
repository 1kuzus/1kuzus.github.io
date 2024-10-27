import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24d/crypto-2/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>伪随机函数PRF、伪随机排列PRP</X.H1>
            <X.H2>定义</X.H2>
            <X.P>伪随机函数`(Pseudo Random Function, PRF)`是一个函数{`$F:K \\times X \\rightarrow Y$`}，结果$Y$需要能有高效的多项式时间算法计算。这个式子中的`K`、`X`、`Y`都代表空间，类似{`$\\{0,1\\}^n$`}。</X.P>
            <X.P>伪随机排列`(Pseudo Random Permutation, PRP)`可以看作函数{`$E:K \\times X \\rightarrow X$`}，要求：</X.P>
            <X.Uli>一一对应：$E$应当是一个双射，即输入与输出结果一一对应；</X.Uli>
            <X.Uli>高效计算：结果可以高效计算，并且还需要有高效的逆运算。</X.Uli>
            <X.P>由此可见“排列”的含义实际上就是通过密钥$K$将输入的集合$X$重新排列。</X.P>
            <X.HighlightBlock>
                <X.P>PRP可以视作PRF的特例：PRP是$Y=X$，且有高效逆运算的PRF。</X.P>
            </X.HighlightBlock>
            <X.H2>PRF的安全性</X.H2>
            <X.P>对于一个PRF，{`$F:K \\times X \\rightarrow Y$`}，考虑下面两个集合：</X.P>
            <X.Uli>$S_1$：所有{`$X \\rightarrow Y$`}的函数，这个集合的大小为{`$|Y|^{|X|}$`}；</X.Uli>
            <X.Uli>
                $S_2$：这是一个更小的集合，
            </X.Uli>

            <X.P></X.P>
            <X.H1>块密码</X.H1>
            <X.P>块密码同样是一种对称加密算法，它将明文划分为固定长度的数据块，并逐块加密，从而生成相应的密文。与流密码不同的是，块密码的输入和输出长度通常是相等的。</X.P>
        </>
    );
}
