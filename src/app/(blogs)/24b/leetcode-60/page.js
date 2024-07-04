import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/leetcode-60/';
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
                <X.P>原题链接：@排列序列[https://leetcode.cn/problems/permutation-sequence/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>数学找规律题目，逐位确定结果即可。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                class Solution {
                public:
                    string getPermutation(int n, int k) {
                        k--;//从0计数
                        string ans;
                        int fct[10]={1};
                        vector<int> nums;
                        for(int i=1;i<=n;i++)
                        {
                            nums.emplace_back(i);
                            fct[i]=fct[i-1]*i;
                        }
                        for(int i=n-1;i>0;i--)
                        {
                            int a=k/fct[i];
                            k%=fct[i];
                            ans+='0'+nums[a];
                            nums.erase(nums.begin()+a);
                        }
                        ans+='0'+nums[0];
                        return ans;
                    }
                };
                `}
            />
        </>
    );
}
