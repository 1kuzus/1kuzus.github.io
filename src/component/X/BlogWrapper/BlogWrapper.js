import {useState, useLayoutEffect} from 'react';
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
    return (
        <div className="x-blogcontent">
            {titles.map((titleNode, index) => {
                const {className: type, innerHTML: text} = titleNode;
                return (
                    <div
                        key={index}
                        className={`x-blogcontent-titletype-${type}${index === activeIdx ? ' active' : ''}`}
                        onClick={() => document.documentElement.scrollTo({top: titleNode.offsetTop - 64 - 16})}
                    >
                        {text}
                    </div>
                );
            })}
        </div>
    );
}

export default function BlogWrapper(props) {
    const {children} = props;
    const [activeIdx, setActiveIdx] = useState(0);
    const [titles, setTitles] = useState([]);

    oliIdx = 0;

    useLayoutEffect(() => {
        document.documentElement.scrollTo({top: 0});
        const titleNodes = Array.from(document.querySelectorAll('.x-blogwrapper>.x-h1,.x-blogwrapper>.x-h2'));
        setTitles(titleNodes);
        const scrollHandler = () => {
            if (!titleNodes) return;
            //找到最后一个自身offsetTop小于<html>根元素的titleNode元素在titleNodes数组中的位置
            //也就是最后一个已经向上滚动出文本可视范围外(即元素顶部已经在header底边的上方)的标题的索引
            //64是header高度，32是希望距离header底边有32px距离时就判定为进入下一块内容
            const lastIdx = titleNodes
                .map((titleNode) => titleNode.offsetTop)
                .findLastIndex((offset) => offset - 64 - 32 <= document.documentElement.scrollTop);
            //lastIdx可能为-1，特殊处理
            setActiveIdx(Math.max(0, lastIdx));
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className="x-blogwrapper">
            {children}
            {titles?.length ? <BlogContent titles={titles} activeIdx={activeIdx} /> : null}
        </div>
    );
}
