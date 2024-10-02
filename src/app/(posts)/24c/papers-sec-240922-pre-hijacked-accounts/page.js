import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/papers-sec-240922-pre-hijacked-accounts/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>相关链接：</X.P>
            <X.Uli>@Pre-hijacked accounts: An Empirical Study of Security Failures in User Account Creation on the Web[https://www.usenix.org/system/files/sec22-sudhodanan.pdf]@</X.Uli>
        </>
    );
}
