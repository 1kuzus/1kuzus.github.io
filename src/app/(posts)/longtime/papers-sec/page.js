import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/papers-sec/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
        </>
    );
}
