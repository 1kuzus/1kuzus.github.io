import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24b/leetcode-4/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>
                    原题链接：@寻找两个正序数组的中位数[https://leetcode.cn/problems/median-of-two-sorted-arrays/description/]@
                </X.P>
            </X.HighlightBlock>
            <X.P>题目要求$\log$级别的算法，下面给出$O(\log \min(m,n))$的解法，和官方题解的思路不太相同。</X.P>
            <X.P noMarginBottom>我的思路基于两个观察：</X.P>
            <X.Oli>
                如果两个有序序列的中位数分别为$a$和$b$，那么合并后的序列的中位数一定在$a$和$b$（闭区间）之间。
            </X.Oli>
            <X.Oli>对于合并后的序列，同时删掉最小和最大的*相同数量*的元素，中位数不变。</X.Oli>
            <X.P withMarginTop>
                第二点是显然的。对于第一点，如果合并序列的中位数$c$同时大于$a$和$b$，那么原来两个序列中一定分别有多于半数的元素小于$c$，---
                此时合并序列中小于$c$的元素个数也一定多于半数，与中位数定义矛盾。
            </X.P>
            <X.P>
                基于上面两个观察，对短数组进行二分区间，同时也在长数组上维护一个区间，每次比较两个区间的中位数大小。---
                *假如短数组的中位数更大*，那么短数组取区间的左半部分，相当于*删掉了短数组右区间的`k`个元素*；此时要相应地---
                *删掉长数组左区间的`k`个元素*，以保证合并后的序列的中位数不变。
            </X.P>
            <X.P noMarginBottom>此解法的边界条件需要格外注意：</X.P>
            <X.Oli reset={1}>如果一方数组为空，则直接返回另一方的中位数。</X.Oli>
            <X.Oli>
                如果区间包含了偶数个元素，则中间两个元素都要保留，以保证正确性。对于部分情况相当于区间要额外包含一个元素进来。（高亮行）
            </X.Oli>
            <X.Oli>
                算法终止时，短数组区间长度可能是`1`或`2`个元素，最终的结果就是把这两个元素插入到长数组区间中，再取中位数。---
                为了保证效率，不去做插入，而是讨论长数组区间中位数附近的元素。
            </X.Oli>
            <X.P withMarginTop>
                注意上述第三点，假设长数组区间中位数情况为：`[... a m b ...]`或`[... a m1 m2 b
                ...]`，那么如果`a`和`b`存在（没越界）也要纳入考虑。这是因为如果短数组剩余的元素均小于`a`，则有可能中位数需要通过`a`和`m`（或`m1`）计算得到。---
                反之亦然。体现在代码中，短数组可能向`ans`贡献`1`或`2`个元素，长数组可能向`ans`贡献`1`~`4`个元素。最后对至多含有`6`个元素的`ans`排序取中位数即可。
            </X.P>
            <X.CodeBlock
                language="cpp"
                highlightLines="22"
                code={`
                class Solution {
                public:
                    double mid(vector<int>& arr)//返回数组中位数
                    {
                        return (arr[arr.size()/2]+arr[(arr.size()-1)/2])/2.0;
                    }
                    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
                        int m=nums1.size(),n=nums2.size();
                        if(m==0) return mid(nums2);
                        if(n==0) return mid(nums1);
                        if(n<m) return findMedianSortedArrays(nums2,nums1);
                        int l1=0,r1=m-1,l2=0,r2=n-1,m1,m2;
                        while(l1+1<r1)
                        {
                            m1=l1+(r1-l1)/2,m2=l2+(r2-l2)/2;
                            if(nums1[m1]+nums1[m1+(r1-l1)%2]<nums2[m2]+nums2[m2+(r2-l2)%2])
                            {
                                r2-=(m1-l1),l1=m1;
                            }
                            else
                            {
                                if((r1-l1+1)%2==0) m1++;
                                l2+=(r1-m1),r1=m1;
                            }
                        }
                        m2=l2+(r2-l2)/2;
                        bool flag=(r2-l2)%2;//长数组剩余部分是否为偶数个
                        vector<int> ans={nums1[l1],nums2[m2]};
                        if(r1!=l1) ans.emplace_back(nums1[r1]);//短数组长度为2
                        if(flag) ans.emplace_back(nums2[m2+1]);//长数组长度为偶数
                        if(0<=m2-1&&m2+1+flag<n)//中位数左、右一个元素均不越界
                        {
                            ans.emplace_back(nums2[m2-1]);
                            ans.emplace_back(nums2[m2+1+flag]);
                        }
                        sort(ans.begin(),ans.end());
                        return mid(ans);
                    }
                };
                `}
            />
        </>
    );
}
