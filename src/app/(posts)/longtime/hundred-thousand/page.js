import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/longtime/hundred-thousand/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>Tech</X.H1>
            <X.H2>循环次数</X.H2>
            <X.P>
                电池的设计容量被完整放电一次的过程，电量使用总量达到`100%`完成一次循环。\nMac官网：循环次数超过上限以后（大约几百次，视机型而定），最高可保持初始充电容量的`80%`。
            </X.P>
        </>
    );
}
