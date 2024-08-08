import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/leetcode-51/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>原题链接：@N皇后[https://leetcode.cn/problems/n-queens/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>DFS回溯。注意JavaScript字符串是不可变对象，`plan`用二维字符数组表示以便修改。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                /**
                 * @param {number} n
                 * @return {string[][]}
                 */
                var solveNQueens = function (n) {
                    const visn = Array(n).fill(false);//列
                    const visne = Array(n * 2).fill(false);//正对角线
                    const visnw = Array(n * 2).fill(false);//反对角线
                    const ans = [], plan = [];
                    for (let i = 0; i < n; i++) plan.push(Array(n).fill("."));
                    function dfs(r) {
                        if (r == n) {
                            ans.push(plan.map(i => i.join("")));
                            return;
                        }
                        for (let c = 0; c < n; c++) {
                            if (!visn[c] && !visne[r + c] && !visnw[n + r - c]) {
                                visn[c] = visne[r + c] = visnw[n + r - c] = true;
                                plan[r][c] = "Q";
                                dfs(r + 1);
                                visn[c] = visne[r + c] = visnw[n + r - c] = false;
                                plan[r][c] = ".";
                            }
                        }
                    }
                    dfs(0);
                    return ans;
                };
                `}
            />
        </>
    );
}
