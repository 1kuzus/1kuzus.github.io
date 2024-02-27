import {useState, useLayoutEffect} from 'react';
import './Contents.css';

export default function Contents(props) {
    const {titleNodes} = props;
    const [activeIndex, setActiveIndex] = useState(0);
    useLayoutEffect(() => {
        const container = document.documentElement;
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
            setActiveIndex(Math.max(0, lastIdx));
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [titleNodes]);
    return (
        <>
            <h4
                id="contents-header"
                onClick={() => {
                    document.documentElement.scrollTo({top: 0});
                }}
            >
                本页目录
            </h4>
            <ul>
                {titleNodes.map((titleNode, index) => {
                    const {className: type, textContent: text} = titleNode;
                    return (
                        <li
                            key={index}
                            className={`titletype-${type}${index === activeIndex ? ' active' : ''}`}
                            onClick={() => document.documentElement.scrollTo({top: titleNode.offsetTop - 80})}
                        >
                            {text}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
