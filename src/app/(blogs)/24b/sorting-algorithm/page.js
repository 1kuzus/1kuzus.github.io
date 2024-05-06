import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/sorting-algorithm/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1>汇总&前言</X.H1>
            <X.Table>
                <tr>
                    <th rowSpan={7}>
                        <X.P>基于\n比较</X.P>
                    </th>
                    <th rowSpan={3}>
                        <X.P>基于\n比较</X.P>
                    </th>
                    <th>算法名称</th>
                    <th>平均时间</th>
                    <th>最好情况</th>
                    <th>最坏情况</th>
                    <th>空间</th>
                    <th>是否稳定</th>
                </tr>
                <tr>
                    <td>冒泡排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>选择排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>冒泡排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>冒泡排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>冒泡排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>冒泡排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>是</td>
                </tr>
                {/* 
                冒泡排序
                选择排序
                插入排序
                希尔排序
                归并排序
                快速排序
                堆排序
                计数排序
                桶排序
                基数排序

                */}
            </X.Table>
            <X.P>
                本文会给出所有排序算法（从小到大升序排列）的代码实现，代码可以直接提交到@洛谷 -
                P1177【模板】排序[https://www.luogu.com.cn/problem/P1177]@测试，其中的`sortArray`函数可以提交到@力扣 -
                912.排序数组[https://leetcode.cn/problems/sort-an-array/description/]@。
            </X.P>
            <X.P>注意两个网站的数据和环境都不一样，二者的时间横向比较没有可比性。</X.P>
            <X.H1>冒泡排序</X.H1>
            <X.P>每次把最大的元素冒泡到最后一位。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortArray(vector<int> &nums)
                {
                    for(int end=nums.size()-1;end>0;end--)
                    {
                        for(int i=0;i<end;i++)
                        {
                            if(nums[i+1]<nums[i])
                            {
                                int tmp=nums[i];
                                nums[i]=nums[i+1];
                                nums[i+1]=tmp;
                            }
                        }
                    }
                    return nums;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    int n;
                    cin>>n;
                    vector<int> nums(n);
                    for(int i=0;i<n;i++)
                    {
                        cin>>nums[i];
                    }
                    sortArray(nums);
                    for(int i=0;i<n;i++)
                    {
                        cout<<nums[i]<<' ';
                    }
                    return 0;
                }
                `}
            />
            <X.P>测试结果：洛谷通过`1`/`5`；力扣通过`10`/`21`。</X.P>
            <X.H1>选择排序</X.H1>
            <X.P>每次从未排序序列中找出最小的元素，放到已排序序列的末尾。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortArray(vector<int> &nums)
                {
                    for(int i=0;i<nums.size();i++)
                    {
                        int min_id=i;
                        for(int j=i+1;j<nums.size();j++)
                        {
                            if(nums[j]<nums[min_id])
                            {
                                min_id=j;
                            }
                        }
                        int tmp=nums[i];
                        nums[i]=nums[min_id];
                        nums[min_id]=tmp;
                    }
                    return nums;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    int n;
                    cin>>n;
                    vector<int> nums(n);
                    for(int i=0;i<n;i++)
                    {
                        cin>>nums[i];
                    }
                    sortArray(nums);
                    for(int i=0;i<n;i++)
                    {
                        cout<<nums[i]<<' ';
                    }
                    return 0;
                }
                `}
            />
            <X.P>测试结果：洛谷通过`1`/`5`；力扣通过`11`/`21`。</X.P>
            <X.H1>插入排序</X.H1>
            <X.P>每次把未排序序列的第一个元素，插入到已排序序列中。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortArray(vector<int> &nums)
                {
                    for(int i=0;i<nums.size();i++)
                    {
                        int j,k=nums[i];//未排序序列第一个元素 
                        for(j=i-1;j>=0&&nums[j]>k;j--)
                        {
                            nums[j+1]=nums[j];//大于k的数都右移一位 
                        }
                        nums[j+1]=k;
                    }
                    return nums;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    int n;
                    cin>>n;
                    vector<int> nums(n);
                    for(int i=0;i<n;i++)
                    {
                        cin>>nums[i];
                    }
                    sortArray(nums);
                    for(int i=0;i<n;i++)
                    {
                        cout<<nums[i]<<' ';
                    }
                    return 0;
                }
                `}
            />
            <X.P>测试结果：洛谷通过`3`/`5`；力扣通过`16`/`21`。</X.P>
            <X.HighlightBlock>
                <X.P>在数组基本有序的情况下，插入排序的效率是非常高的。</X.P>
            </X.HighlightBlock>
            <X.H1>希尔排序</X.H1>
            <X.P>希尔排序每次将相隔`gap`的元素分为一组，对每一组进行插入排序，然后逐渐减半`gap`的值，直到`gap=1`。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortArray(vector<int> &nums)
                {
                    for(int gap=nums.size()/2;gap>0;gap>>=1)
                    {
                        for(int i=gap;i<nums.size();i++)
                        {
                            int j,k=nums[i];
                            for(j=i-gap;j>=0&&nums[j]>k;j-=gap)
                            {
                                nums[j+gap]=nums[j];//大于k的数都右移gap位 
                            }
                            nums[j+gap]=k;
                        }
                    }
                    return nums;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    int n;
                    cin>>n;
                    vector<int> nums(n);
                    for(int i=0;i<n;i++)
                    {
                        cin>>nums[i];
                    }
                    sortArray(nums);
                    for(int i=0;i<n;i++)
                    {
                        cout<<nums[i]<<' ';
                    }
                    return 0;
                }
                `}
            />
            <X.P>测试结果：洛谷AC/`73ms`；力扣AC/`115ms`。</X.P>
            <X.H1>归并排序</X.H1>
            <X.P>
                归并排序是一种分治算法，将数组分为两部分，分别排序；两个有序数组可以在$O(n)$时间内合并为一个有序数组。
            </X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                void mergeSort(vector<int> &nums,vector<int> &aux,int l,int r)//排序[l,r] 
                {
                    if(l>=r) return;
                    int m=l+(r-l)/2;
                    mergeSort(nums,aux,l,m);
                    mergeSort(nums,aux,m+1,r);
                    //合并[l,m]和[m+1,r] 
                    int i=l,j=m+1;
                    for(int k=l;k<=r;k++)//先在辅助空间中构造出合并后的序列 
                    {
                        if(i>m)                 aux[k]=nums[j],j++;
                        else if(j>r)            aux[k]=nums[i],i++;
                        else if(nums[i]>nums[j])aux[k]=nums[j],j++;
                        else                    aux[k]=nums[i],i++;
                    }
                    for(int k=l;k<=r;k++)//在辅助空间合并后复制给nums 
                    {
                        nums[k]=aux[k];
                    }
                    return;
                }
                vector<int> sortArray(vector<int> &nums)
                {
                    vector<int> aux=nums;//辅助空间 
                    mergeSort(nums,aux,0,nums.size()-1);
                    return nums;
                }
                int main()
                {
                    ios::sync_with_stdio(false);
                    int n;
                    cin>>n;
                    vector<int> nums(n);
                    for(int i=0;i<n;i++)
                    {
                        cin>>nums[i];
                    }
                    sortArray(nums);
                    for(int i=0;i<n;i++)
                    {
                        cout<<nums[i]<<' ';
                    }
                    return 0;
                }
                `}
            />
            <X.P>测试结果：洛谷AC/`72ms`；力扣AC/`130ms`。</X.P>
        </>
    );
}
