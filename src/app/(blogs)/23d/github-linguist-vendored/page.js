import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/23d/github-linguist-vendored/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>参考：@[https://github.com/github-linguist/linguist/blob/master/docs/overrides.md#vendored-code]@</X.P>
            <X.P>在仓库根目录创建`.gitattributes`，如果想屏蔽某个目录下的`全部文件`，则写入：</X.P>
            <X.CodeBlock language="text" code="/path/to/dir/* linguist-vendored" />
            <X.P>如果想屏蔽某个目录下的`全部文件和目录`，则写入：</X.P>
            <X.CodeBlock language="text" code="/path/to/dir/** linguist-vendored" />
        </>
    );
}
