import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@N皇后 II[https://leetcode.cn/problems/n-queens-ii/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>DFS回溯。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                /**
                 * @param {number} n
                 * @return {number}
                 */
                var totalNQueens = function (n) {
                    const visn = Array(n).fill(false);//列
                    const visne = Array(n * 2).fill(false);//正对角线
                    const visnw = Array(n * 2).fill(false);//反对角线
                    let ans = 0;
                    function dfs(r) {
                        if (r == n) {
                            ans++;
                            return;
                        }
                        for (let c = 0; c < n; c++) {
                            if (!visn[c] && !visne[r + c] && !visnw[n + r - c]) {
                                visn[c] = visne[r + c] = visnw[n + r - c] = true;
                                dfs(r + 1);
                                visn[c] = visne[r + c] = visnw[n + r - c] = false;
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
