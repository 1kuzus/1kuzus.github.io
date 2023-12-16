import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>用法</X.H1>
            <X.P>
                网页中一些地方会用到“一键复制”功能，在点击某个按钮后自动将内容写入用户的剪贴板。当今推荐的做法是使用---
                `@Clipboard API[https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API]@`。
            </X.P>
            <div
                onClick={() => {
                    navigator.clipboard.writeText('Hello, world!').then(() => {});
                }}
            >
                点击我复制字符串Hello, world!
            </div>
            <textarea></textarea>
            <X.H1>动手试一下！</X.H1>
            <X.HighlightBlock>
                <span>213</span>
            </X.HighlightBlock>
        </X.BlogWrapper>
    );
}
