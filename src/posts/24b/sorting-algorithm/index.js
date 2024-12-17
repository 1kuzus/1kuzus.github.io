import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>汇总&前言</X.H1>
            <X.P>以下表格中讨论的时空复杂度都是每种算法未加优化、最朴素的实现。\n是否稳定一栏，空白默认为稳定。</X.P>
            <X.Table>
                <tr>
                    <th></th>
                    <th>算法名称</th>
                    <th>平均时间</th>
                    <th>最好情况</th>
                    <th>最坏情况</th>
                    <th>辅助空间</th>
                    <th>是否稳定</th>
                </tr>
                <tr>
                    <th rowSpan={7}>
                        <X.P>基于\n比较</X.P>
                    </th>
                    <td>冒泡排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$1$</X.P>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <X.P>选择排序</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$1$</X.P>
                    </td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>插入排序</td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$1$</X.P>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>希尔排序</td>
                    <td>
                        <X.P>{`$n^{1.3}$`}</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$1$</X.P>
                    </td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>归并排序</td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n$</X.P>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>快速排序</td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$\log n$</X.P>
                    </td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>堆排序</td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$1$</X.P>
                    </td>
                    <td>否</td>
                </tr>
                <tr>
                    <th rowSpan={4}>
                        <X.P>不基于\n比较</X.P>
                    </th>
                    <td>计数排序</td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>桶排序/插入</td>
                    <td>
                        <X.P>$n^2/k$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td>
                        <X.P>$n^2$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>桶排序/归并</td>
                    <td>
                        <X.P>$n\log(n/k)$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td>
                        <X.P>$n\log n$</X.P>
                    </td>
                    <td>
                        <X.P>$n+k$</X.P>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>基数排序</td>
                    <td>
                        <X.P>$dn$</X.P>
                    </td>
                    <td>
                        <X.P>$dn$</X.P>
                    </td>
                    <td>
                        <X.P>$dn$</X.P>
                    </td>
                    <td>
                        <X.P>$n+d$</X.P>
                    </td>
                    <td></td>
                </tr>
            </X.Table>
            <X.Uli>希尔排序的时间复杂度与增量序列有关，表格给出的只是一组较为常见的数据。</X.Uli>
            <X.Uli>计数排序中的$k$为数据最大值与最小值之差。</X.Uli>
            <X.Uli>
                桶排序中的$k$为桶的数量，对于最好情况，元素在桶中均匀分布且当$k$近似等于元素数量$n$时，桶排序时间复杂度是线性的；对于最坏情况，大多数元素都分布在一个桶里，此时桶排序时间复杂度取决于桶内排序算法。如果桶内排序使用稳定排序算法，则桶排序也是稳定的。
            </X.Uli>
            <X.Uli>基数排序中的$d$为数据的位数，当$d$较小时，基数排序时间复杂度是线性的。</X.Uli>
            <X.P>
                本文会给出所有排序算法（从小到大升序排列）的代码实现，代码可以直接提交到@洛谷 -
                P1177【模板】排序[https://www.luogu.com.cn/problem/P1177]@，其中的`sortArray`函数可以提交到@力扣 -
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
            <X.H2>优化</X.H2>
            <X.P>
                如果一次冒泡过程中没有发生交换，说明数组已经有序，可以提前结束排序。这样最好情况下时间复杂度是$O(n)$。
            </X.P>
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
            <X.H2>优化</X.H2>
            <X.P>
                可以使用二分查找优化插入排序的查找过程，不过此时平均时间复杂度仍然是$O(n^2)$，因为平均情况下仍然会涉及到元素的移动。此优化只是常数优化。
            </X.P>
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
            <X.H1>快速排序</X.H1>
            <X.P>
                快速排序也是一种分治算法，每次选择一个基准元素，将小于基准的元素放在基准的左边，大于基准的元素放在基准的右边。
            </X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                void quickSort(vector<int> &nums,int l,int r)
                {
                    if(l>=r) return;
                    int lp=l,rp=l,tmp;//lp左侧的全部元素都小于主元
                    for(;rp<r;rp++)
                    {
                        if(nums[rp]<nums[r])//选择nums[r]作为主元
                        {
                            tmp=nums[rp],nums[rp]=nums[lp],nums[lp]=tmp;
                            lp++;
                        }
                    }
                    tmp=nums[lp],nums[lp]=nums[r],nums[r]=tmp;
                    quickSort(nums,l,lp-1);
                    quickSort(nums,lp+1,r);
                    return;
                }
                vector<int> sortArray(vector<int> &nums)
                {
                    quickSort(nums,0,nums.size()-1);
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
            <X.P>测试结果：洛谷通过`2`/`5`；力扣通过`11`/`21`。</X.P>
            <X.P>没有优化的快排被基本有序的数组和元素全部相同的数组卡掉了。</X.P>
            <X.H1>堆排序</X.H1>
            <X.P>堆排序是一种选择排序。利用最大堆，每次读取堆顶（最大元素），然后以$O(\log n)$时间代价删除堆顶。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                //如果越界返回下标0，nums[0]会被赋值成负无穷作为哨兵节点
                int left(int i,int heapsize){return i*2<=heapsize?i*2:0;}
                int right(int i,int heapsize){return i*2+1<=heapsize?i*2+1:0;}
                void swap(vector<int> &nums,int i,int j)
                {
                    int tmp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=tmp;
                    return;
                }
                //调用maxheapify时，i的左右子树都应该为最大堆
                void maxheapify(vector<int> &nums,int heapsize,int i)
                {
                    int l=left(i,heapsize),r=right(i,heapsize);
                    int rt=nums[i],lchild=nums[l],rchild=nums[r];
                    if(rt>=lchild&&rt>=rchild) return;//根节点已经最大，返回
                    else if(lchild>rchild)
                    {
                        swap(nums,l,i);
                        maxheapify(nums,heapsize,l);
                    }
                    else
                    {
                        swap(nums,r,i);
                        maxheapify(nums,heapsize,r);
                    }
                    return;
                }
                vector<int> sortArray(vector<int> &nums)
                {
                    int heapsize=nums.size();//堆中元素从1开始编号
                    nums.emplace(nums.begin(),-2147483647);//nums[0]作为哨兵
                    //建堆
                    //heapsize>>1是堆的第一个非叶子节点，从它开始向前依次调用一次maxheapify
                    for(int i=heapsize>>1;i>0;i--)
                    {
                        maxheapify(nums,heapsize,i);
                    }
                    //排序
                    while(heapsize)
                    {
                        swap(nums,1,heapsize);//将最大的元素换到最后
                        heapsize--;
                        maxheapify(nums,heapsize,1);
                    }
                    nums.erase(nums.begin());//移除哨兵
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
            <X.P>测试结果：洛谷AC/`87ms`；力扣AC/`136ms`。</X.P>
            <X.H1>计数排序</X.H1>
            <X.P>计数排序是一种非比较排序，统计每个元素出现的次数，然后依次输出。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortArray(vector<int> &nums)
                {
                    int mx=-2147483647,mi=-mx;
                    for(auto x:nums)
                    {
                        if(x>mx) mx=x;
                        if(x<mi) mi=x;
                    }
                    vector<int> aux(mx-mi+1);
                    for(auto x:nums)
                    {
                        aux[x-mi]++;
                    }
                    int n=0;
                    for(int i=0;i<aux.size();i++)
                    {
                        for(int j=0;j<aux[i];j++)
                        {
                            nums[n]=i+mi;
                            n++;
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
            <X.P>测试结果：洛谷通过`3`/`5`；力扣AC/`76ms`。</X.P>
            <X.P>
                洛谷有两组数据极差较大，因此有两个测试点MLE；力扣数据范围小因此可以通过。计数排序时间效率是非常快的。
            </X.P>
            <X.H2>关于空间复杂度</X.H2>
            <X.P>
                在对整数排序的例子中，显然只需要$O(k)$的额外复杂度；不过考虑对结构体数组按键进行排序，此时就不能简单的用一个整数表示“该键出现了多少次”，需要额外的$O(n)$空间存储其他信息，比如结构体的地址，此时整体空间复杂度是$O(n+k)$的。
            </X.P>
            <X.H1>桶排序</X.H1>
            <X.P>
                桶排序是计数排序的推广，将元素分到不同的桶中，然后对每个桶进行排序（这里可以用插入、快排、归并等等），最后依次输出。
            </X.P>
            <X.P>下面的代码实现就用了最朴素的插入排序：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortBucket(vector<int> &nums)
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
                vector<int> sortArray(vector<int> &nums)
                {
                    int k=100;//桶的大小
                    int mx=nums[0],mi=nums[0];
                    for(auto x:nums)
                    {
                        if(x>mx) mx=x;
                        if(x<mi) mi=x;
                    }
                    vector<vector<int>> buckets((mx-mi)/k+1);
                    for(auto x:nums)
                    {
                        buckets[(x-mi)/k].emplace_back(x);
                    }
                    for(int i=0;i<buckets.size();i++)
                    {
                        sortBucket(buckets[i]);
                    }
                    nums.clear();
                    for(auto bucket:buckets)
                    {
                        nums.insert(nums.end(),bucket.begin(),bucket.end());
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
            <X.P>测试结果：洛谷AC/`402ms`；力扣AC/`83ms`。</X.P>
            <X.P>
                注：可能因为STL容器常数较大，在洛谷只是初始化`buckets`就花费了较长时间（前两个元素范围较大的测试点约`100ms`）。
            </X.P>
            <X.H1>基数排序</X.H1>
            <X.P>基数排序从低位到高位依次对每一位进行计数排序，最后得到有序序列。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #include <vector>
                using namespace std;
                vector<int> sortArray(vector<int> &nums)
                {
                    int mx=nums[0],mi=nums[0];
                    for(auto x:nums)
                    {
                        if(x>mx) mx=x;
                        if(x<mi) mi=x;
                    }
                    for(int i=0;i<nums.size();i++) nums[i]-=mi;//减掉最小值，这样可以排序负数
                    mx-=mi;
                    vector<vector<int>> dgt(10);//每趟排序对一位进行计数排序
                    for(int exp=1;mx/exp>0;exp*=10)
                    {
                        for(auto x:nums)
                        {
                            dgt[(x/exp)%10].emplace_back(x);
                        }
                        nums.clear();
                        for(int i=0;i<10;i++)
                        {
                            nums.insert(nums.end(),dgt[i].begin(),dgt[i].end());
                            dgt[i].clear();
                        }
                    }
                    for(int i=0;i<nums.size();i++) nums[i]+=mi;//还原
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
            <X.P>测试结果：洛谷AC/`67ms`；力扣AC/`83ms`。</X.P>
        </>
    );
}
