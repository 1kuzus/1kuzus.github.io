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
    const scrollHandler = () => {
        titles.map((title, index) => {
            console.log(document.getElementById(SHA256Hash8(title.text)).offsetTop);
            console.log(document.getElementById(SHA256Hash8(title.text)).clientTop);
        });
        console.log('---');
    };

    oliIdx = 0;

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className="x-blogwrapper">
            {children}
            <BlogContent titles={titles} />
        </div>
    );
}
