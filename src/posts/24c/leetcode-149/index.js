import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@直线上最多的点数[https://leetcode.cn/problems/max-points-on-a-line/description/]@</X.P>
            </X.HighlightBlock>
            <X.H1>暴力</X.H1>
            <X.P>遍历每一对点，一对点确定一条直线，第三层循环再次遍历所有点判断是否在此直线上。判断$(x_3,y_3)$是否在$(x_1,y_1)$和$(x_2,y_2)$的连线上，只需要判断斜率：</X.P>
            <X.Formula text="\frac{y_3-y_1}{x_3-x_1}=\frac{y_3-y_2}{x_3-x_2}" />
            <X.P>为避免除法精度问题，转为乘法判断：</X.P>
            <X.Formula text="(y_3-y_1)(x_3-x_2)=(y_3-y_2)(x_3-x_1)" />
            <X.P>时间复杂度为$O(n^3)$。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                /**
                 * @param {number[][]} points
                 * @return {number}
                 */
                var maxPoints = function(points) {
                    const n=points.length;
                    let ans=1;
                    for(let i=0;i<n;i++)
                    {
                        for(let j=i+1;j<n;j++)
                        {
                            const [x1,y1]=points[i];
                            const [x2,y2]=points[j];
                            let cnt=0;
                            for(let k=0;k<n;k++)
                            {
                                const [x3,y3]=points[k];
                                if((y3-y1)*(x3-x2)===(y3-y2)*(x3-x1)) cnt++;
                            }
                            ans=Math.max(ans,cnt);
                        }
                    }
                    return ans;
                };
                `}
            />
            <X.H1>哈希</X.H1>
            <X.P>考虑对于每一个点，遍历其他点，以斜率做键，统计每个斜率对应的点数。这样对于每一个点都能得到“过该点的直线最多经过的点数”，最后的答案就是对每个点的结果再取最大值。为了保证斜率唯一，用约分后的两点的$dx$、$dy$作为键值。</X.P>
            <X.P>`frac`函数用于约分得到最简化分数：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const gcd = (x, y) => (y ? gcd(y, x % y) : x);
                const frac = (x, y) => ([x / gcd(x, y), y / gcd(x, y)]);
                `}
            />
            <X.P>代码如下，时间复杂度为$O(n^2)$。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                /**
                 * @param {number[][]} points
                 * @return {number}
                 */

                const gcd = (x, y) => (y ? gcd(y, x % y) : x);
                const frac = (x, y) => ([x / gcd(x, y), y / gcd(x, y)]);

                var maxPoints = function (points) {
                    const n = points.length;
                    let ans = 0;
                    for (let i = 0; i < n; i++) {
                        const mp = {};
                        for (let j = i + 1; j < n; j++) {
                            const [x1, y1] = points[i];
                            const [x2, y2] = points[j];
                            const key = frac(y2 - y1, x2 - x1);
                            mp[key] = (mp[key] || 0) + 1;
                        }
                        ans = Math.max(...Object.values(mp), ans);
                    }
                    return ans + 1;
                };
                `}
            />
        </>
    );
}
