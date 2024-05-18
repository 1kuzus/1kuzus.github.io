import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/injective-surjective-bijective/';
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
        </>
    );
}
