import X from 'src/component/X';
import {Demo1, Demo2, Demo3, Demo4} from './imm';

export default function Post() {
    return (
        <>
            <X.H1>问题描述</X.H1>
            <X.P>下面是一个常见的效果，当鼠标悬浮时展开显示内容，离开时自动收回。</X.P>
            <Demo1 />
            <X.P>
                由于通常不知道`content`中具体内容所占的高度，因此常用`height:
                auto;`设置高度。上面的示例可以良好的实现要求，问题出现在当我们需要为这个高度的变化添加过渡动画时，会发现`transition:
                height 500ms;`不起作用，这是因为`auto`并不是一个具体的高度数值。
            </X.P>
            <X.H1>使用 max-height 解决</X.H1>
            <X.P>
                一个常见方案是使用`max-height`控制。这样确实可以实现过渡动画效果，但并不是一个“完美”的动画：\n当过高的估计了`content`容器的最大可能高度时，鼠标移入时的动画会的变快，而移出时动画会有延迟。这是因为有一部分时间花在了`max-height`数值在`content`容器的真实高度和设定值之间的过渡上，而这部分过渡时间不会影响页面元素的样式。
            </X.P>
            <Demo2 />
            <X.H1>更好的方案：使用 grid</X.H1>
            <X.P>一个更完美的解决方案是使用网格布局：</X.P>
            <Demo3 />
            <X.P>
                注意在HTML结构中，要为`content`再添加一层子元素`div`，`display:
                grid;`和`grid-template-rows`属性仍然设置给`content`，但此时`overflow:
                hidden;`要设置给`content`的子元素。
            </X.P>
            <X.H2>讨论</X.H2>
            <X.P>
                `grid-row: 1 / span
                2;`这行代码看起来有些费解，因为毕竟只有一行子元素。它的作用是使子元素动画与父元素保持一致。\n我们把动画放慢，并且给`content`带上灰色背景，给`content
                &gt; div`带上红色背景，观察一下使用和不使用这个属性的区别：
            </X.P>
            <Demo4 />
            <X.P>
                这个问题是否发生似乎与浏览器的行为有关，在Google Chrome和Microsoft
                Edge中需要设置这个属性；但在Firefox中即使不写`grid-row: 1 / span 2;`也不会引起这个问题。
            </X.P>
        </>
    );
}
