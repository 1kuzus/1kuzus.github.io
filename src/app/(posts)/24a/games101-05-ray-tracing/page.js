import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/games101-05-ray-tracing/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>光栅化是一种很快的做法，可以做到实时，但是质量较低。光线追踪是一种精确的算法，但是生成的过程很慢，通常作离线算法。</X.P>
            <X.H1>光线追踪</X.H1>
            <X.H2>光线追踪的三点假设</X.H2>
            <X.P>光沿直线传播；</X.P>
            <X.P>光线与光线直接不会发生“碰撞”；</X.P>
            <X.P>光线的可逆性：光源发射的光线经过反射进入眼睛；也可以认为眼睛发出“感知光线”打到光源上。</X.P>
            <X.H2>Recursive(Whitted-Style) Ray Tracing</X.H2>
            <X.Image src="fig1.jpg" width="600px" filterDarkTheme />
            <X.P>假设了光线的反射和折射；对每次折射或者反射的弹射点都计算一次着色。将所有着色加权然后叠加，最终得到像素平面上的颜色。</X.P>
            <X.H2>求光线与表面交点</X.H2>
            <X.P>
                一条光线{`$\\bm{r}$`}可以用一个点{`$\\bm{o}$`}和方向{`$\\bm{d}$`}表示为：
            </X.P>
            <X.Formula text="\bm{r}(t)=\bm{o}+t\bm{d} \quad 0 \leq t \lt \infty" />
            <X.P>图形学常用三角形表示物体表面，因此求交问题转化为求解光线与三角形的交点，思路是先求解光线和平面的交点，再判断交点是否在三角形内部。</X.P>
            <X.Image src="fig2.jpg" width="200px" filterDarkTheme />
            <X.P>平面的方程为：</X.P>
            <X.Formula text="(\bm{p}-\bm{p}_0) \cdot N = 0" />
            <X.P>联立{`$\\bm{p}=\\bm{r}(t)$`}可以解得：</X.P>
            <X.Formula text="t = \frac{(\bm{p}_0-\bm{o}) \cdot N}{\bm{d} \cdot N}" />
            <X.P>
                注意尽管{`$\\bm{p_0}$`}是任意选取的平面上的点，分子上的内积结果是不受{`$\\bm{p_0}$`}位置影响的。
            </X.P>
            <X.P>0；50；55</X.P>
        </>
    );
}
