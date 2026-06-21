## 零、表格 @xprops 测试

### 默认表格（无 @xprops，行为不变）

| 列一 | 列二 | 列三 |
|------|------|------|
| a | b | c |
| d | e | f |

### GFM 对齐语法（`:---|` 左 / `:---:|` 居中 / `---:|` 右）

| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| Alice | 97 | ★★★ |
| Bob | 86 | ★★ |

### width（单独传入，逐列像素宽度，`0` 表示不设置）

<!-- @xprops width="250,120,80" -->

| 较宽列 | 中等列 | 较窄列 |
|--------|--------|--------|
| 内容一 | 内容二 | 内容三 |

### thead="all"（行列均为表头）

<!-- @xprops thead="all" -->

| / | 列头1 | 列头2 |
|------|------|------|
| 行头1 | 数据 | 数据 |
| 行头2 | 数据 | 数据 |

### thead="column"（首列为表头）

<!-- @xprops thead="column" -->

| 含义 | 值1 | 值2 | 值3 |
|------|-----|-----|-----|
| 闪烁 | 0 | 1 | 0 |

### thead="none"（无表头）

<!-- @xprops thead="none" -->

| 参数 | 说明 |
|------|:---|
| service | 固定参数 |
| _eventId | 固定参数 |

### 组合：GFM 对齐 + width（2FA 表格样式）

<!-- @xprops width="250,250,250,250" -->

| 名称 | 满足 | 部分满足 | 不满足 |
|-----:|:-----|:---------|:-------|
| Promotion. 宣传性 | 网站在创建账户或登录后立刻清晰地引导2FA流程 | 以不那么显眼的方式，例如footer中的链接提供2FA支持 | 需要用户自己发现2FA设置 |
| Non-Optional. 非可选性 | 2FA设置是强制性的，否则无法创建账户或创建后无法访问完整功能 | / | 2FA设置是可选的 |
| Common-Naming-and-Location. 命名和位置的常规性 | 2FA设置的名称和位置较为常规 | 名称和位置有一个不常规 | 名称和位置都不常规 |

### 组合：GFM 对齐（首列居中、次列左对齐）

| 类型 | 说明 |
|:----:|:-----|
| Chain | 呈链式关系，例如缺陷X为缺陷Y的发生创造了条件 |
| Composite | 多个弱点组合 |

---

## 一、标题级别与属性

<!-- @xprops filterDarkTheme -->

![](1.jpg)

### h3 → X.H2 子标题

#### h4 → X.H3 小标题

<!-- @xprops href="https://github.com" -->

## 带外链的标题（href）

<!-- @xprops href="https://nextjs.org" -->

### 带外链的子标题

---

## 二、段落与行内格式

普通段落包含**加粗文本**、`行内代码`和[超链接](https://example.com)。

这是另一段文本，测试*斜体*渲染（注意：markdown `*text*` 是斜体，而 X 组件库 XParser 中 `*text*` 是加粗，此处存在语义差异）。

混合行内格式：**加粗中嵌套`代码`**、`代码中不应有**加粗**`的干扰、以及[**加粗链接**](https://example.com)和[`代码链接`](https://example.com)，公式`$1 + D_i = \frac{1}{2}$`。

---

## 三、代码块

### 无注释的代码块

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

```asm8086
ret i
```

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 多种编程语言

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def inorder(self):
        result = []
        if self.left:
            result += self.left.inorder()
        result.append(self.val)
        if self.right:
            result += self.right.inorder()
        return result
```

```c
#include <stdio.h>

int main() {
    int arr[] = {5, 3, 8, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return 0;
}
```

```sql
SELECT u.username, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.username
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;
```

```bash
#!/bin/bash
for file in *.log; do
    echo "Processing: $file"
    grep -c "ERROR" "$file" && echo "  ^ errors found"
done
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Test</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}
.container > .item:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
}
```

```json
{
    "name": "mdx-test",
    "version": "1.0.0",
    "dependencies": {
        "next": "^15.0.0",
        "@next/mdx": "^15.0.0"
    }
}
```

```text
This is plain text without any syntax highlighting.
It can contain special characters: <tag>, "quotes", 'single', &amp;
```

### 代码块附加 title

<!-- @xprops title="fibonacci.js" -->

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

<!-- @xprops title="server.py" -->

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})
```

### 代码块高亮行

<!-- @xprops title="utils.py" highlightLines="3-5" -->

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

<!-- @xprops highlightLines="1,4,7" -->

```js
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT);
```

### 代码块 diff 行标注

<!-- @xprops title="sort.js" diffRemovedLines="1-2" diffAddedLines="3-4" -->

```js
{
    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}
```

<!-- @xprops title="sshd_config" diffRemovedLines="1-2" diffAddedLines="3-4" -->

```text
#PermitRootLogin prohibit-password
#PermitEmptyPasswords no
PermitRootLogin yes
PermitEmptyPasswords yes
```

### 组合 title + highlight + diff

<!-- @xprops title="patch.c" highlightLines="1" diffRemovedLines="2-3" diffAddedLines="4-5" -->

```c
if (!ctx->in_seek) {
    if (size > remain) {
        GF_LOG(GF_LOG_WARNING, GF_LOG_MEDIA, "truncated");
    if (bytes_skipped + size > remain) {
        GF_LOG(GF_LOG_WARNING, GF_LOG_MEDIA, "truncated (fixed)");
        break;
    }
}
```

### 单行代码块

<!-- @xprops title="one-liner.sql" -->

```sql
SELECT group_concat(schema_name) FROM information_schema.schemata
```

---

## 四、引用块（HighlightBlock）

### 默认背景（golden）

> 这是一条普通提示，使用默认的 golden 背景色。

### 各色背景

<!-- @xprops background="red" -->

> 警告：这是一条红色背景的危险提示。

<!-- @xprops background="blue" -->

> 信息：这是一条蓝色背景的提示信息。

<!-- @xprops background="green" -->

> 成功：这是一条绿色背景的成功提示。

<!-- @xprops background="gray" -->

> 备注：这是一条灰色背景的备注信息。

### 引用块内含多段落

> 第一段：线性变换后新空间的秩一定不大于原空间的秩，也一定不大于这个变换的秩。
>
> 第二段：新空间的秩一定不大于原空间的秩，因为一个向量空间在经过线性变换后，在"最好"的情况下，没有维度被压缩，秩不变，否则就会降秩。

### 引用块内含代码块

> 使用 `extractvalue` 进行报错注入：
>
> ```sql
> SELECT extractvalue(null, concat(0x7e, (SELECT version()), 0x7e));
> ```
>
> 通常插入一个 `~`（`0x7e`）分隔符来确保稳定触发报错。

### 引用块内含行内格式

<!-- @xprops background="blue" -->

> 函数 `apply`、`bind` 和 `call` 是 JavaScript 中用于改变函数执行时 **this** 指向的三种方法。`apply` 和 `call` 都会**立刻执行**函数，而 `bind` 则返回一个新的函数。详见 [MDN 文档](https://developer.mozilla.org)。

### 引用块内含列表

> 以下 MySQL 函数在盲注中非常有用：
>
> - `substr(str, pos, len)`：截取子串
> - `ascii(ch)`：返回 ASCII 码值
> - `sleep(sec)`：让数据库休眠指定秒数
> - `if(cond, exp_true, exp_false)`：条件判断

### 连续不同颜色的引用块

> 默认颜色的引用块。

<!-- @xprops background="red" -->

> 紧接着的红色引用块。如果中间没有其他元素分隔，两个引用块应该独立渲染。

---

## 五、列表

### 简单无序列表

- 列表项一
- 包含`行内代码`的列表项
- 包含**加粗**的列表项
- 包含[超链接](https://example.com)的列表项
- 混合`代码`、**加粗**和[链接](https://example.com)

### 简单有序列表

1. 第一步：安装依赖
2. 第二步：配置插件
3. 第三步：编写文章

### 列表项内含多段落

- 第一个列表项的第一段。

    第一个列表项的第二段，测试松散列表下的多段落渲染。

- 第二个列表项仅有一段。

### 列表项内含代码块

- 查所有数据库：

    ```sql
    SELECT group_concat(schema_name) FROM information_schema.schemata
    ```

- 查数据库 `security` 中的表：

    ```sql
    SELECT group_concat(table_name) FROM information_schema.tables WHERE table_schema='security'
    ```

- 查表中的列：

    ```sql
    SELECT group_concat(column_name) FROM information_schema.columns WHERE table_schema='security' AND table_name='users'
    ```

### 列表项内含段落+代码块+段落

- `substr(str, pos, len)`：从字符串的第 `pos` 个字符开始，截取长度为 `len` 的子串。

    ```sql
    SELECT substr("abcdef", 1, 3);          -- abc
    SELECT substr((SELECT "123456"), 4, 3); -- 456
    ```

    `pos` 从 1 开始计数。

- `ascii(ch)`：返回字符的 ASCII 码值。

    ```sql
    SELECT ascii("A");   -- 65
    SELECT ascii("abc"); -- 97
    ```

    如果传入字符串，则返回第一个字符的 ASCII 码值。

### 列表项内含引用块

- 正常的列表项文本。

    > 这是嵌套在列表项中的引用块，测试 HighlightBlock 在列表项内的渲染。

- 另一个列表项。

### 有序列表内含复杂内容

1. 安装 QEMU 和 x86_64 系统：

    ```bash
    sudo apt install qemu-user qemu-system-x86
    ```

2. 启动系统时需要配置参数：

    ```bash
    qemu-system-x86_64 -m 1024 \
        -hda /path/to/debian.qcow2 \
        -nographic
    ```

    - `-hda`：磁盘镜像路径
    - `-nographic`：不启动图形界面

3. 登录系统，默认用户名 `root`，无密码。

### 多组独立有序列表

1. 第一组列表第一项
2. 第一组列表第二项
3. 第一组列表第三项

中间有段落将两个有序列表分隔。

1. 第二组列表第一项
2. 第二组列表第二项

### 嵌套列表（子列表）

- 外层列表项 A
    - 子列表项 A-1
    - 子列表项 A-2
- 外层列表项 B
    - 子列表项 B-1
    - 子列表项 B-2
    - 子列表项 B-3
- 没有子列表的外层项

---

## 六、表格

### 基础表格

| 注释 prop             | 适用元素 | 说明             |
| --------------------- | -------- | ---------------- |
| `title`               | 代码块   | 显示在代码块头部 |
| `highlightLines`      | 代码块   | 高亮指定行       |
| `diffRemovedLines`    | 代码块   | 标红删除行       |
| `diffAddedLines`      | 代码块   | 标绿新增行       |
| `background`          | 引用块   | 背景色主题       |
| `href`                | 标题     | 标题变为外链     |
| `excludeFromContents` | 标题     | 从目录中排除     |

### 表格内含行内格式

| 方法    | 语法                       | 说明                                        |
| ------- | -------------------------- | ------------------------------------------- |
| `apply` | `fn.apply(ctx, [args])`    | 立刻执行，参数为**数组**                    |
| `call`  | `fn.call(ctx, arg1, arg2)` | 立刻执行，参数**逐个传入**                  |
| `bind`  | `fn.bind(ctx, arg1)`       | 返回[新函数](https://developer.mozilla.org) |

### 对齐表格

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| Alice  |    97    |    ★★★ |
| Bob    |    86    |     ★★ |
| Candy  |    80    |      ★ |

---

## 七、分割线

上方是一段文字。

---

下方也是一段文字。在这两段之间有一条分割线。

---

---

上方有两条连续的分割线。

---

## 八、公式

### 行内公式

仿射映射量化中，原数 $d$（实数）和量化表示 $q$（整数）的关系为 $d = s(q - z)$，其中$s$是量化步长，$z$ 是零点。

秩不等式 $r(A) + r(B) - n \leq r(AB) \leq \min(r(A), r(B))$ 中假设矩阵 $A$ 是 $m \times n$，矩阵 $B$ 是 $n \times k$ 的。

### 块级公式

$$
d = s(q - z)
$$

$$
q = \text{round}(d / s + z)
$$

$$
s = \frac{d_{max} - d_{min}}{q_{max} - q_{min}}
$$

### 复杂公式

$$
q_i = \frac{e^{z_i / T}}{\sum_{j=1}^{n} e^{z_j / T}}
$$

$$
L = \alpha L_{soft} + \beta L_{hard}
$$

$$
y = U(\Sigma V^T)x
$$

### 行内公式与其他行内元素混排

深度可分离卷积的参数量为 $h \times w \times D_i + D_i \times D_o$，相比常规卷积的 $h \times w \times D_i \times D_o$ 大幅减少。使用 `8` 位量化时，数值范围为 $-128$ ~ $127$。

### 引用块内含公式

> 发送方发送窗口大小应该取 $\min(rwnd, cwnd)$。

<!-- @xprops background="blue" -->

> 移项得 $r(B) - r(AB) \leq n - r(A)$，含义为同一个变换 $A$ 作用于 $n$ 维空间，其损失的维度一定不会小于变换 $A$ 作用于某个向量组 $B$。

### 列表项内含公式

- 对数量化：量化值在以 $2$ 为底的对数域上均匀分布
- 深度卷积：$g = D_i = D_o$，参数量为 $h \times w \times D_i$
- 逐点卷积：$h \times w = 1 \times 1$，参数量化简为 $D_i \times D_o$

### 连续块级公式

$$
r(AB) \leq \min(r(A), r(B))
$$

$$
r(A) + r(B) - n \leq r(AB)
$$

$$
r(B) - r(AB) \leq r(I) - r(AI)
$$

---

## 九、复杂嵌套模式

### 引用块内含标题+段落+代码

<!-- @xprops background="blue" -->

> ### 实际案例
>
> 下面的代码展示了一个逗号运算符解绑定 `this` 的技巧：
>
> ```js
> (0, obj1.f)(); // Window {...}
> ```
>
> 尽管表达式 `(0, obj1.f)` 与 `obj1.f` 指向同一函数，但调用点不再是对象方法调用，`this` 指向全局对象。

### 引用块内含列表+代码

<!-- @xprops background="gray" -->

> 常见的盲注技术：
>
> - **布尔盲注**：通过页面响应差异判断
> - **时间盲注**：通过响应延迟判断
> - **报错注入**：利用数据库报错信息
>
> ```sql
> SELECT if(ascii(substr((SELECT password FROM users LIMIT 1), 1, 1)) > 96, sleep(2), 0);
> ```

### 列表项含段落+代码+说明（博客典型模式）

- `extractvalue(xml_string, xpath)`：该函数用于从 XML 文档中提取数据。如果 `xpath` 不合法，报错中会出现 `xpath` 的内容。

    ```sql
    extractvalue(null, concat(0x7e, (SELECT 'anything'), 0x7e))
    ```

    通常插入一个 `~`（`0x7e`）分隔符，一方面方便定位报错信息，另一方面是使用 Xpath 不支持的字符确保稳定触发报错。

- `updatexml(xml_string, xpath, new_xml)`：与 `extractvalue` 类似。

    ```sql
    updatexml(null, concat(0x7e, (SELECT 'anything'), 0x7e), null)
    ```

### 有序列表含段落+代码+子列表（博客典型模式）

1. 配置 QEMU 启动参数以实现共享目录和端口转发：

    ```bash
    qemu-system-x86_64 -m 1024 -hda /path/to/debian.qcow2 \
        -virtfs local,path=/shared,mount_tag=shared,security_model=none \
        -netdev user,id=net0,hostfwd=tcp::2222-:22 \
        -nographic
    ```

    - `-virtfs`：启用虚拟文件系统共享
    - `-netdev`：使用 user 网络模式，转发端口

2. 关闭虚拟机，用新命令重新启动。

3. 在虚拟机中挂载共享目录：

    ```bash
    mkdir -p /mnt/shared
    mount -t 9p shared /mnt/shared
    ```

    - `-t`：指定文件系统类型，QEMU 的 `-virtfs` 默认使用 9P 文件系统。

4. 修改 SSH 配置以允许 root 登录：

    修改 `/etc/ssh/sshd_config`：

    <!-- @xprops diffRemovedLines="1-2" diffAddedLines="3-4" -->

    ```text
    #PermitRootLogin prohibit-password
    #PermitEmptyPasswords no
    PermitRootLogin yes
    PermitEmptyPasswords yes
    ```

    保存退出后重启服务：`sudo systemctl restart sshd`

### 深度嵌套：列表 > 引用块 > 代码

- 当发现服务端延迟远大于设置的参数时：

    > 可能是在当前语法中 `sleep` 函数会对每一行数据都调用一次，例如：
    >
    > ```sql
    > SELECT id FROM users WHERE sleep(1);
    > ```

- 正常的列表项，用于验证嵌套后续项渲染正常。

---

## 十、边缘情况

### 紧凑列表 vs 松散列表

紧凑列表（项之间无空行）：

- 项 A
- 项 B
- 项 C

松散列表（项之间有空行）：

- 项 A

- 项 B

- 项 C

### 连续代码块

```js
const a = 1;
```

```python
b = 2
```

```sql
SELECT 3;
```

### 段落紧接代码块

这段话的下一行就是代码块。

```js
console.log('紧接着段落的代码块');
```

这段话紧接在代码块之后。

### 长段落

这是一段比较长的连续文本，用于测试段落在较宽和较窄视口下的换行表现。段落中可以包含各种行内元素，比如**加粗的关键词**、`inline code`、以及指向外部资源的[超链接](https://example.com)。当段落足够长时，浏览器需要正确处理文本折行，同时保证行内元素的样式不会被折断或出现异常。此外，中英文混排时的排版也需要关注，确保 CJK 字符和 Latin 字符之间有适当的间距。

### 空引用块

>

### @x 注释不影响非目标元素

<!-- @xprops background="green" -->

> 这条引用块应该有绿色背景。

下方的段落不应该继承任何 `@x` 属性。
