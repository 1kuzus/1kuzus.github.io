import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/leetcode-312/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.HighlightBlock>
                <X.P>原题链接：@戳气球[https://leetcode.cn/problems/burst-balloons/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>
                区间DP，假设`dp[l][r]`表示戳破开区间$(l,r)$内的气球获得的最大硬币数。由于边界视作数值为`1`的气球，---
                给数组`nums`的首尾都插入`1`，最后的答案也恰好是`dp[0][n+1]`（根据定义，不包含插入的两个端点）。
            </X.P>
            <X.P>转移方程为：</X.P>
            <X.Formula text="dp(l,r)=\max_{l \lt m \lt r}dp(l,m)+dp(m,r)+nums(l) \times nums(m) \times nums(r)" />
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 305
                class Solution {
                public:
                    int maxCoins(vector<int>& nums) {
                        int n=nums.size();//在首尾插入1之前，数组的原始长度
                        int dp[N][N]={};//dp[l][r]表示戳破(l,r)开区间所有气球获得的最大硬币数
                        nums.emplace_back(1);
                        nums.emplace(nums.begin(),1);
                        for(int d=2;d<=n+1;d++)//枚举区间长度
                        {
                            for(int l=0;l+d<=n+1;l++)//左端点
                            {
                                int r=l+d;
                                for(int m=l+1;m<=r-1;m++)//分割点
                                {
                                    dp[l][r]=max(
                                        dp[l][r],
                                        dp[l][m]+dp[m][r]+nums[l]*nums[m]*nums[r]
                                    );
                                }
                            }
                        }
                        return dp[0][n+1];
                    }
                };
                `}
            />
        </>
    );
}
