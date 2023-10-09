import {useEffect} from 'react';
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
    const {titles} = props;
    return (
        <div className="x-blogcontent">
            {titles.map((title, index) => (
                <div
                    key={index}
                    onClick={() => {
                        document.getElementById(SHA256Hash8(title.text)).scrollIntoView({behavior: 'smooth'});
                    }}
                >
                    {title.text}
                </div>
            ))}
        </div>
    );
}

export default function BlogWrapper(props) {
    const {children} = props;
    const titles = children.reduce((titles, current) => {
        if (current.type === H1) return [...titles, {type: 'x-h1', text: current.props.children}];
        else if (current.type === H2) return [...titles, {type: 'x-h2', text: current.props.children}];
        else return titles;
    }, []);

    oliIdx = 0;

    useEffect(() => {
        const scrollHandler = () => {
            //找到第一个自身offsetTop大于<html>根元素的scrollTop的title元素在titles数组中的位置。
            //也就是目前还没有向上滚动出屏幕范围外的、第一个标题的索引
            const idx = titles
                .map((title) => document.getElementById(SHA256Hash8(title.text)).offsetTop)
                .findIndex((offset) => offset > document.documentElement.scrollTop);
            console.log(idx);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [titles]);

    return (
        <div className="x-blogwrapper">
            {children}
            <BlogContent titles={titles} />
        </div>
    );
}
