import {useEffect} from 'react';
import './index.css';
import 'highlight.js/styles/base16/3024.css';
import hljs from 'highlight.js';
import X from '../../component/X';
export default function Testblog() {
    return (
        <X.BlogWrapper>
            <X.Title>测试Blog</X.Title>
            <X.H1>一级标题</X.H1>
            <X.H2>二级标题</X.H2>
            <X.P>
                这里是一句普通的文本，你可以使用`\`\``符号包裹内容从而实现`像这样`的高亮效果。你可能会怀疑`\``这个符号是如何展示在屏幕上的。\n答案是使用`\\\``。
                同理打出`\\`需要在实际编写`blog html`时写`\\\\`。\n `单独一行的高亮块`\n
                这是一个指向@`百度`[https://www.baidu.com]@的超链接，格式为`\@百度[https://www.baidu.com]\@`。同理需要使用`\\\@`打出`\@`符号。
            </X.P>
            <X.H2>在 class 组件中声明 ref</X.H2>
            <X.P>
                要在@class组件[https://react.docschina.org/reference/react/Component]@中声明
                一个ref，请调用`createRef`并将其结果分配给`class`字段。\n 如果你现在将`{'ref={this.inputRef}'}`传递
                给JSX中的`{'<input>'}`，React将把input的DOM节点赋值给`this.inputRef.current`。
            </X.P>
            <X.P highlightBackground="golden">
                这里是一句普通的文本，你可以使用`\`\``符号包裹内容从而实现`像这样`的高亮效果。你可能会怀疑`\``这个符号是如何展示在屏幕上的。\n答案是使用`\\\``。
                同理打出`\\`需要在实际编写`blog html`时写`\\\\`。\n `单独一行的高亮块`\n
                这是一个指向@`百度`[https://www.baidu.com]@的超链接，格式为`\@百度[https://www.baidu.com]\@`。同理需要使用`\\\@`打出`\@`符号。
            </X.P>
            <X.P>
                当*橘子和苹果*一起成群结队地在田野里玩耍，阳光洒在他们身上，照得他们*光芒四射*。小兔子从旁边跳过，欢快地蹦蹦跳跳，像是在为他们的游戏加入了一份欢乐。
                不远处，一朵朵绚丽多彩的花朵竞相绽放，为这个美丽的场景增添了一抹生机与色彩。在这个宁静的时刻，大自然似乎也在为这些生命欢呼，诉说着生命的美好与活力。\n
                这段话里的加粗效果是用`\*`打出来的。
            </X.P>
            <X.P highlightBackground="red">
                我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
            </X.P>
        </X.BlogWrapper>
    );
}
