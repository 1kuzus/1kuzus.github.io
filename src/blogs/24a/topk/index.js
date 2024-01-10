import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.P>我们定义这样一个数组：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import numpy
                import torch

                #numpy
                arr=numpy.array([
                    [1,4,5,7,8],
                    [9,1,2,8,4],
                    [8,5,1,3,6],
                    [3,2,4,6,5],
                ])

                #torch
                tsr=torch.tensor(arr)
                `}
            />
            <X.P>
                我们希望沿第`1`维度也就是列维度取前`3`大的数值，也就是其他维度保持不变，将列维度变为`3`，并且保留的是前三大的元素。
            </X.P>
            <X.H1>pytorch</X.H1>
            <X.P>在pytorch中已经内置了`topk`函数：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                val,idx=torch.topk(tsr,k=3,dim=1)

                print(val)
                # tensor([[8, 7, 5],
                #         [9, 8, 4],
                #         [8, 6, 5],
                #         [6, 5, 4]])

                print(idx)
                # tensor([[4, 3, 2],
                #         [0, 3, 4],
                #         [0, 4, 1],
                #         [3, 4, 2]])
                `}
            />
            <X.P>`val`输出了前三大元素的值，`idx`是索引，这已经是想要的结果了。</X.P>
            <X.H1>numpy</X.H1>
            <X.P>numpy中没有直接实现`topk`功能的函数，需要多一些步骤实现：</X.P>
            <X.P>
                首先使用`numpy.argpartition`函数，这个函数会将将下标为`kth`的元素排列到其正确位置并返回索引，---
                保证其左边的元素都比它小，右边的元素都比它大，但左右两侧的序列并不一定是有序的。
            </X.P>
            <X.P>由于`numpy.argpartition`的排列顺序是从小到大，为了得到从大到小的索引，对输入`arr`取了负值。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                idx=numpy.argpartition(-arr,kth=3,axis=1)
                print(idx)
                # [[3 4 2 1 0]
                #  [3 0 4 2 1]
                #  [0 4 1 3 2]
                #  [3 4 2 0 1]]
                `}
            />
            <X.P>第二步，我们只留下前`k`大的元素的索引：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                idx=idx.take(indices=range(3),axis=1)
                print(idx)
                # [[3 4 2]
                #  [3 0 4]
                #  [0 4 1]
                #  [3 4 2]]
                `}
            />
            <X.P>第三步，需要通过`numpy.take_along_axis`函数得到按`idx`排列的数组。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                val=numpy.take_along_axis(arr,indices=idx,axis=1)
                print(val)
                # [[7 8 5]
                #  [8 9 4]
                #  [8 6 5]
                #  [6 5 4]]
                `}
            />
            <X.P>到现在为止，我们已经得到了*乱序*的数组值和索引值，因此最后一步是使用`numpy.argsort`进行排序。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                sorted_idx=numpy.argsort(-val,axis=1)
                idx=numpy.take_along_axis(idx,indices=sorted_idx,axis=1)
                val=numpy.take_along_axis(val,indices=sorted_idx,axis=1)

                print(val)
                # [[8 7 5]
                #  [9 8 4]
                #  [8 6 5]
                #  [6 5 4]]

                print(idx)
                # [[4 3 2]
                #  [0 3 4]
                #  [0 4 1]
                #  [3 4 2]]
                `}
            />
            <X.H1>封装</X.H1>
            <X.P>我们可以在numpy中封装一个和torch的`topk`类似的函数：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                def topk_numpy(arr,k,dim):
                    idx=numpy.argpartition(-arr,kth=k,axis=dim)
                    idx=idx.take(indices=range(k),axis=dim)
                    val=numpy.take_along_axis(arr,indices=idx,axis=dim)
                    sorted_idx=numpy.argsort(-val,axis=dim)
                    idx=numpy.take_along_axis(idx,indices=sorted_idx,axis=dim)
                    val=numpy.take_along_axis(val,indices=sorted_idx,axis=dim)
                    return val,idx
                `}
            />
            <X.HighlightBlock>
                <X.P>这个函数只实现了torch库中`topk`函数最基本的功能，并不全面~</X.P>
            </X.HighlightBlock>
            <X.P>检验一下是否正确：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                bigarr=numpy.random.rand(64,16,24,24)
                bigtsr=torch.tensor(bigarr)

                val_t,idx_t=torch.topk(bigtsr,k=7,dim=1)
                val_n,idx_n=topk_numpy(bigarr,k=7,dim=1)

                print(val_n.shape) #(64, 7, 24, 24)
                print(numpy.all(val_t.numpy()==val_n)) #True
                print(numpy.all(idx_t.numpy()==idx_n)) #True
                `}
            />
            <X.H1>讨论</X.H1>
            <X.P>上述方法核心是*先切片、再排序*。这是由于`argpartition`和`argsort`的性能差异：</X.P>
            <X.P>
                `argsort`对全部数组进行排序，而`argpartition`只进行一次类似快速排序算法中的划分操作，因此`argpartition`效率更高。---
                对于`topk`函数想要实现的功能，尽管先全排序、再切片从代码上更好编写，但当`k`远小于`dim`维度大小时，是较为低效的做法。
            </X.P>
        </X.BlogWrapper>
    );
}
