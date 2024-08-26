import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/model-optimization/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>模型量化技术</X.H1>
            <X.P>模型量化的主要思路是寻找一个映射函数，将高精度的值映射为低精度的值（降低位宽），且保证效果相似，以降低存储成本和计算需求。量化的对象通常是权重数据和激活数据。根据量化间距是否相等分为*线性量化*（均匀量化）和*非线性量化*（非均匀量化）。</X.P>
            <X.H2>线性量化</X.H2>
            <X.H3>分类</X.H3>
            <X.P>根据`float32`的零点是否映射到`int`的零点可以分为*对称量化*和*非对称量化*。</X.P>
            <X.P>如果`float32`的绝对值最大映射为`127`，则称为*非饱和量化*；选择合适阈值$T$映射为`127`，则称为*饱和量化*。权重常用非饱和量化，激活常用饱和量化。</X.P>
            <X.Image src="fig1.jpg" width="300px" filterDarkTheme />
            <X.H3>浮点化定点</X.H3>
            <X.P>将`float32`化为`8`位动态定点数，需要指定小数位数$f$，表示的数为{`$a \\times 2^{-f}$`}。例如$f=4$时，`8`位依次是符号位`1`位，整数位`3`位，小数位`4`位，数值范围为$-8$~$7.9375$，分辨率为$0.0625$。</X.P>
            <X.P>应用时，同一层激活（或权重）小数位数相同，不同层激活（或权重）小数位数可以不同。</X.P>
        </>
    );
}
