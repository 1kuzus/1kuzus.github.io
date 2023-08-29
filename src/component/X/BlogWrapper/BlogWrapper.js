import {useLayoutEffect} from 'react';
import Prism from 'prismjs';
import hljs from 'highlight.js';
import './BlogWrapper.css';

export default function BlogWrapper(props) {
    const {children} = props;
    useLayoutEffect(() => {
        Prism.highlightAll();
        // hljs.highlightAll();
    }, []);
    return <div className="x-blogwrapper">{children}</div>;
}
