> 原题链接：[N皇后 II](https://leetcode.cn/problems/n-queens-ii/description/)

DFS回溯。

```js
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const visn = Array(n).fill(false); //列
    const visne = Array(n * 2).fill(false); //正对角线
    const visnw = Array(n * 2).fill(false); //反对角线
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
```
