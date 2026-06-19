参考：[https://github.com/github-linguist/linguist/blob/master/docs/overrides.md#vendored-code](https://github.com/github-linguist/linguist/blob/master/docs/overrides.md#vendored-code)

在仓库根目录创建`.gitattributes`，如果想屏蔽某个目录下的`全部文件`，则写入：

```text
/path/to/dir/* linguist-vendored
```

如果想屏蔽某个目录下的`全部文件和目录`，则写入：

```text
/path/to/dir/** linguist-vendored
```
