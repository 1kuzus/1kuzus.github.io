import {useLayoutEffect} from 'react';
import 'prismjs/themes/prism.css';
import hljs from 'highlight.js';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import './BlogWrapper.css';

// Prism.manual = true;

Prism.highlightAll();

export default function BlogWrapper(props) {
    const {children} = props;
    useLayoutEffect(() => {
        Prism.highlightAll();
    }, []);
    return <div className="x-blogwrapper">{children}</div>;
}
