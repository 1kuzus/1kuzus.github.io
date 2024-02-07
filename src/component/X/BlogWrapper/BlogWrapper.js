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
                const {className: type, textContent: text} = titleNode;
                return (
                    <div
                        key={index}
                        className={`x-blogcontent-titletype-${type}${index === activeIdx ? ' active' : ''}`}
                        onClick={() => document.documentElement.scrollTo({top: titleNode.offsetTop - 80})}
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
        const container = document.documentElement;
        container.scrollTo({top: 0});
        const titleNodes = Array.from(document.querySelectorAll('.x-blogwrapper>.x-h1,.x-blogwrapper>.x-h2'));
        if (!titleNodes?.length) return;
        setTitles(titleNodes);
        const scrollHandler = () => {
            const titleNodesOffsetTop = titleNodes.map((titleNode) => titleNode.offsetTop - 80);
            const containerScrollTop = Math.ceil(container.scrollTop);

            // 新版
            const line = (a, b, c, d, x) => ((d - b) / (c - a)) * (x - a) + b;
            const maxContainerScrollTop = container.scrollHeight - container.clientHeight;
            const ot_i = titleNodesOffsetTop.findLast((offset) => offset <= maxContainerScrollTop) || 0;
            const ot_n = titleNodesOffsetTop[titleNodes.length - 1];
            const threshold =
                containerScrollTop < ot_i || ot_i === ot_n
                    ? containerScrollTop
                    : line(ot_i, ot_i, maxContainerScrollTop, ot_n, containerScrollTop);
            // 旧版
            // const threshold = containerScrollTop;
            const lastIdx = titleNodesOffsetTop.findLastIndex((offset) => offset <= threshold);
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
