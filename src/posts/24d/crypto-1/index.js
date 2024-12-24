import X from 'src/component/X';

export default function Post() {
    return (
        <>
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
                可忽略不计：在密码学实践中，认为常数{`$\\varepsilon \\leq 1/2^{80}$`}是可以忽略不计`(negligible)`的，
                {`$\\varepsilon \\geq 1/2^{30}$`}是不可忽略`(non-negligible)`的（大于`1GB`数据就有可能发生）。
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
                $r_1,r_2,\dots,r_n \in U$是独立同分布的随机变量，则当{`$n=1.2 \\times \\sqrt{|U|}$`}时，
                {`$P(\\exists i \\neq j: r_i=r_j) \\geq \\frac{1}{2}$`}。
            </X.P>
            <X.H2>密码分析中的几种攻击模式</X.H2>
            <X.Uli>唯密文攻击`(Ciphertext Only Attack, COA)`：攻击者只能获得密文</X.Uli>
            <X.Uli>已知明文攻击`(Known Plaintext Attack, KPA)`：攻击者有一些密文并且知道相对应的明文</X.Uli>
            <X.Uli>选择明文攻击`(Chosen Plaintext Attack, CPA)`：攻击者可以选择一些明文，并从系统中获得相对应的密文</X.Uli>
            <X.Uli>选择密文攻击`(Chosen Ciphertext Attack, CCA)`：攻击者可以选择一些密文，并从系统中获得相对应的明文</X.Uli>
            <X.H1>一次性密码本与完美安全性</X.H1>
            <X.P>
                一次性密码本`(one-time pad)`的加密方式即：{`$M=C=K=\\{0,1\\}^n$`}
                ，密钥是与消息等长的随机串，加密过程为$c=m \oplus k$。
            </X.P>
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
            <X.P>
                为了使得一次性密码本加密算法能够实际应用，希望能使得密钥空间不至于过长。伪随机数生成器`(Pseudo Random Generator, PRG)`是一个函数{`$G:\\{0,1\\}^s\\rightarrow\\{0,1\\}^n$`}
                ，其中$s$是种子长度，$n$是输出长度，$n \gg s$。
            </X.P>
            <X.H2>PRG的不可预测性</X.H2>
            <X.P>
                PRG的不可预测性是指：对于一个输出序列$G(k)$和任意一个中间位置$i$，已知$i$之前的序列
                {`$G(k)_{1\\dots i}$`}，都不存在一个多项式时间算法，能够概率不可忽略地预测出{`$G(k)_{i+1}$`}。（即
                {`$P \\gt \\frac{1}{2}+\\varepsilon$`}）
            </X.P>
            <X.H2>PRG的安全性</X.H2>
            <X.P>
                我们希望PRG的输出和一个真实的随机数（串）是“不可区分”的，也就是说希望对于
                {`$k\\stackrel{R}{\\longleftarrow}\\{0,1\\}^s$`}，{`$r\\stackrel{R}{\\longleftarrow}\\{0,1\\}^n$`}
                ，$G(k)$与$r$是“不可区分”的。
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
            <X.H2>不可预测性与安全性的关系</X.H2>
            <X.HighlightBlock>
                <X.P>结论：二者是等价的，一个PRG是安全的当且仅当它是不可预测的。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="red">
                <X.P>不可预测性的定义会让人怀疑这是不是太弱了：如果不是能用前缀预测下一位，而是能用后缀预测上一位、能用其他位预测中间位、或者甚至其他某种可利用的统计学特性呢？</X.P>
                <X.P>安全性的定义则相对来说更直观一些。当然事实上二者已经被证明是等价的，如果用前缀预测做统计检验无法区别一个PRG和真随机数，则任何统计检验都不能。</X.P>
            </X.HighlightBlock>
            <X.H3>安全的PRG是不可预测的</X.H3>
            <X.P>即：可预测的PRG是不安全的。这是比较容易证明的，可以构造一个统计检验$A$：</X.P>
            <X.Formula text="A(x)=1 \; \text{if} \; pred(x_{i+1})=x_{i+1}, \; \text{else} \; 0" />
            <X.P>显然可预测就意味着$Adv$是不可忽略的，因此PRG是不安全的。</X.P>
            <X.H3>不可预测的PRG是安全的</X.H3>
            <X.P>证明起来复杂一点，可以参考@[https://www.noahsd.com/crypto_lecture_notes/CS4830_Lecture_7____PRGs.pdf]@的`1.3`节，这里贴出截图：</X.P>
            <X.Image src="fig1.jpg" width="800px" filterDarkTheme />
            <X.Image src="fig2.jpg" width="800px" filterDarkTheme />
            <X.H1>流密码</X.H1>
            <X.H2>概念</X.H2>
            <X.P>有了PRG以后，可以根据一个较短的密钥$k$生成一个较长的伪随机密钥流$G(k)$，然后就可以像一次性密码本那样，与消息进行逐比特异或进行加密，$c=m \oplus G(k)$。</X.P>
            <X.P>流密码是*对称加密算法*，这意味着加密和解密使用的是同一个密钥。</X.P>
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
            <X.H1>练习题</X.H1>
            <X.H2>先压缩还是先加密？</X.H2>
            <X.P>如题，假如想在传输数据时同时应用压缩和加密，则应该*先压缩后加密*。因为压缩本来就是利用信息冗余，而如果先加密，生成的密文近似随机，则很难再有压缩空间。</X.P>
            <X.H2>编程作业</X.H2>
            <X.P>使用同一个流密码密钥多次加密存在安全隐患。给出了以下`11`个密文：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                ciphers = [
                    "315c4eeaa8b5f8aaf9174145bf43e1784b8fa00dc71d885a804e5ee9fa40b16349c146fb778cdf2d3aff021dfff5b403b510d0d0455468aeb98622b137dae857553ccd8883a7bc37520e06e515d22c954eba5025b8cc57ee59418ce7dc6bc41556bdb36bbca3e8774301fbcaa3b83b220809560987815f65286764703de0f3d524400a19b159610b11ef3e",
                    "234c02ecbbfbafa3ed18510abd11fa724fcda2018a1a8342cf064bbde548b12b07df44ba7191d9606ef4081ffde5ad46a5069d9f7f543bedb9c861bf29c7e205132eda9382b0bc2c5c4b45f919cf3a9f1cb74151f6d551f4480c82b2cb24cc5b028aa76eb7b4ab24171ab3cdadb8356f",
                    "32510ba9a7b2bba9b8005d43a304b5714cc0bb0c8a34884dd91304b8ad40b62b07df44ba6e9d8a2368e51d04e0e7b207b70b9b8261112bacb6c866a232dfe257527dc29398f5f3251a0d47e503c66e935de81230b59b7afb5f41afa8d661cb",
                    "32510ba9aab2a8a4fd06414fb517b5605cc0aa0dc91a8908c2064ba8ad5ea06a029056f47a8ad3306ef5021eafe1ac01a81197847a5c68a1b78769a37bc8f4575432c198ccb4ef63590256e305cd3a9544ee4160ead45aef520489e7da7d835402bca670bda8eb775200b8dabbba246b130f040d8ec6447e2c767f3d30ed81ea2e4c1404e1315a1010e7229be6636aaa",
                    "3f561ba9adb4b6ebec54424ba317b564418fac0dd35f8c08d31a1fe9e24fe56808c213f17c81d9607cee021dafe1e001b21ade877a5e68bea88d61b93ac5ee0d562e8e9582f5ef375f0a4ae20ed86e935de81230b59b73fb4302cd95d770c65b40aaa065f2a5e33a5a0bb5dcaba43722130f042f8ec85b7c2070",
                    "32510bfbacfbb9befd54415da243e1695ecabd58c519cd4bd2061bbde24eb76a19d84aba34d8de287be84d07e7e9a30ee714979c7e1123a8bd9822a33ecaf512472e8e8f8db3f9635c1949e640c621854eba0d79eccf52ff111284b4cc61d11902aebc66f2b2e436434eacc0aba938220b084800c2ca4e693522643573b2c4ce35050b0cf774201f0fe52ac9f26d71b6cf61a711cc229f77ace7aa88a2f19983122b11be87a59c355d25f8e4",
                    "32510bfbacfbb9befd54415da243e1695ecabd58c519cd4bd90f1fa6ea5ba47b01c909ba7696cf606ef40c04afe1ac0aa8148dd066592ded9f8774b529c7ea125d298e8883f5e9305f4b44f915cb2bd05af51373fd9b4af511039fa2d96f83414aaaf261bda2e97b170fb5cce2a53e675c154c0d9681596934777e2275b381ce2e40582afe67650b13e72287ff2270abcf73bb028932836fbdecfecee0a3b894473c1bbeb6b4913a536ce4f9b13f1efff71ea313c8661dd9a4ce",
                    "315c4eeaa8b5f8bffd11155ea506b56041c6a00c8a08854dd21a4bbde54ce56801d943ba708b8a3574f40c00fff9e00fa1439fd0654327a3bfc860b92f89ee04132ecb9298f5fd2d5e4b45e40ecc3b9d59e9417df7c95bba410e9aa2ca24c5474da2f276baa3ac325918b2daada43d6712150441c2e04f6565517f317da9d3",
                    "271946f9bbb2aeadec111841a81abc300ecaa01bd8069d5cc91005e9fe4aad6e04d513e96d99de2569bc5e50eeeca709b50a8a987f4264edb6896fb537d0a716132ddc938fb0f836480e06ed0fcd6e9759f40462f9cf57f4564186a2c1778f1543efa270bda5e933421cbe88a4a52222190f471e9bd15f652b653b7071aec59a2705081ffe72651d08f822c9ed6d76e48b63ab15d0208573a7eef027",
                    "466d06ece998b7a2fb1d464fed2ced7641ddaa3cc31c9941cf110abbf409ed39598005b3399ccfafb61d0315fca0a314be138a9f32503bedac8067f03adbf3575c3b8edc9ba7f537530541ab0f9f3cd04ff50d66f1d559ba520e89a2cb2a83"
                ]

                # target:
                target = "32510ba9babebbbefd001547a810e67149caee11d945cd7fc81a05e9f85aac650e9052ba6a8cd8257bf14d13e6f0a803b54fde9e77472dbff89d71b57bddef121336cb85ccb8f3315f4b52e301d16e9f52f904"
                `}
            />
            <X.P>已知这些密文都是使用同一个密钥进行的加密，加密的方法是直接异或（就是一次性密码本），这里密钥足够长，对于每条明文，只取与明文等长的密钥前缀进行加密。（后面的讨论中对于串长度不同的情况，也默认以最短的为准。）目标是求出最后一条密文`target`对应的明文。</X.P>
            <X.P>当两条消息使用相同的密钥$k$进行加密时，由于$c_1=m_1 \oplus k$，$c_2=m_2 \oplus k$，则有：</X.P>
            <X.Formula text="c_1 \oplus c_2 = m_1 \oplus m_2" />
            <X.P>考虑两个ASCII字符异或的结果，ASCII字符存在一些特性：</X.P>
            <X.Uli>英文字母的ASCII码值大于`64`，也就是第`7`位（倒数第`2`高位）一定是`1`；</X.Uli>
            <X.Uli>同一英文字母，大小写的ASCII码值差`32`（翻转第`6`位）；</X.Uli>
            <X.Uli>空格的ASCII码值刚好是`32`，因此字符异或空格的结果相当于翻转大小写；</X.Uli>
            <X.Uli>字符异或字符的值小于`64`，字符异或空格的值大于`64`。</X.Uli>
            <X.P>根据上述规律，思想是将`target`与前`10`条密文分别异或，如果结果大于`64`，则有可能泄露`target`在这一位上的字符。不过消息明文中可能含有特殊符号或者非英文字符干扰结果，例如ASCII码值小于`64`的英文标点与字符异或后也会结果大于`64`，因此要根据统计结果综合判断。</X.P>
            <X.P>首先为了方便编程，先把字符串密文逐字节转成列表：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                def cipher_to_byte_list(cipher):
                    return [int(cipher[i:i + 2], 16) for i in range(0, len(cipher), 2)]


                ciphers = [cipher_to_byte_list(c) for c in ciphers]
                target = cipher_to_byte_list(target)
                `}
            />
            <X.P>然后编写`leak`函数，统计每一位`i`上，`target[i]`与`cipher[i]`异或的结果，大于等于`64`则保存下来（保存的时候再次异或`32`，记录原始的字符）：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                stats = [[] for _ in range(len(target))]


                def leak(cipher):
                    for i in range(len(target)):  # target是最短的，这里直接用len(target)即可
                        if target[i] ^ cipher[i] >= 64:
                            stats[i].append(cipher[i] ^ target[i] ^ ord(' '))


                for cipher in ciphers:
                    leak(cipher)
                `}
            />
            <X.P>当异或结果大于等于`64`时有以下几种情况：</X.P>
            <X.Uli>`target[i]`是字符，`cipher[i]`是空格，此时通常`stats[i]`中会有`1`~`3`个相同的值，这个值就是`target[i]`的明文字符；</X.Uli>
            <X.Uli>`target[i]`是空格，`cipher[i]`是字符，通常只有这种情况下`stats[i]`的长度比较长，并且值各不相同，因为同一个位置出现字符的概率显然更大；</X.Uli>
            <X.Uli>出现了特殊字符，此时可能会干扰结果，因此通过取众数来决定结果；</X.Uli>
            <X.CodeBlock
                language="python"
                code={`
                def mode(ls):  # 求数组ls的众数
                    return max(set(ls), key=ls.count)


                message = ""
                for stats_ch in stats:
                    if len(stats_ch) > 5:
                        message += "."
                    else:
                        m = mode(stats_ch)
                        if len(stats_ch) == 1 or stats_ch.count(m) > 1:
                            message += chr(m)
                        else:
                            ch = "?"
                            for c in stats_ch:
                                if 65 <= c <= 90 or 97 <= c <= 122:
                                    ch = chr(c)
                            message += ch

                print(message)  # The.secuet.message.is..Whtn.usinw.asstream.cipher..never.use.the.key.more.than.once
                `}
            />
            <X.P>最后还需要手动修正一些字符，最后猜测的明文为：</X.P>
            <X.CodeBlock language="text" code="The secret message is: When using a stream cipher, never use the key more than once" />
            <X.Divider />
            <X.P>到这里已经做完了，但还可以通过恢复的明文进一步反求出`ciphers`中的原始消息，观察为何求出的`target`的部分位置会有错误：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                message = "The secret message is: When using a stream cipher, never use the key more than once"  # 个别字符需要根据上下文推测一下

                # 反推一下其他十个密文，长度只取到len(target)
                print("-" * 10, "The other ten messages are:", "-" * 10)
                message = [ord(ch) for ch in message]
                key = [message[i] ^ target[i] for i in range(len(target))]
                for cipher in ciphers:
                    text = [cipher[i] ^ key[i] for i in range(len(key))]
                    print("".join([chr(ch) for ch in text]))
                `}
            />
            <X.P>结果为：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                ---------- The other ten messages are: ----------
                We can factor the number 15 with quantum computers. We can also factor the number 1
                Euler would probably enjoy that now his theorem becomes a corner stone of crypto - 
                The nice thing about Keeyloq is now we cryptographers can drive a lot of fancy cars
                The ciphertext produced by a weak encryption algorithm looks as good as ciphertext 
                You don't want to buy a set of car keys from a guy who specializes in stealing cars
                There are two types of cryptography - that which will keep secrets safe from your l
                There are two types of cyptography: one that allows the Government to use brute for
                We can see the point where the chip is unhappy if a wrong bit is sent and consumes 
                A (private-key)  encryption scheme states 3 algorithms, namely a procedure for gene
                The Concise OxfordDictionary (2006) deï¬nes crypto as the art of  writing o r sol
                `}
            />
            <X.P>完整代码：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                ciphers = [
                    "315c4eeaa8b5f8aaf9174145bf43e1784b8fa00dc71d885a804e5ee9fa40b16349c146fb778cdf2d3aff021dfff5b403b510d0d0455468aeb98622b137dae857553ccd8883a7bc37520e06e515d22c954eba5025b8cc57ee59418ce7dc6bc41556bdb36bbca3e8774301fbcaa3b83b220809560987815f65286764703de0f3d524400a19b159610b11ef3e",
                    "234c02ecbbfbafa3ed18510abd11fa724fcda2018a1a8342cf064bbde548b12b07df44ba7191d9606ef4081ffde5ad46a5069d9f7f543bedb9c861bf29c7e205132eda9382b0bc2c5c4b45f919cf3a9f1cb74151f6d551f4480c82b2cb24cc5b028aa76eb7b4ab24171ab3cdadb8356f",
                    "32510ba9a7b2bba9b8005d43a304b5714cc0bb0c8a34884dd91304b8ad40b62b07df44ba6e9d8a2368e51d04e0e7b207b70b9b8261112bacb6c866a232dfe257527dc29398f5f3251a0d47e503c66e935de81230b59b7afb5f41afa8d661cb",
                    "32510ba9aab2a8a4fd06414fb517b5605cc0aa0dc91a8908c2064ba8ad5ea06a029056f47a8ad3306ef5021eafe1ac01a81197847a5c68a1b78769a37bc8f4575432c198ccb4ef63590256e305cd3a9544ee4160ead45aef520489e7da7d835402bca670bda8eb775200b8dabbba246b130f040d8ec6447e2c767f3d30ed81ea2e4c1404e1315a1010e7229be6636aaa",
                    "3f561ba9adb4b6ebec54424ba317b564418fac0dd35f8c08d31a1fe9e24fe56808c213f17c81d9607cee021dafe1e001b21ade877a5e68bea88d61b93ac5ee0d562e8e9582f5ef375f0a4ae20ed86e935de81230b59b73fb4302cd95d770c65b40aaa065f2a5e33a5a0bb5dcaba43722130f042f8ec85b7c2070",
                    "32510bfbacfbb9befd54415da243e1695ecabd58c519cd4bd2061bbde24eb76a19d84aba34d8de287be84d07e7e9a30ee714979c7e1123a8bd9822a33ecaf512472e8e8f8db3f9635c1949e640c621854eba0d79eccf52ff111284b4cc61d11902aebc66f2b2e436434eacc0aba938220b084800c2ca4e693522643573b2c4ce35050b0cf774201f0fe52ac9f26d71b6cf61a711cc229f77ace7aa88a2f19983122b11be87a59c355d25f8e4",
                    "32510bfbacfbb9befd54415da243e1695ecabd58c519cd4bd90f1fa6ea5ba47b01c909ba7696cf606ef40c04afe1ac0aa8148dd066592ded9f8774b529c7ea125d298e8883f5e9305f4b44f915cb2bd05af51373fd9b4af511039fa2d96f83414aaaf261bda2e97b170fb5cce2a53e675c154c0d9681596934777e2275b381ce2e40582afe67650b13e72287ff2270abcf73bb028932836fbdecfecee0a3b894473c1bbeb6b4913a536ce4f9b13f1efff71ea313c8661dd9a4ce",
                    "315c4eeaa8b5f8bffd11155ea506b56041c6a00c8a08854dd21a4bbde54ce56801d943ba708b8a3574f40c00fff9e00fa1439fd0654327a3bfc860b92f89ee04132ecb9298f5fd2d5e4b45e40ecc3b9d59e9417df7c95bba410e9aa2ca24c5474da2f276baa3ac325918b2daada43d6712150441c2e04f6565517f317da9d3",
                    "271946f9bbb2aeadec111841a81abc300ecaa01bd8069d5cc91005e9fe4aad6e04d513e96d99de2569bc5e50eeeca709b50a8a987f4264edb6896fb537d0a716132ddc938fb0f836480e06ed0fcd6e9759f40462f9cf57f4564186a2c1778f1543efa270bda5e933421cbe88a4a52222190f471e9bd15f652b653b7071aec59a2705081ffe72651d08f822c9ed6d76e48b63ab15d0208573a7eef027",
                    "466d06ece998b7a2fb1d464fed2ced7641ddaa3cc31c9941cf110abbf409ed39598005b3399ccfafb61d0315fca0a314be138a9f32503bedac8067f03adbf3575c3b8edc9ba7f537530541ab0f9f3cd04ff50d66f1d559ba520e89a2cb2a83"
                ]

                # target:
                target = "32510ba9babebbbefd001547a810e67149caee11d945cd7fc81a05e9f85aac650e9052ba6a8cd8257bf14d13e6f0a803b54fde9e77472dbff89d71b57bddef121336cb85ccb8f3315f4b52e301d16e9f52f904"


                def cipher_to_byte_list(cipher):
                    return [int(cipher[i:i + 2], 16) for i in range(0, len(cipher), 2)]


                ciphers = [cipher_to_byte_list(c) for c in ciphers]
                target = cipher_to_byte_list(target)

                stats = [[] for _ in range(len(target))]


                def leak(cipher):
                    for i in range(len(target)):  # target是最短的，这里直接用len(target)即可
                        if target[i] ^ cipher[i] >= 64:
                            stats[i].append(cipher[i] ^ target[i] ^ ord(' '))


                for cipher in ciphers:
                    leak(cipher)


                def mode(ls):  # 求数组ls的众数
                    return max(set(ls), key=ls.count)


                message = ""
                for stats_ch in stats:
                    if len(stats_ch) > 5:
                        message += "."
                    else:
                        m = mode(stats_ch)
                        if len(stats_ch) == 1 or stats_ch.count(m) > 1:
                            message += chr(m)
                        else:
                            ch = "?"
                            for c in stats_ch:
                                if 65 <= c <= 90 or 97 <= c <= 122:
                                    ch = chr(c)
                            message += ch

                print(message)  # The.secuet.message.is..Whtn.usinw.asstream.cipher..never.use.the.key.more.than.once
                message = "The secret message is: When using a stream cipher, never use the key more than once"  # 个别字符需要根据上下文推测一下

                # 反推一下其他十个密文，长度只取到len(target)
                print("-" * 10, "The other ten messages are:", "-" * 10)
                message = [ord(ch) for ch in message]
                key = [message[i] ^ target[i] for i in range(len(target))]
                for cipher in ciphers:
                    text = [cipher[i] ^ key[i] for i in range(len(key))]
                    print("".join([chr(ch) for ch in text]))
                `}
            />
        </>
    );
}
