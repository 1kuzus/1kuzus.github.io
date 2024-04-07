import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/23d/github-linguist-vendored/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.P>
                参考：@https://github.com/github-linguist/linguist/blob/master/docs/overrides.md#vendored-code[https://github.com/github-linguist/linguist/blob/master/docs/overrides.md#vendored-code]@
            </X.P>
            <X.P>在仓库根目录创建`.gitattributes`，如果想屏蔽某个目录下的`全部文件`，则写入：</X.P>
            <X.CodeBlock language="text" code="/path/to/dir/* linguist-vendored" />
            <X.P>如果想屏蔽某个目录下的`全部文件和目录`，则写入：</X.P>
            <X.CodeBlock language="text" code="/path/to/dir/** linguist-vendored" />
        </>
    );
}
