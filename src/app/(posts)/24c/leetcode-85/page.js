import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/leetcode-85/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>原题链接：@最大矩形[https://leetcode.cn/problems/maximal-rectangle/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>本题思路基于@柱状图中最大的矩形[/24b/leetcode-84/]@。考虑样例：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                1 0 1 0 0
                1 0 1 1 1
                1 1 1 1 1
                1 0 0 1 0
                `}
            />
            <X.P>我们求出数组`heights_of_line`，`heights_of_line[i]`代表以第`i`行为底的柱状图`heights`数组。对于上述样例，`heights_of_line`为：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                1 0 1 0 0
                2 0 2 1 1
                3 1 3 2 2
                4 0 0 3 0
                `}
            />
            <X.P>对于每一行，我们都可以求出最大矩形面积，最后统计最大值即可。这里的`largestRectangleArea`函数就是@柱状图中最大的矩形[/24b/leetcode-84/]@的解。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 205
                class Solution {
                public:
                    //求arr中元素左边第一个更小元素的下标，保存到left
                    void getLeft(vector<int> &arr,vector<int> &left)
                    {
                        int n=arr.size();
                        int st[N],top=-1;
                        for(int i=0;i<n;i++)
                        {
                            while(top>=0&&arr[st[top]]>arr[i])
                            {
                                top--;
                            }
                            if(top>=0) left[i]=st[top];
                            top++,st[top]=i;
                        }
                        return;
                    }
                    //求arr中元素右边第一个更小元素的下标，保存到right
                    void getRight(vector<int> &arr,vector<int> &right)
                    {
                        int n=arr.size();
                        int st[N],top=-1;
                        for(int i=0;i<n;i++)
                        {
                            while(top>=0&&arr[st[top]]>arr[i])
                            {
                                right[st[top]]=i,top--;
                            }
                            top++,st[top]=i;
                        }
                        return;
                    }
                    int largestRectangleArea(vector<int> &heights)
                    {
                        heights.emplace(heights.begin(),0);
                        heights.emplace_back(0);
                        int ans=0,n=heights.size();
                        vector<int> l(n),r(n);
                        getLeft(heights,l);
                        getRight(heights,r);
                        for(int i=0;i<n;i++)
                        {
                            ans=max(ans,heights[i]*(r[i]-l[i]-1));
                        }
                        return ans;
                    }
                    int maximalRectangle(vector<vector<char>>& matrix) {
                        int ans=0;
                        int n=matrix.size(),m=matrix[0].size();//n行m列
                        //求出第i层（以第i行为底）的柱状图高度序列
                        vector<vector<int>> heights_of_line(n,vector<int>(m));
                        for(int i=0;i<n;i++)
                        {
                            for(int j=0;j<m;j++)
                            {
                                if(i==0) heights_of_line[i][j]=(matrix[i][j]=='1');
                                else if(matrix[i][j]=='1') heights_of_line[i][j]=heights_of_line[i-1][j]+1;
                                else heights_of_line[i][j]=0;
                            }
                        }
                        for(int i=0;i<n;i++) ans=max(ans,largestRectangleArea(heights_of_line[i]));
                        return ans;
                    }
                };
                `}
            />
        </>
    );
}
