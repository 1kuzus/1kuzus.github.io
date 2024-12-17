import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@文本左右对齐[https://leetcode.cn/problems/text-justification/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>可以递归求解，详见注释。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                /**
                 * @param {string[]} words
                 * @param {number} maxWidth
                 * @return {string[]}
                 */
                var fullJustifyLine = function (words, maxWidth, last = false) {
                    //最后一行左对齐、仅剩一个单词则直接返回
                    if (last || words.length === 1) return words.join(" ").padEnd(maxWidth, " ");
                    const wordsWidth = words.reduce((s, cur) => s + cur.length, 0);
                    const sp = maxWidth - wordsWidth, n = words.length - 1;//总空格数sp，空位数n
                    const pad = parseInt(sp / n);
                    let line = words[0];
                    for (let i = 1; i < words.length; i++) {
                        //左侧放置的空格数要多于右侧的空格数，所以前sp%n个空位放pad+1个空格
                        line += Array(pad + (i <= sp % n) + 1).join(" ") + words[i];
                    }
                    return line;
                }
                var fullJustify = function (words, maxWidth) {
                    if (words.length === 0) return [];
                    let i = 0, lineWidth = 0;
                    for (; i < words.length; i++) {
                        lineWidth += words[i].length + 1;//至每个单词后最少填充1个空格
                        if (lineWidth - 1 > maxWidth) break;//去掉最后一个空格（最后一个单词不用填充），已经超过行宽
                    }
                    return [
                        fullJustifyLine(words.slice(0, i), maxWidth, i === words.length/*最后一行*/),
                        ...fullJustify(words.slice(i), maxWidth)
                    ];
                };
                `}
            />
        </>
    );
}
