import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」线性分类器</X.Title>
            贝叶斯估计的优势在于，可以结合样本信息和先验知识，并且根据`样本数量`和`先验知识的确定程度`调和两部分信息的相对贡献。
        </X.BlogWrapper>
    );
}
