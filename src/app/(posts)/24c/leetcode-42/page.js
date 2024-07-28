import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/leetcode-42/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>原题链接：@接雨水[https://leetcode.cn/problems/trapping-rain-water/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>维护一个单调递减栈（存放下标），考虑入栈元素$i$对应的高度$h_i$，大于等于栈顶元素$t$对应的高度$h_t$的情况，此时需要出栈：\n如果栈中仅剩一个元素，那么无法形成凹槽，直接$t$出栈，$i$入栈；\n如果栈中有多个元素，记$t$左侧的元素为$l$，则弹出$t$时要累计$l$和$i$之间的额外矩形“存水量”，这个矩形的高度为$\min(h_l,h_i)-h_t$，宽度为$i-l-1$。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #define N 20005
                class Solution {
                public:
                    int trap(vector<int>& height) {
                        int ans=0,n=height.size();
                        int st[N],top=-1;
                        for(int i=0;i<n;i++)
                        {
                            while(top>=0&&height[st[top]]<=height[i])
                            {
                                top--;
                                if(top>=0)
                                {
                                    int h=min(height[st[top]],height[i])-height[st[top+1]];
                                    int w=i-st[top]-1;
                                    ans+=w*h;
                                }
                            }
                            top++,st[top]=i;
                        }
                        return ans;
                    }
                };
                `}
            />
        </>
    );
}
