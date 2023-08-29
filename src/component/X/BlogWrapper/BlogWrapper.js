import {useLayoutEffect} from 'react';
import Prism from 'prismjs';
import './BlogWrapper.css';

export default function BlogWrapper(props) {
    const {children} = props;
    useLayoutEffect(() => {
        Prism.highlightAll();
    }, []);
    return <div className="x-blogwrapper">{children}</div>;
}
