import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/learn-cwes/';
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
            <X.H1>关于CWE</X.H1>
            <X.P>*通用缺陷枚举*`(Common Weakness Enumeration, CWE)`</X.P>
        </>
    );
}
