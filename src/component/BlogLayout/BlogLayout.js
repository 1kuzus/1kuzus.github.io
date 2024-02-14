import {useState, useLayoutEffect} from 'react';
import {useGlobalContext} from 'src/context/GlobalContext';
import Sidebar from '../Sidebar/Sidebar';
import './BlogLayout.css';

let oliIdx = 0;
export function addOliIdx() {
    return ++oliIdx;
}
export function setOliIdx(idx) {
    return (oliIdx = idx);
}

function Contents(props) {
    const {titles, activeIdx} = props;
    return (
        <div id="contents">
            <h4 id="contents-header">本页目录</h4>
            <ul>
                {titles.map((titleNode, index) => {
                    const {className: type, textContent: text} = titleNode;
                    return (
                        <li
                            key={index}
                            className={`titletype-${type}${index === activeIdx ? ' active' : ''}`}
                            onClick={() => document.documentElement.scrollTo({top: titleNode.offsetTop - 80})}
                        >
                            {text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default function BlogLayout(props) {
    const {children} = props;
    const {showSidebar, setShowSidebar} = useGlobalContext();
    const [activeIdx, setActiveIdx] = useState(0);
    const [titles, setTitles] = useState([]);
    oliIdx = 0;
    useLayoutEffect(() => {
        const container = document.documentElement;
        container.scrollTo({top: 0});
        setShowSidebar(false);
        const titleNodes = Array.from(document.querySelectorAll('#main>.x-h1,#main>.x-h2'));
        setTitles(titleNodes);
        if (!titleNodes?.length) return;
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
    }, [children]);
    return (
        <div id="blog-layout">
            <div id="sidebar" className={showSidebar ? 'show-sidebar' : null}>
                <Sidebar />
            </div>
            <div id="main">{children}</div>
            {titles?.length ? <Contents titles={titles} activeIdx={activeIdx} /> : null}
            <div
                id="sidebar-mask"
                className={showSidebar ? 'show-sidebar' : null}
                onClick={() => {
                    setShowSidebar(!showSidebar);
                }}
            />
        </div>
    );
}
