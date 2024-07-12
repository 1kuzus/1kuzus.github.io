import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24b/leetcode-84/';
export const {metadata} = metas[path];

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>
                    原题链接：@柱状图中最大的矩形[https://leetcode.cn/problems/largest-rectangle-in-histogram/description/]@
                </X.P>
            </X.HighlightBlock>
            <X.P>
                基本的思路是，对于每一个柱子，向左右两侧分别找到第一个高度小于自己的“边界”，求出当前柱子能延伸到的最大矩形面积，最后的答案就是其中的最大值。
            </X.P>
            <X.P>
                使用单调栈可以在$O(n)$时间内分别求出左边/右边第一个更小元素的下标，做好预处理后再$O(n)$地求最大值即可。---
                实际求解时，为了方便处理边界情况，在原数组两端各加一个高度为`0`的柱子。
            </X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 100005
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
                    int largestRectangleArea(vector<int>& heights) {
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
                };
                `}
            />
        </>
    );
}
