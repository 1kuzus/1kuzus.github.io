import X from 'src/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>Blinn-Phong光照模型</X.H1>
            <X.P noMarginBottom>将环境光分为：</X.P>
            <X.Uli>漫反射`(diffuse reflection)`：一根光线打过来，反射到四面八方</X.Uli>
            <X.Uli>高光`(specular highlights)`：一根光线打过来，反射方向与镜面反射方向相近</X.Uli>
            <X.Uli>环境光`(ambient lighting)`：环境中经过多次反射叠加的结果，认为是常量</X.Uli>
            <X.H2>模型定义和说明</X.H2>
            <X.FlexRow gap="32px" flex1>
                <X.Image src={require('./fig1.jpg')} invertInDarkTheme />
                <div>
                    <X.P>着色模型考虑一个点，在这个点处小范围表面被近似看作平面：</X.P>
                    <X.P noMarginBottom>模型的输入（向量均为单位向量）：</X.P>
                    <X.Uli>观察方向{`$\\bm{v}$`}</X.Uli>
                    <X.Uli>法线方向{`$\\bm{n}$`}</X.Uli>
                    <X.Uli>光照方向{`$\\bm{l}$`}</X.Uli>
                    <X.Uli>这一点处表面的固有性质（颜色等）</X.Uli>
                </div>
            </X.FlexRow>
            <X.FlexRow gap="32px" flex1>
                <X.Image src={require('./fig2.jpg')} />
                <div>
                    <X.P>着色是局部的，计算每一点的着色结果时，不会考虑其他物体的存在，不会产生影子。</X.P>
                    <X.P>例如红色框部分是有些反直觉的。</X.P>
                </div>
            </X.FlexRow>
            <X.H2>漫反射</X.H2>
            <X.H3>光线衰减</X.H3>
            <X.P>我们认为点光源发出的光的能量集中在一个球壳上，根据能量守恒，光强应与距离平方成反比。</X.P>
            <X.P>如果在与中心距离$1$处光强为$I$，则在与中心距离$r$处光强为$I/r^2$。</X.P>
            <X.H3>朗伯着色模型</X.H3>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig3.jpg')} style={{minWidth: '200px'}} invertInDarkTheme />
                <div>
                    <X.P>
                        考虑一个点的着色，其漫反射部分可以接收到的光线占光源的比例为
                        {`$\\cos\\theta=\\bm{l}\\cdot\\bm{n}$`}：
                    </X.P>
                    <X.P>漫反射部分$L_d$的计算公式为：</X.P>
                    <X.Formula text="L_d=k_d(I/r^2)\max(0,\bm{l}\cdot\bm{n})" />
                    <X.Uli>
                        其中的$k_d$是漫反射常量，表示着色点对能量的吸收率，取决于物体材质。如果定义为具有`3`个分量的常向量，则可以表示不同的颜色。
                    </X.Uli>
                    <X.Uli>当光照方向和法线方向余弦值为负数的时候，认为光线不可到达此点，按$0$考虑。</X.Uli>
                    <X.P withMarginTop>注意到漫反射是与观察方向{`$\\bm{v}$`}无关的。</X.P>
                </div>
            </X.FlexRow>
            <X.H2>高光</X.H2>
            <X.P>高光的反射方向是接近镜面反射方向的。</X.P>
            <X.FlexRow gap="32px" flex1>
                <X.Image src={require('./fig4.jpg')} invertInDarkTheme />
                <div>
                    <X.P>
                        我们观察到：如果反射方向与观察方向相近时，半程向量{`$\\bm{h}$`}应该与法线方向也相近，
                        {`$\\bm{h}$`}是归一化后的观察方向与光照方向的和：
                    </X.P>
                    <X.Formula text="\bm{h}=\frac{\bm{v}+\bm{l}}{\Vert\bm{v}+\bm{l}\Vert}" />
                    <X.P>高光部分$L_s$的计算公式为：</X.P>
                    <X.Formula text="L_s=k_s(I/r^2)\max(0,\bm{n}\cdot\bm{h})^p" />
                    <X.Uli>其中的$k_s$通常接近$1$。</X.Uli>
                    <X.Uli>
                        指数$p$使得{`$\\bm{n}$`}、{`$\\bm{h}$`}向量夹角增大时，使$L_s$快速衰减。
                    </X.Uli>
                </div>
            </X.FlexRow>
            <X.H2>环境光</X.H2>
            <X.FlexRow gap="32px" flex1>
                <X.Image src={require('./fig5.jpg')} invertInDarkTheme />
                <div>
                    <X.P>我们假设在每一点处，来自环境中各处散射叠加而成的光强是相等的$I_a$。</X.P>
                    <X.P>环境光部分$L_a$的计算公式为：</X.P>
                    <X.Formula text="L_a=k_aI_a" />
                </div>
            </X.FlexRow>
            <X.H2>结果</X.H2>
            <X.Image src={require('./fig6.jpg')} width="100%" />
            <X.P>最后的计算结果为：$L=L_d+L_s+L_a$</X.P>
            <X.H1>纹理映射</X.H1>
            <X.P>
                纹理映射希望能够定义一个物体上面任意一点的不同属性（$k_d$等）。认为3D物体的表面是一张2D的图，---
                纹理映射需要建立起3D物体表面上一点与纹理表面上的一点的一一对应关系。
            </X.P>
            <X.Image src={require('./fig7.jpg')} width="80%" />
            <X.P>$u$、$v$通常都取值$[0,1]$。模型的每一个顶点都对应一个$(u,v)$。</X.P>
            <X.P>纹理表面是如何得到的？美工画的！</X.P>
            <X.H2>重心坐标</X.H2>
            <X.FlexRow gap="32px" flex1>
                <div>
                    <X.Image src={require('./fig8.jpg')} invertInDarkTheme />
                    <X.Image src={require('./fig9.jpg')} invertInDarkTheme />
                </div>
                <div>
                    <X.P>三角形所在平面上任何一点都可以用三角形顶点$A$、$B$、$C$来表示：</X.P>
                    <X.HighlightBlock>
                        <X.Formula text="(x,y)=\alpha A + \beta B + \gamma C, \; \alpha + \beta + \gamma = 1" />
                    </X.HighlightBlock>
                    <X.P>如果$(x,y)$在三角形内部，则有$\alpha$、$\beta$、$\gamma$均非负。</X.P>
                    <X.P>当$\alpha=\beta=\gamma=1/3$时，$(x,y)$是三角形重心。</X.P>
                    <X.Divider />
                    <X.P withMarginTop>
                        重心坐标的作用是给三角形内部任意一点线性插值。$V_A$、$V_B$、$V_C$可能是位置、颜色、深度等等。
                    </X.P>
                    <X.HighlightBlock>
                        <X.Formula text="V=\alpha V_A + \beta V_B + \gamma V_C" />
                    </X.HighlightBlock>
                    <X.HighlightBlock bgcolor="red">
                        <X.P>重心坐标插值并不具有投影不变性。</X.P>
                    </X.HighlightBlock>
                </div>
            </X.FlexRow>
            <X.P>利用重心坐标插值，就可以查询任意一点$(x,y)$对应的纹理$(u,v)$。</X.P>
            <X.H1>纹理的应用</X.H1>
            <X.H2>凹凸贴图</X.H2>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig10.jpg')} style={{minWidth: '200px'}} />
                <X.P>
                    纹理不止可以表示颜色，也可以表示物体的模型。例如，一个球的表达是非常容易的，通常几百个三角形就能很好的描述，---
                    但是左图所示的表面有复杂纹理的球体如果用三角形表示，则很麻烦。可以用像描述表面纹理一样的方法去描述每一点的相对高度。
                </X.P>
            </X.FlexRow>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig11.jpg')} width="200px" style={{minWidth: '200px'}} />
                <X.P>凹凸贴图`(bump mapping)`用一张灰度图存储高度的相对变化值。</X.P>
            </X.FlexRow>
            <X.H2>法线贴图</X.H2>
            <X.Image src={require('./fig12.jpg')} invertInDarkTheme width="800px" />
            <X.P noMarginBottom>
                如图，改变后的法线方向垂直于$(1,dp)^T$，应为$(-dp,1)^T$。不过，上述是在平面上的简单示意图，实际情况下纹理是一个$u-v$平面，计算改变后的法线方向需要：
            </X.P>
            <X.Uli>以原本的法线为$(0,0,1)^T$建立一个局部坐标系</X.Uli>
            <X.Uli>计算{`$\\bm{n}=(-dp/du,-dp/dv,1)^T$`}</X.Uli>
            <X.Uli>对{`$\\bm{n}$`}归一化即为所求</X.Uli>
        </X.BlogWrapper>
    );
}
