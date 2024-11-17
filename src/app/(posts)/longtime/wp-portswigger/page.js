import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/wp-portswigger/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>SQL injection</X.H1>
            <X.H2>Ap: SQL injection vulnerability allowing login bypass</X.H2>
            <X.P>直接用用户名`administrator' --`；或用户名`administrator`，密码`1' or 1=1 --`。</X.P>
            <X.H1>Path traversal</X.H1>
            <X.H2>Ap: File path traversal, simple case</X.H2>
            <X.P>随便检查一个图片，地址为`/image?filename=23.jpg`，改为`/txt?filename=../../../etc/passwd`即可。</X.P>
        </>
    );
}
