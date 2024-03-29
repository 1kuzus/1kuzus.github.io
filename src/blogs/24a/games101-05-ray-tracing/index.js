import X from 'src/component/X';

export default function Blog({title}) {
    return (
        <>
            <X.Title>{title}</X.Title>
            <X.P>
                光栅化是一种很快的做法，可以做到实时，但是质量较低。光线追踪是一种精确的算法，但是生成的过程很慢，通常作离线算法。
            </X.P>
            <X.H1>光线追踪的三点假设</X.H1>
            <X.P>光沿直线传播；</X.P>
            <X.P>光线与光线直接不会发生“碰撞”；</X.P>
            <X.P>光线的可逆性：光源发射的光线经过反射进入眼睛；也可以认为眼睛发出“感知光线”打到光源上。</X.P>
        </>
    );
}
