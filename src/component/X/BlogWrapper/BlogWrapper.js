import {useEffect, useState} from 'react';
import {SHA256Hash8} from '@/utils/SHA256Hash';
import {H1, H2} from '../basics';
import './BlogWrapper.css';

let oliIdx = 0;
export function addOliIdx() {
    return ++oliIdx;
}
export function setOliIdx(idx) {
    return (oliIdx = idx);
}

function BlogContent(props) {
    const {titles, activeIdx} = props;
    //todo: 注意空数组情况
    return (
        <div className="x-blogcontent">
            {titles.map((title, index) => (
                <div
                    key={index}
                    onClick={() => {
                        const titleElement = document.getElementById(SHA256Hash8(title.text));
                        document.documentElement.scrollTo({
                            top: titleElement.offsetTop - 64 - 16,
                            behavior: 'smooth',
                        });
                        // document.getElementById(SHA256Hash8(title.text)).scrollIntoView({behavior: 'smooth'});
                    }}
                >
                    {index === activeIdx ? '*' : ''}
                    {title.type === 'x-h2' ? '. . .' : ''}
                    {title.text}
                </div>
            ))}
        </div>
    );
}

export default function BlogWrapper(props) {
    const {children} = props;
    const [activeIdx, setActiveIdx] = useState(0);
    const titles = children.reduce((titles, current) => {
        if (current.type === H1) return [...titles, {type: 'x-h1', text: current.props.children}];
        else if (current.type === H2) return [...titles, {type: 'x-h2', text: current.props.children}];
        else return titles;
    }, []);

    oliIdx = 0;

    useEffect(() => {
        const scrollHandler = () => {
            //找到最后一个自身offsetTop小于<html>根元素的scrollTop的title元素在titles数组中的位置。
            //也就是最后一个已经向上滚动出文本可视范围外(即元素顶部已经在header底边的上方)的标题的索引
            //+64是header高度，+16是希望距离header底边有16px距离时就判定为进入下一主题。
            const lastIdx = titles
                .map((title) => document.getElementById(SHA256Hash8(title.text)).offsetTop)
                .findLastIndex((offset) => offset - 64 - 16 < document.documentElement.scrollTop);
            //没有滚动时
            setActiveIdx(Math.max(0, lastIdx));
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [titles]);

    return (
        <div className="x-blogwrapper">
            {children}
            <BlogContent titles={titles} activeIdx={activeIdx} />
        </div>
    );
}
