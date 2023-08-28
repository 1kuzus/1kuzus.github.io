import {useLayoutEffect} from 'react';
import 'prismjs/themes/prism.css';
import hljs from 'highlight.js';
import prismjs from 'prismjs';
import './BlogWrapper.css';


export default function BlogWrapper(props) {
    const {children} = props;
    useLayoutEffect(() => {
        prismjs.highlightAll();
    }, []);
    return <div className="x-blogwrapper">{children}</div>;
}
