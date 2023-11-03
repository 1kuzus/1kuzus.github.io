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
                    className={`x-blogcontent-titletype-${title.type}${index === activeIdx ? ' active' : ''}`}
                    onClick={() => {
                        //这里不用getElementById，用index匹配原来html的元素。
                        const titleElement = document.getElementById(SHA256Hash8(title.type + title.text + title.salt));
                        document.documentElement.scrollTo({
                            top: titleElement.offsetTop - 64 - 16,
                        });
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
    const [activeIdx, setActiveIdx] = useState(0);
    //todo 优化判断逻辑
    //todo 全都可以用queryselectorAll重写，弃用hash值做id
    const titles = Array.isArray(children)
        ? children.reduce((titles, current) => {
              if (current.type === H1)
                  return [...titles, {type: 'x-h1', text: current.props.children, salt: current.props.salt || ''}];
              else if (current.type === H2)
                  return [...titles, {type: 'x-h2', text: current.props.children, salt: current.props.salt || ''}];
              else return titles;
          }, [])
        : null;

    oliIdx = 0;

    useEffect(() => {
        // const titles=queryselectorall('x-blogwrapper>x-h1,x-blogwrapper>x-h2')
        const scrollHandler = () => {
            if (!titles) return;
            //找到最后一个自身offsetTop小于<html>根元素的scrollTop的title元素在titles数组中的位置。
            //也就是最后一个已经向上滚动出文本可视范围外(即元素顶部已经在header底边的上方)的标题的索引
            //64是header高度，32是希望距离header底边有32px距离时就判定为进入下一块内容
            const lastIdx = titles
                .map((title) => document.getElementById(SHA256Hash8(title.type + title.text + title.salt)).offsetTop)
                .findLastIndex((offset) => offset - 64 - 32 <= document.documentElement.scrollTop);
            //lastIdx可能为-1，特殊处理
            setActiveIdx(Math.max(0, lastIdx));
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [titles]);

    return (
        <div className="x-blogwrapper">
            {children}
            {titles && <BlogContent titles={titles} activeIdx={activeIdx} />}
        </div>
    );
}
