> 原题链接：[有效数字](https://leetcode.cn/problems/valid-number/description/)

正则歪解一下。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    return /^[-+]?(\d+(\.)?\d*|\.\d+)([eE][-+]?\d+)?$/.test(s);
};
```
