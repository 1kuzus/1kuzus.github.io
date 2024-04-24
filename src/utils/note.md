# commit格式
update blogs
feat: ...
fix: ...
update: ...
chore

# utils脚本
node .\src\utils\checkCSS.js

# 一些正则
* 匹配非汉字/非汉字标点/非ASCII字符
```
[^\u4e00-\u9fa5\p{ASCII}\p{P}]
```

* 匹配公式内出现中文字符
```
<X.Formula([\s\n]*?)text="([^"]*?)[\u4e00-\u9fa5]([^"]*?)"([\s\n]*?)/>
```