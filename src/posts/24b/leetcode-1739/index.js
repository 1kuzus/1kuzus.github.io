import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@放置盒子[https://leetcode.cn/problems/building-boxes/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>数学找规律题目，我推出了$O(1)$的函数$f(i)$，表示最下层有$i$个盒子时，最大的可能总盒子数。然而题目是想反求，因此可以使用二分。</X.P>
            <X.P>二分的复杂度为$\log$级别，有更优雅的整体复杂度为常数的数学解法，可以参考官方题解。</X.P>
            <X.Divider />
            <X.P>不过，我们可以考虑使用不精确的数学方法优化二分的初始区间，考虑对$f(i)$进行放缩。</X.P>
            <X.Formula text="f(i) \gt \frac{2i \cdot \frac{\sqrt{8i}}{2}}{6}=\frac{\sqrt 2}{3} i^{1.5}" />
            <X.P>推导过程就省略了，然后反解得到：</X.P>
            <X.Formula text="i \lt (\frac{3}{\sqrt 2} f(i))^{2/3} \lt (2.13 \cdot f(i))^{2/3}" />
            <X.P>这是对区间右端的近似。同样对于区间左端，可以在$n$足够大时保证：</X.P>
            <X.Formula text="i \gt (2 \cdot f(i))^{2/3}" />
            <X.P>这里对常数的选取是较为随意的。经过这个优化可以把二分区间压缩到非常小的范围。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                class Solution {
                public:
                    int f(int i)
                    {
                        int a=-0.5+sqrt(1+8*i)/2;
                        int b=i-a*(a+1)/2+1;
                        int c=b*(b+1)/2;
                        return (long long)a*(a+1)*(a+2)/6+c;
                    }
                    int minimumBoxes(int n) {
                        //int l=0,r=pow(2.13*n,2.0/3);
                        int l=n<500?0:pow(2*n,2.0/3),r=pow(2.13*n,2.0/3);//更紧的约束
                        while(l+1<r)
                        {
                            int mid=l+(r-l)/2;
                            if(f(mid-1)>=n) r=mid;
                            else l=mid;
                        }
                        return r;
                    }
                };
                `}
            />
        </>
    );
}
