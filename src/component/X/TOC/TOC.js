'use client';
import {useState, useLayoutEffect} from 'react';
import './TOC.css';

export default function Contents() {
    const [titleNodes, setTitleNodes] = useState([]);
    const [activeIndex, setActiveIndex] = useState();
    const getMappedOffsetTop = (titleNodes, container) => {
        const titleNodesOffsetTop = titleNodes.map((titleNode) => titleNode.offsetTop - 80);
        // return titleNodesOffsetTop; //旧版
        const maxContainerScrollTop = container.scrollHeight - container.clientHeight;
        const ot_i = titleNodesOffsetTop.findLast((offset) => offset <= maxContainerScrollTop) || 0;
        const ot_n = titleNodesOffsetTop[titleNodes.length - 1];
        const line = (a, b, c, d, x) => ((d - b) / (c - a)) * (x - a) + b;
        return titleNodesOffsetTop.map((ot) => (ot <= ot_i ? ot : line(ot_i, ot_i, ot_n, maxContainerScrollTop, ot)));
    };
    useLayoutEffect(() => {
        const nodes = Array.from(
            document.querySelectorAll('.x-h1:not(.x-h1.exclude-from-contents), .x-h2:not(.x-h2.exclude-from-contents)')
        );
        const scrollHandler = () => {
            const mappedOffsetTop = getMappedOffsetTop(nodes, document.documentElement);
            const lastIdx = mappedOffsetTop.findLastIndex(
                (offset) => offset <= Math.ceil(document.documentElement.scrollTop)
            );
            setActiveIndex(lastIdx);
        };
        window.addEventListener('scroll', scrollHandler);
        scrollHandler();
        setTitleNodes(nodes);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    return (
        <div id="contents">
            <h4
                id="contents-header"
                onClick={() => {
                    document.documentElement.scrollTo({top: 0});
                }}
            >
                本页目录
            </h4>
            {titleNodes?.length ? (
                <ul>
                    {titleNodes.map((titleNode, index) => {
                        const {textContent: text, className: type} = titleNode;
                        return (
                            <li
                                key={index}
                                className={`titletype-${type}${index === activeIndex ? ' active' : ''}`}
                                onClick={() => {
                                    const mappedOffsetTop = getMappedOffsetTop(titleNodes, document.documentElement);
                                    document.documentElement.scrollTo({top: Math.ceil(mappedOffsetTop[index])});
                                }}
                            >
                                {text}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
}
