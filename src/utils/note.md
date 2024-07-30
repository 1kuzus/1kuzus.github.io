# commit格式
* update posts
* feat: ...
* fix: ...
* update: ...
* chore

# utils脚本
```
node .\src\utils\checkCSS.js
```
```
node .\src\utils\showUrls.js
```

# 创建新文章
```
npm run new post-path
```
```
npm run new post-path longtime
```

# 一些正则
* 匹配非汉字/非汉字标点/非ASCII字符
```
[^\u4e00-\u9fa5\p{ASCII}\p{P}]
```

* 匹配公式内出现中文字符
```
<X.Formula([\s\n]*?)text="([^"]*?)[\u4e00-\u9fa5]([^"]*?)"([\s\n]*?)/>
```