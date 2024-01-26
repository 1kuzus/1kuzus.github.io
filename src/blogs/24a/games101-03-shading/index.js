import X from 'src/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>Blinn-Phong光照模型</X.H1>
            <X.P noMarginBottom>将环境光分为：</X.P>
            <X.Uli>高光`(specular highlights)`：一根光线打过来，反射到镜面反射方向去</X.Uli>
            <X.Uli>漫反射`(diffuse reflection)`：一根光线打过来，反射到四面八方</X.Uli>
            <X.Uli>环境光`(ambient lighting)`：环境中经过多次反射叠加的结果，认为是常量</X.Uli>
            <X.H1>模型定义和说明</X.H1>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig1.jpg')} width="400px" />
                <div>
                    <X.P>着色模型考虑一个点，在这个点处小范围表面被近似看作平面：</X.P>
                    <X.P noMarginBottom>模型的输入：</X.P>
                    <X.Uli>观察方向{`$\\bm{v}$`}</X.Uli>
                    <X.Uli>法线方向{`$\\bm{n}$`}</X.Uli>
                    <X.Uli>光照方向{`$\\bm{l}$`}</X.Uli>
                    <X.Uli>这一点处表面的固有性质（颜色等）</X.Uli>
                </div>
            </X.FlexRow>
        </X.BlogWrapper>
    );
}
