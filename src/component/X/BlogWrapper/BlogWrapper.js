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
        const container = document.documentElement;
        container.scrollTo({top: 0});
        const titleNodes = Array.from(document.querySelectorAll('.x-blogwrapper>.x-h1,.x-blogwrapper>.x-h2'));
        if (!titleNodes?.length) return;
        setTitles(titleNodes);
        const scrollHandler = () => {
            const titleNodesOffsetTop = titleNodes.map((titleNode) => titleNode.offsetTop - 96);
            const containerScrollTop = Math.ceil(container.scrollTop);

            // const line = (a, b, c, d, x) => ((d - b) / (c - a)) * (x - a) + b;
            // const maxContainerScrollTop = container.scrollHeight - container.clientHeight;
            // const ot_i_idx = titleNodesOffsetTop.findLastIndex((offset) => offset <= maxContainerScrollTop);
            // const ot_i = ot_i_idx !== -1 ? titleNodesOffsetTop[ot_i_idx] : 0;
            // const ot_n = titleNodesOffsetTop[titleNodes.length - 1];
            // const threshold =
            //     containerScrollTop < ot_i
            //         ? containerScrollTop
            //         : Math.max(containerScrollTop, line(ot_i, ot_i, maxContainerScrollTop, ot_n, containerScrollTop));

            const threshold = containerScrollTop;
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
