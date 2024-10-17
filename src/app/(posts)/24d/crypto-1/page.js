import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24d/crypto-1/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>前言</X.H1>
            <X.P>相关链接：</X.P>
            <X.Uli>斯坦福教授Dan Boneh的密码学课程：@[https://crypto.stanford.edu/~dabo/courses/OnlineCrypto/]@</X.Uli>
            <X.Uli>网课平台链接（有作业和测试）：@[https://www.coursera.org/learn/crypto/]@</X.Uli>
            <X.H2>一些符号约定</X.H2>
            <X.Uli>{`$\\{0,1\\}^n$`}：$n$位的二进制串集合</X.Uli>
            <X.Uli>{`$r\\stackrel{R}{\\longleftarrow}U$`}：从有限集合$U$中*均匀*取样得到随机变量$r$</X.Uli>
            <X.Uli>$M$、$C$、$K$：明文空间`(message)`、密文空间`(ciphertext)`、密钥空间`(key)`</X.Uli>
            <X.Uli>$E$、$D$：加密算法、解密算法</X.Uli>
            <X.Uli>
                可忽略不计：在密码学实践中，认为常数{`$\\varepsilon \\leq 1/2^{80}$`}是可以忽略不计`(negligible)`的，{`$\\varepsilon \\geq 1/2^{30}$`}是不可忽略`(non-negligible)`的（大于`1GB`数据就有可能发生）。
            </X.Uli>
            <X.H2>异或的重要性质</X.H2>
            <X.P>
                $Y$是{`$\\{0,1\\}^n$`}上的随机变量，$X$与$Y$独立，且是{`$\\{0,1\\}^n$`}上的均匀分布的随机变量，则$Z = X \oplus Y$是{`$\\{0,1\\}^n$`}上的均匀分布的随机变量。
            </X.P>
            <X.P>证明：无论$Y$的分布如何，考虑其中一位$Y_i$，假设$P(Y_i=0)=p_0$、$P(Y_i=1)=p_1$，由于$X$是均匀分布，$X_i$取$0$或$1$的概率都是一半，因此有：</X.P>
            <X.Formula text="P(X_i \oplus Y_i = 0)=\frac{p_0}{2}+\frac{p_1}{2}=\frac{1}{2}" />
            <X.Formula text="P(X_i \oplus Y_i = 1)=\frac{p_1}{2}+\frac{p_0}{2}=\frac{1}{2}" />
            <X.H2>生日悖论</X.H2>
            <X.P>
                $r_1,r_2,\dots,r_n \in U$是独立同分布的随机变量，则当{`$n=1.2 \\times \\sqrt{|U|}$`}时，{`$P(\\exists i \\neq j: r_i=r_j) \\geq \\frac{1}{2}$`}。
            </X.P>
            <X.H2>密码分析中的几种攻击模式</X.H2>
            <X.Uli>唯密文攻击`(Ciphertext Only Attack, COA)`：攻击者只能获得密文</X.Uli>
            <X.Uli>已知明文攻击`(Known Plaintext Attack, KPA)`：攻击者有一些密文并且知道相对应的明文</X.Uli>
            <X.Uli>选择明文攻击`(Chosen Plaintext Attack, CPA)`：攻击者可以选择一些明文，并从系统中获得相对应的密文</X.Uli>
            <X.Uli>选择密文攻击`(Chosen Ciphertext Attack, CCA)`：攻击者可以选择一些密文，并从系统中获得相对应的明文</X.Uli>
            <X.H1>一次性密码本与完美安全性</X.H1>
            <X.P>一次性密码本`(one-time pad)`的加密方式即：{`$M=C=K=\\{0,1\\}^n$`}，密钥是与消息等长的随机串，加密过程为$c=m \oplus k$。</X.P>
            <X.P>完美安全性定义为：</X.P>
            <X.Formula text="\forall m_0 \in M, m_1 \in M, c \in C: P(E(k,m_0)=c)=P(E(k,m_1)=c)" />
            <X.P>其中$k$从密钥空间中均匀取样。</X.P>
            <X.HighlightBlock>
                <X.P>完美安全性的一个充要条件是香农定理：</X.P>
                <X.P>假设$|M|=|C|=|K|$，{`$k\\stackrel{R}{\\longleftarrow}K$`}，当且仅当使得：</X.P>
                <X.Formula text="\forall m \in M, c \in C: E(k,m)=c" />
                <X.P>成立的$k$有且仅有一个。</X.P>
            </X.HighlightBlock>
            <X.P>根据异或的性质不难看出一次性密码本具有完美安全性。（从概念上理解，这意味着从密文中无法获得任何关于明文的有效信息，因为对于任何一个可能的明文$m$，总能找到一个密钥$k=m \oplus c$使得加密后的密文恰好就是$c$。）遗憾的是如果一个加密算法想具有完美安全性，则必须有$|K| \geq |M|$，然而过长的密钥难以投入实际应用。（如果能保证密钥的安全传输，也就能保证明文的安全传输了）</X.P>
            <X.H1>伪随机数生成器PRG</X.H1>
            <X.P>为了使得一次性密码本加密算法能够实际应用，希望能使得密钥空间不至于过长。伪随机数生成器`(Pseudo Random Generator, PRG)`是一个函数{`$G:\\{0,1\\}^s\\rightarrow\\{0,1\\}^n$`}，其中$s$是种子长度，$n$是输出长度，$n \gg s$。</X.P>
            <X.H2>PRG的不可预测性</X.H2>
            <X.P>PRG的不可预测性是指：对于一个输出序列$G(k)$和任意一个中间位置$i$，已知$i$之前的序列{`$G(k)_{1\\dots i}$`}，都不存在一个多项式时间算法，能够概率不可忽略地预测出{`$G(k)_{i+1}$`}。（即{`$P \\gt \\frac{1}{2}+\\varepsilon$`}）</X.P>
            <X.H2>PRG的安全性</X.H2>
            <X.P>
                我们希望PRG的输出和一个真实的随机数（串）是“不可区分”的，也就是说希望对于{`$k\\stackrel{R}{\\longleftarrow}\\{0,1\\}^s$`}，{`$r\\stackrel{R}{\\longleftarrow}\\{0,1\\}^n$`}，$G(k)$与$r$是“不可区分”的。
            </X.P>
            <X.P>为了严格定义“不可区分”的含义，还要引入以下概念：</X.P>
            <X.Uli>
                <X.P>在{`$\\{0,1\\}^n$`}上的统计检验$A$：一个算法$A$，输入一个长度为$n$的二进制串，输出$0$或$1$。</X.P>
                <X.P>例如：输入串$x$，$A(x)=1$当且仅当$x$中$0$的数量与$1$的数量相差小于$10 \sqrt n$，其余为$0$。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>一个PRG对于统计检验$A$“优势”`(advantage)`：</X.P>
                <X.Formula text="Adv(A,G)=|P(A(G(k))=1)-P(A(r)=1)|" />
                <X.P>当$Adv$接近$1$，表明检验$A$能够区分PRG生成的伪随机数$G(k)$和真随机数$r$；反之同理。</X.P>
            </X.Uli>
            <X.P>现在，一个安全的PRG就可以定义为：$\forall A: Adv(A,G)$都是可以忽略不计的。</X.P>
            <X.H1>流密码</X.H1>
            <X.H2>概念</X.H2>
            <X.P>有了PRG以后，可以根据一个较短的密钥$k$生成一个较长的伪随机密钥流$G(k)$，然后就可以像一次性密码本那样，与消息进行逐比特异或进行加密，$c=m \oplus G(k)$。</X.P>
            <X.H2>RC4（代码实现）</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                def rc4_enc(message, key):
                    # 初始化并根据key打乱S盒
                    S = [i for i in range(256)]
                    j = 0
                    for i in range(256):
                        j = (j + S[i] + key[i % len(key)]) % 256
                        S[i], S[j] = S[j], S[i]
                    # 生成密文
                    i = 0
                    j = 0
                    res = []
                    for ch in message:
                        i = (i + 1) % 256
                        j = (j + S[i]) % 256
                        S[i], S[j] = S[j], S[i]
                        ch ^= S[(S[i] + S[j]) % 256]
                        res.append(ch)
                    return res


                def rc4_dec(cipher, key):
                    return rc4_enc(cipher, key)


                key = [0x63, 0x72, 0x79, 0x70, 0x74, 0x69, 0x69]
                message = "Hello RC4!"
                message = [ord(ch) for ch in message]

                cipher = rc4_enc(message, key)
                print([hex(i) for i in cipher])  # ['0x36', '0xcf', '0xf7', '0x81', '0xc6', '0xae', '0x83', '0x66', '0x67', '0xe2']

                decoded_message = rc4_dec(cipher, key)
                decoded_message = [chr(ch) for ch in decoded_message]
                print(decoded_message)  # ['H', 'e', 'l', 'l', 'o', ' ', 'R', 'C', '4', '!']
                `}
            />
        </>
    );
}
