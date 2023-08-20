import {useLayoutEffect} from 'react';
// import 'highlight.js/styles/base16/3024.css';
import hljs from 'highlight.js';
import './BlogWrapper.css';

export default function BlogWrapper(props) {
    const {children} = props;
    useLayoutEffect(() => {
        hljs.highlightAll();
    }, []);
    return <div className="x-blogwrapper">{children}</div>;
}
